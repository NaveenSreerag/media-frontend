import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import CommentMenu from './CommentMenu'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { useDispatch, useSelector } from 'react-redux'
import { updateComment } from '../../../Actions/Posts'

const Details = ({ comment, post }) => {
    const dispath = useDispatch();
    const { user } = useSelector(state => state.user)
    const [content, setContent] = useState('');
    const [readMore, setReadMore] = useState(false);
    const [isLike, setIslike] = useState(false);
    const [openEdit, setOpenEdit] = useState(false)


    const handleLike = () => {
        setIslike(!isLike);
    }
    const handleCommentUpdate = () => {
        if (comment.comment !== content) {
            dispath(updateComment({comment,content}))
            
            setOpenEdit(!openEdit)



        } else {
            setOpenEdit(!openEdit)
            toast.error("Same Comment.Not updated")
            
        }
    }

    useEffect(() => {

        setContent(comment.comment);
    }, [comment])

    return (
        <>
            <div className="comment">
                <img src={comment.user.profilePicture ? comment.user.profilePicture.url : post.postedBy.avatar} alt="" />
                <div className="info">


                    <Link to={`/profile/${comment.user._id}`}>
                        <span>{comment.user.fullname}</span>
                    </Link>

                    {
                        openEdit ? <textarea rows="6" cols='60' value={content} onChange={(e) => setContent(e.target.value)} /> :

                            <>
                                <p> {content.length < 100 ? content :
                                    readMore ? content + " " : content.slice(0, 100) + "..."}</p>

                                {
                                    content.length > 100 &&
                                    <span className='date' onClick={() => setReadMore(!readMore)}> {readMore ? "Hide" : "Read More.."}</span>

                                }
                            </>
                    }


                    <div className="side-comment">

                        {
                            openEdit ? <>

                                <span className='' onClick={handleCommentUpdate}>Update</span>
                                <span className='' onClick={() => setOpenEdit(!openEdit)}>Cancel</span>

                            </> :
                                <>

                                    {isLike ? <FavoriteOutlinedIcon style={{ color: "red", width: "17px" }} onClick={handleLike} /> :
                                        <FavoriteBorderOutlinedIcon style={{ width: "17px" }} onClick={handleLike} />}

                                    <span className=''>{comment.like.length} Likes</span>
                                    <span className=''>Reply</span>
                                    <span className=''>{moment(comment.createdAt).fromNow()}</span>
                                </>

                        }



                    </div>

                </div>
                <CommentMenu comment={comment} post={post} user={user} openEdit={openEdit} setOpenEdit={setOpenEdit} />





            </div>



        </>
    )
}

export default Details