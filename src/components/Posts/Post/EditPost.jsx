import { Button, TextField } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import LeftBar from '../../LeftBar/LeftBar'
import Navbar from '../../Navbar/Navbar'
import RightBar from '../../RightBar/RightBar'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useState } from 'react'
import { updatePost } from '../../../Actions/Posts'
import { toast } from 'react-toastify'


const EditPost = ({ post,setOnEdit,onEdit }) => {
    const navigate = useNavigate();
    const [caption, setCaption] = useState(post.caption)
    const dispatch = useDispatch();


    const { loading } = useSelector(state => state.updatePost)

    const handleUpdate = (e) => {
        e.preventDefault();

        dispatch(updatePost(caption, post._id))

        toast.success("Updated post successfully")

    }





    return (

        <div className="edit-post-page">
            <div className='edit-Post'>

                <form className='edit-form' onSubmit={handleUpdate}>
                    <div className='post-pic'>
                        <div className='info-post-pic'>
                            <img src={post.image.url} alt="" name='' />
                            <span>
                                <CameraAltIcon className='cam-icon' />
                                <p>Post</p>
                                {/* <input type="file" accept='image/*' name="" id="file-up"  /> */}

                            </span>
                        </div>

                    </div>
                    <div className='form-group'>
                        <TextField
                            required
                            id="outlined-required"
                            label="Content"
                            className='form-control'
                            value={caption}
                            name='content'
                            onChange={(e) => setCaption(e.target.value)}
                        />




                    </div>
                    <Button variant="contained" size="medium" type='submit' disabled={loading} >
                        {loading ? 'Loading...' : "Update"}
                    </Button>
                    

                </form>
                <Button onClick={()=> setOnEdit(false)} className='button-close' >Close</Button>

            </div>
        </div>

    )
}

export default EditPost