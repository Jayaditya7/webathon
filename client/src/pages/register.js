import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import { register } from '../redux/actions/authAction'

const Register = () => {
    const { auth, alert } = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()

    const initialState = { 
        fullname: '', username: '', email: '', password: '', cf_password: '', gender: 'male'
    }
    const [userData, setUserData] = useState(initialState)
    const { fullname, username, email, password, cf_password } = userData

    const [typePass, setTypePass] = useState(false)
    const [typeCfPass, setTypeCfPass] = useState(false)

    useEffect(() => {
        if(auth.token) history.push("/")
    }, [auth.token, history])

    
    const handleChangeInput = e => {
        const { name, value } = e.target
        setUserData({...userData, [name]:value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(register(userData))
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
            <form className="registerBox " onSubmit={handleSubmit}>
                    <input type="text" className="loginInput" id="fullname" name="fullname"
                    onChange={handleChangeInput} value={fullname} placeholder="Fullname"
                    style={{background: `${alert.fullname ? '#fd2d6a14' : ''}`}} />
                    
                    <input type="text" className="loginInput" id="username" name="username"
                    onChange={handleChangeInput} value={username.toLowerCase().replace(/ /g, '')} placeholder="Username"
                    style={{background: `${alert.username ? '#fd2d6a14' : ''}`}} />
                

               
                    <input type="email" className="loginInput" id="exampleInputEmail1" name="email"
                    onChange={handleChangeInput} value={email} placeholder="Email Id"
                    style={{background: `${alert.email ? '#fd2d6a14' : ''}`}} />
                    

                
                        
                        <input type={ typePass ? "text" : "password" } 
                        className="loginInput" id="exampleInputPassword1"
                        onChange={handleChangeInput} value={password} name="password"
                        style={{background: `${alert.password ? '#fd2d6a14' : ''}`}} placeholder="Password"/>

                        

               
                        
                        <input type={ typeCfPass ? "text" : "password" } 
                        className="loginInput" id="cf_password"
                        onChange={handleChangeInput} value={cf_password} name="cf_password" placeholder="Confirm Password"
                        style={{background: `${alert.cf_password ? '#fd2d6a14' : ''}`}} />

                       
                <div className="row justify-content-between mx-0 mb-1 ">
                    <label htmlFor="male">
                        Male: <input type="radio" id="male" name="gender"
                        value="male" defaultChecked onChange={handleChangeInput} />
                    </label>

                    <label htmlFor="female">
                        Female: <input type="radio" id="female" name="gender"
                        value="female" onChange={handleChangeInput} />
                    </label>

                    <label htmlFor="other">
                        Other: <input type="radio" id="other" name="gender"
                        value="other" onChange={handleChangeInput} />
                    </label>
                </div>
                
                <button type="submit" className="loginRegisterButton">
                    Register
                </button>

                <p className="my-2" style={{textAlign:"center"}}>
                    Already have an account? 
                </p>
                
                <Link to="/" style={{textAlign:"center"}}><button className="loginButton" style={{textAlign:"center"}}>Login</button></Link>
            </form>
            </div>
    </div>
        </div>
    )
}

export default Register
