import React from 'react'

import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { useSelector } from 'react-redux';
import CommentOptions from './CommentOptions';

const CommentMenu = ({comment,user,post,setOpenEdit,openEdit}) => {

  return (
    <div className='menu'>

    {
        (post.postedBy._id === user._id || comment.user._id === user._id) &&
        
        <CommentOptions comment={comment} post={post} user={user} setOpenEdit={setOpenEdit} openEdit={openEdit} />
            
    }
    </div>
  )
}

export default CommentMenu