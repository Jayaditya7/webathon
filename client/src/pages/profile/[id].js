import React, { useEffect, useState } from 'react'

import Info from '../../components/profile/Info'
import Posts from '../../components/profile/Posts'
import Saved from '../../components/profile/Saved'

import { useSelector, useDispatch } from 'react-redux'
import LoadIcon from '../../images/load.gif'
import { getProfileUsers } from '../../redux/actions/profileAction'

import { useParams } from 'react-router-dom'

import { IconButton } from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PeopleIcon from '@material-ui/icons/People';
import BookmarksIcon from '@material-ui/icons/Bookmarks';

const Profile = () => {
    const { profile, auth } = useSelector(state => state)
    const dispatch = useDispatch()

    const { id } = useParams()
    const [saveTab, setSaveTab] = useState(false)

    const [showaccount, setshowaccount] = useState(true);
const [showfriends, setshowfriends] = useState(false);
const [showfollowing, setshowfollowing] = useState(false);
const [showsaved, setshowsaved] = useState(false);

const handletoggle = (ht) =>{
    
    if(ht === 'showaccount'){
        setshowsaved(false);
        setshowfriends(false);
        setshowfollowing(false);
        setshowaccount(true)
    }else if(ht === 'showfriends'){
        setshowsaved(false);
        setshowfriends(true);
        setshowfollowing(false);
        setshowaccount(false)
    }else  if(ht === 'showfollowing'){
        setshowsaved(false);
        setshowfriends(false);
        setshowfollowing(true);
        setshowaccount(false)
    }else  if(ht === 'showsaved'){
        setshowsaved(true);
        setshowfriends(false);
        setshowfollowing(false);
        setshowaccount(false)
    }

}

    useEffect(() => {
        if(profile.ids.every(item => item !== id)){
            dispatch(getProfileUsers({id, auth}))
        }
    },[id, auth, dispatch, profile.ids])
// console.log(profile.users[0])
    return (
        <div className="profile main">
            
            <Info auth={auth} profile={profile} dispatch={dispatch} id={id} />

            

           
            {
                auth.user._id === id &&
                <div className="profile_tab" >
                    <button className={saveTab ? '' : 'active'} style={{border:'none'}} onClick={() => setSaveTab(false)}><span class="material-icons" >
apps
</span></button>
                    <button className={saveTab ? 'active' : ''}  style={{border:'none'}} onClick={() => setSaveTab(true)}><span class="material-icons">
bookmark
</span></button>
                </div>
            }

            {
                profile.loading 
                ? <img className="d-block mx-auto" src={LoadIcon} alt="loading" />
                : <>
                    {
                        saveTab
                        ? <Saved auth={auth} dispatch={dispatch} />
                        : <Posts auth={auth} profile={profile} dispatch={dispatch} id={id} />
                    }
                </>
            }
            
        </div>
    )
}

export default Profile
