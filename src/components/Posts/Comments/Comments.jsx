import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createComment } from '../../../Actions/Posts';
import "./Comments.css"
import Details from './Details';

const Comments = ({ post }) => {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.user)




    const [comment, setComment] = useState('')
    const[allcomments,setAllComments] = useState([])
    const [showComments,setShowComments] = useState([])
    const [nextComment,setNextComment] = useState(2)

    const handleSubmit = (e) => {

        e.preventDefault();

        dispatch(createComment(post, comment, user))

    }

    useEffect(() => {
      
       const c =  post.comments.filter(c => c)
       setAllComments(c)
       setShowComments(c.slice(c.length - nextComment))
    }, [post.comments,nextComment])
    
   
    return (
        <div className='comments'>
            <form action="" onSubmit={handleSubmit}>
                <div className="write">
                    <img src={user.profilePicture ? user.profilePicture.url : post.postedBy.avatar} alt="" />
                    <input type="text" placeholder='Write a comment..'
                        value={comment} onChange={(e) => setComment(e.target.value)} />
                    <button>Post</button>
                </div>
            </form>
            {/* {post.comments.map((comment) => (
                <Details/>
            ))} */}

            {
                showComments.map(comment =>(
                    <Details key={comment._id} comment={comment} post={post}  />
                ))
            }


            {
                allcomments.length - nextComment > 0 ? 
                <span style={{cursor:"pointer",font:'13px'}} onClick={()=>setNextComment(allcomments.length)}>
                    View all {allcomments.length - nextComment} comments...</span>
                :
                <span style={{cursor:"pointer",font:'13px'}} onClick={()=>setNextComment(2)}>Hide Comments</span>
            }
        </div>
    )
}

export default Comments