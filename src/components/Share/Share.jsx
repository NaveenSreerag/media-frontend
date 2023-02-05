import React, { useState } from 'react'
import '../Share/Share.css'
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material"
import {useDispatch, useSelector} from 'react-redux'
import { addNewPost, addPost } from '../../Actions/Posts'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const Share = () => {

    const [image, setImage] = useState(null);
    const [caption, setCaption] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const {loading}= useSelector(state =>state.newPost)

    const {user}= useSelector(state =>state.user)


    const handleImageChange = (e) => {
        const file = e.target.files[0];

        const Reader = new FileReader();
        Reader.readAsDataURL(file);


        Reader.onload = () => {
            if (Reader.readyState === 2) {
                setImage(Reader.result);
            }
        };

    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        // const newPost ={
        //     caption,
        //     image
        // }

        // try {
            
        //     const res = await axios.post("/api/v1/post/create",newPost)
        //                  window.location.href = ("/")

        // } catch (error) {
            
        // }

        dispatch(addNewPost(caption,image))
        setImage(null)
        setCaption('')


     
    }

    

   

    return (
        <div className=''>
            <div className="share">
                <div className="shareWrapper">
                    <form onSubmit={handleSubmit}>
                        <div className="shareTop">

                            <img className="shareProfileImg" src={user.profilePicture ? user.profilePicture.url : user.avatar} alt="" />
                            <input
                                placeholder={`What's in your mind ${user.fullname} ?`}
                                className="shareInput"
                                value={caption}
                                onChange={(e) => setCaption(e.target.value)}
                            />

                            {image && <img src={image} className="setimage" />}
                            
                        </div>
                        <hr className="shareHr" />
                        <div className="shareBottom">
                            <div className="shareOptions">
                                <div className="shareOption">
                                    <input type="file" name="image" id="file" accept='image/*' required  style={{ display: "none" }} onChange={handleImageChange} />
                                    <label htmlFor="file" >
                                        <PermMedia htmlColor="tomato" className="shareIcon" />
                                        <span className="shareOptionText">Photo or Video</span>
                                    </label>


                                </div>
                                <div className="shareOption">
                                    <Label htmlColor="blue" className="shareIcon" />
                                    <span className="shareOptionText">Tag</span>
                                </div>
                                <div className="shareOption">
                                    <Room htmlColor="green" className="shareIcon" />
                                    <span className="shareOptionText">Location</span>
                                </div>
                                <div className="shareOption">
                                    <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
                                    <span className="shareOptionText">Feelings</span>
                                </div>
                            </div>
                            <button className="shareButton" type='submit' disabled={loading}>{loading ? "Loading..." : "Share"}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Share