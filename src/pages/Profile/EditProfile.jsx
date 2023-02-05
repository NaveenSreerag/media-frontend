import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import LeftBar from '../../components/LeftBar/LeftBar';
import Navbar from '../../components/Navbar/Navbar';
import RightBar from '../../components/RightBar/RightBar';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { checkImage } from '../../CheckImageUpload';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateUser } from '../../Actions/User';



function EditProfile() {
    const { user,loading } = useSelector(state => state.user)
    const navigate = useNavigate();
    const dispacth = useDispatch();
    const [profilePicture, setProfilePicture] = useState('')
    const [coverPicture, setCoverPicture] = useState('')
    const avatar = "https://cdn-icons-png.flaticon.com/512/149/149071.png"
    const coveravatar = "https://images.pexels.com/photos/11718802/pexels-photo-11718802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"


   
    const [fullname, setFullname] = useState(user.fullname);
    const [username, setUsername] = useState(user.username)

    const [email, setEmail] = useState(user.email)

    const [mobile, setMobile] = useState(user.mobile)

    const [address, setAddress] = useState(user.setAddress)

    const [gender, setGender] = useState(user.gender)

    const [story, setStory] = useState(user.story)
    const [website, setWebsite] = useState(user.website)
    const [place, setPlace] = useState(user.place)






    const Genders = [
        {
            value: 'Male',
            label: 'Male',
        },
        {
            value: 'Female',
            label: 'Female',
        },
        {
            value: 'Others',
            label: 'Others',
        },

    ];



    const changeProfilePic = (e) => {
        const file = e.target.files[0];
        const err = checkImage(file)

        if (err) {
            toast.error(err);

        } else {

            const Reader = new FileReader();
            Reader.readAsDataURL(file);


            Reader.onload = () => {
                if (Reader.readyState === 2) {
                    setProfilePicture(Reader.result);
                }
            };
        }
    }
    const changeCoverPic = (e) => {
        const file = e.target.files[0]
        const err = checkImage(file)
        if (err) {
            toast.error(err);

        } else {
            const Reader = new FileReader();
            Reader.readAsDataURL(file);


            Reader.onload = () => {
                if (Reader.readyState === 2) {
                    setCoverPicture(Reader.result);
                }
            };
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        dispacth(updateUser(fullname,
            username,
            email,
            coverPicture,
            profilePicture,
            gender,
            mobile,
            address,
            story,
            website, place))

   

    }





    return (
        <>
            <Navbar />
            <div className='layout' style={{ display: "flex" }}>
                <LeftBar />

                <div style={{ flex: "6" }}>
                    <div className='edit-profile'>
                        <button onClick={() => navigate(`/profile/${user._id}`)} className='button-close' >Close</button>

                        <form action="" className='edit-form' onSubmit={handleSubmit}>
                            <div className='prof-cover-pic'>
                                <div className='info-profile-pic'>
                                    <img src={profilePicture ? profilePicture :  user.profilePicture ? user.profilePicture.url : user.avatar} alt="" name='profilePicture' />
                                    <span>
                                        <CameraAltIcon className='cam-icon' />
                                        <p>Profile</p>
                                        <input type="file" accept='image/*' name="" id="file-up" onChange={changeProfilePic} />

                                    </span>
                                </div>
                                <div className='info-cover-pic'>
                                    <img src={coverPicture ? coverPicture : user.coverPicture ? user.coverPicture.url : coveravatar} alt="" name='coverPicture' />
                                    <span>
                                        <CameraAltIcon className='cam-icon' />
                                        <p>Cover</p>
                                        <input type="file" accept='image/*' name="" id="file-up" onChange={changeCoverPic} />

                                    </span>
                                </div>
                            </div>
                            <div className='form-group'>
                                <TextField

                                    onChange={(e) => setFullname(e.target.value)}
                                    required
                                    id="outlined-required"
                                    label="Full Name"
                                    className='form-control'
                                    defaultValue={fullname}
                                    name='fullname'
                                />
                                <TextField
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                    id="outlined-required"
                                    label="UserName"
                                    className='form-control'
                                    defaultValue={username}
                                    name='username'
                                />
                                <TextField

                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    id="outlined-required"
                                    label="Email"
                                    className='form-control'
                                    defaultValue={email}
                                    name='email'
                                />
                                <TextField

                                    onChange={(e) => setMobile(e.target.value)}
                                    id="outlined-required"
                                    label="Mobile"
                                    className='form-control'
                                    defaultValue={mobile}
                                    name='mobile'
                                />
                                <TextField

                                    onChange={(e) => setAddress(e.target.value)}
                                    id="outlined-required"
                                    label="Address"
                                    className='form-control'
                                    defaultValue={address}
                                    name='address'
                                />
                                <TextField

                                    onChange={(e) => setPlace(e.target.value)}
                                    id="outlined-required"
                                    label="Place"
                                    className='form-control'
                                    defaultValue={place}
                                    name='place'
                                />


                                <TextField


                                    onChange={(e) => setWebsite(e.target.value)}
                                    id="outlined-required"
                                    label="Website"
                                    className='form-control'
                                    defaultValue={website}
                                    name='website'
                                />
                                <TextField
                                    onChange={(e) => setGender(e.target.value)}
                                    className='form-control'

                                    id="outlined-select-currency"
                                    select
                                    label="Select"
                                    defaultValue={gender}
                                    name='gender'

                                    helperText="Please select your Gender"
                                >
                                    {Genders.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <TextField
                                    onChange={(e) => setStory(e.target.value)}

                                    id="outlined-multiline-static"
                                    label="Story"
                                    multiline
                                    rows={4}
                                    className='form-control'

                                    defaultValue={story}
                                    name='story'

                                />

                            </div>
                            <Button variant="contained" size="medium" type='submit'>
                                {loading ? "Loading..": "Update Profile"}
                            </Button>
                        </form>
                    </div>
                </div>
                <RightBar />

            </div>
        </>


    )
}

export default EditProfile