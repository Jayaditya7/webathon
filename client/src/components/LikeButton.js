import React from 'react'


const LikeButton = ({isLike, handleLike, handleUnLike}) => {
    

    return (
        <>
            {
                isLike
                ? <span class="material-icons" onClick={handleUnLike} style={{size:'20px',marginLeft:'20px',marginTop:'10px',color:'#1877f2'}}>
                thumb_down
                </span>
                : <span class="material-icons" onClick={handleLike} style={{size:'20px',marginLeft:'20px',marginTop:'10px',color:'#1877f2'}}>
                thumb_up
                </span>
            }
        </>
    )
}

export default LikeButton
