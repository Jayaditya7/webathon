import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PostThumb = ({posts, result}) => {
   

    if(result === 0) return <h2 className="text-center" style={{color:'#1877f2',marginTop:'20px'}}>No Posts to show</h2>

    return (
        <div className="post_thumb">
            {
                posts.map(post => (
                    <Link key={post._id} to={`/post/${post._id}`}>
                        <div className="post_thumb_display">

                            {
                                post.images[0].url.match(/video/i)
                                ?<video controls src={post.images[0].url} alt={post.images[0].url}
                                 />

                                :<img src={post.images[0].url} alt={post.images[0].url}
                                 />
                            }

                            
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default PostThumb
