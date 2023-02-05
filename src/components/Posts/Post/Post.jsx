import React, { useEffect, useState } from 'react'
import "../Post/Post.css"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Link } from 'react-router-dom'
import Comments from '../Comments/Comments';
import Loader from "../../Loader/Loader"
import moment from 'moment';
import 'moment-timezone';
import { useDispatch, useSelector } from 'react-redux';
import { getfollowingPosts, likeAndUnlikePost } from '../../../Actions/Posts';
import { Button, Dialog } from '@mui/material'
import PostMoreInfo from './PostMoreInfo';

const Post = ({ post, loading }) => {

  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user)


  const [commentsOpen, setCommentsOpen] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [likesUser, setLikesUser] = useState(false)


  const handlelike = () => {
    setIsLiked(!isLiked);
    dispatch(likeAndUnlikePost(post._id));
    dispatch(getfollowingPosts());
  }

  useEffect(() => {

    if (post.likes.find(like => like._id === user._id)) {
      setIsLiked(true)

    }

  }, [post.likes, user._id])

  return loading ?
    (<Loader />) :

    (
      <div className='post'>
        <div className="container">
          <div className="user">
            <div className="userInfo">
              <img src={post.postedBy.profilePicture ? post.postedBy.profilePicture.url : post.postedBy.avatar} alt="" />
              <div className="details">
                <Link to={`/profile/${post.postedBy._id}`} style={{ textDecoration: "none", color: "inherit" }} >
                  <span className='name'>{post.postedBy.fullname}</span>

                </Link>
                <span className='date'>{moment(post.createdAt).fromNow()}</span>

              </div>
            </div>

            
            <PostMoreInfo user={user} postedBy={post.postedBy} post={post} />


          </div>
          <div className="content">
            <p>{post.caption}</p>
            <img src={post.image.url} alt="" />
          </div>

          <div className="info">
            <div className="item">
              {
                isLiked ? <FavoriteOutlinedIcon style={{ color: "red" }} onClick={handlelike} />
                  :
                  <FavoriteBorderOutlinedIcon onClick={handlelike} />
              }
              <span >{post.likes.length} likes</span>
            </div>

            <div className="item" onClick={() => setCommentsOpen(!commentsOpen)}>
              <TextsmsOutlinedIcon />
              {post.comments&&post.comments.length} Comments
            </div>

            <div className="item">
              <ShareOutlinedIcon />
              Share
            </div>

          </div>

          {commentsOpen && <Comments post={post} />}
        </div>

        

      </div>
    )
}

export default Post