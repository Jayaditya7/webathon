import React, { useState, useEffect } from 'react'
import Avatar from '../Avatar'
import EditProfile from './EditProfile'
import FollowBtn from '../FollowBtn'
import Followers from './Followers'
import Following from './Following'
import ContainerComponent from '../../components/ContainerComponent'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'

const Info = ({id, auth, profile, dispatch}) => {
    const [userData, setUserData] = useState([])
    const [onEdit, setOnEdit] = useState(false)

    const [showFollowers, setShowFollowers] = useState(false)
    const [showFollowing, setShowFollowing] = useState(false)

    useEffect(() => {
        if(id === auth.user._id){
            setUserData([auth.user])
        }else{
            const newData = profile.users.filter(user => user._id === id)
            setUserData(newData)
        }
    }, [id, auth, dispatch, profile.users])


    useEffect(() => {
        if(showFollowers || showFollowing || onEdit){
            dispatch({ type: GLOBALTYPES.MODAL, payload: true})
        }else{
            dispatch({ type: GLOBALTYPES.MODAL, payload: false})
        }
    },[showFollowers, showFollowing, onEdit, dispatch])
    
   
    return (
        <>
        
        <div className="profileinfo">
            {
                userData.map(user => (
                    <div className="profileinfo-container" key={user._id}>
                        <div className="profileinfo-top">
                        <Avatar src={user.avatar} size="supper-avatar" />
                        </div>

                        <div className="profileinfo-center">
                        <img className="profileinfo-centeravatar" src={user.avatar} alt=""/>
                        {
                                    user._id === auth.user._id
                                    ?  <button className="profileinfo-centerbutton"
                                    onClick={() => setOnEdit(true)}>
                                        Edit Profile
                                    </button>
                                    
                                    : <FollowBtn user={user} />
                        }
                    </div>

                    <div className="profileinfo-bottom">
                        <div className="profileinfo-bottomleft">
                        <div className="profileinfo-stat">
                            <h6 className="profileinfo-statnumber">{user.followers.length}</h6>
                            <h6 className="profileinfo-statdesc" style={{cursor:'pointer'}}  onClick={() => setShowFollowers(true)}>Followers</h6>
                        </div>
                       
                        </div>
                        <div className="profileinfo-bottomcenter">
                            <h3 className="profileinfo-fullname" >{user.fullname}</h3>
                            <h5 className="profileinfo-username">{user.username}</h5>
                            
                        </div>
                        <div className="profileinfo-bottomright">
                        <div className="profileinfo-stat">
                            <h6 className="profileinfo-statnumber" >{user.following.length}</h6>
                            <h6 className="profileinfo-statdesc" style={{cursor:'pointer'}} onClick={() => setShowFollowing(true)}>Following</h6>
                        </div>
                        </div>
                    </div>

                    


                        {
                            onEdit && <EditProfile setOnEdit={setOnEdit} />
                        }

{
                            showFollowers &&
                            <Followers 
                            users={user.followers} 
                            setShowFollowers={setShowFollowers} 
                            />
                        }
                        {
                            showFollowing &&
                            <Following 
                            users={user.following} 
                            setShowFollowing={setShowFollowing} 
                            />
                        }

                        
                    </div>
                ))
            }
        </div>

        

               
        
        </>
    )
}

export default Info
