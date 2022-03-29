import React from 'react'
import LoadIcon from '../../images/spin.gif'

const Loading = () => {
    return (
        <div className="position-fixed w-100 h-100 text-center loading"
        style={{background: "#0008", color: "white", top: 0, left: 0, zIndex: 50}}>

            <img src={LoadIcon} alt="loading" className="d-block mx-auto" />
            
        </div>
    )
}

export default Loading
