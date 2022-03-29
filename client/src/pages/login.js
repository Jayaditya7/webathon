import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { login } from '../redux/actions/authAction'
import { useDispatch, useSelector } from 'react-redux'


const Login = () => {
    const initialState = { email: '', password: '' }
    const [userData, setUserData] = useState(initialState)
    const { email, password } = userData

    const [typePass, setTypePass] = useState(false)

    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        if(auth.token) history.push("/")
    }, [auth.token, history])

    const handleChangeInput = e => {
        const { name, value } = e.target
        setUserData({...userData, [name]:value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(login(userData))
    }

    
    return (
        <div className="login">
    <div className="loginWrapper">
      <div className="loginLeft">
        <h3 className="loginLogo">SocialConnect</h3>
        <span className="loginDesc">
          SocialConnect helps you connect and share with the people in your life.
        </span>
      </div>
      <div className="loginRight">

            <form className="loginBox " onSubmit={handleSubmit}>
                    <input type="email" className="loginInput" id="exampleInputEmail1" name="email"
                    aria-describedby="emailHelp" onChange={handleChangeInput} value={email}  placeholder="Email Id"/>

                    <input type={ typePass ? "text" : "password" } 
                        className="loginInput" id="exampleInputPassword1"
                        onChange={handleChangeInput} value={password} name="password" placeholder="Password" />
                        
                                        
                <button type="submit" className="loginButton"
                disabled={email && password ? false : true}>
                    Login
                </button>

                
                    <p className="my-2" style={{textAlign:"center"}}>
                        You don't have an account?
                    </p>
                        <Link to="/register" style={{textAlign:"center"}}><button className="loginRegisterButton" style={{textAlign:"center"}}>Register Now</button></Link>
                    


                
            </form>
            </div>
    </div>
        </div>
    )
}

export default Login
