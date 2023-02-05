import React, { useEffect } from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FacebookTwoTone from '@mui/icons-material/FacebookTwoTone';
import EmailOutlined from '@mui/icons-material/EmailOutlined';
import Place from '@mui/icons-material/Place';
import LanguageRounded from '@mui/icons-material/LanguageRounded';
import "../Profile/Profile.css"
import Posts from '../../components/Posts/Posts';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserPosts } from '../../Actions/User';
import Post from '../../components/Posts/Post/Post';
import Share from '../../components/Share/Share';
import Loader from '../../components/Loader/Loader';
import EditProfile from './EditProfile';
import ShowFollowersBox from './ShowFollowersBox';
import ShowFollowingsBox from './ShowFollowingsBox';



import { useNavigate } from "react-router-dom"
import FollowBtn from './FollowBtn';


const UserProfile = ({ user, load }) => {

    const dispacth = useDispatch();
    const { id } = useParams()
    const { GetUserPosts, loading } = useSelector(state => state.getUserPosts)
    const { user: me } = useSelector(state => state.user)
    const [edit, setEdit] = useState(false)
    const [followed, setFollowed] = useState(false)
    const [ShowFollowers, setShowFollowers] = useState(false)
    const [ShowFollowings, setShowFollowings] = useState(false)



    const navigate = useNavigate();
    const coveravatar = "https://images.pexels.com/photos/11718802/pexels-photo-11718802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

    const avatar = "https://cdn-icons-png.flaticon.com/512/149/149071.png"

    useEffect(() => {

        dispacth(getUserPosts(id))

        if (me) {
            me.following.forEach((item) => {
                if (item._id === id) {
                    setFollowed(true)
                } else {
                    setFollowed(false)
                }
            })
        }

        setShowFollowings(false)
        setShowFollowers(false)




    }, [dispacth, id, id])


    return loading ? <Loader /> : (
        <div className='Profile'>
            <div className="images">
                <img src={user && user.coverPicture ? user.coverPicture.url : coveravatar} alt="" className="cover" />
                <img src={user && user.profilePicture ? user.profilePicture.url : avatar} alt="" className="profilePic" />
            </div>
            <div className="profileContainer">
                <div className="uInfo">
                    <div className="left">

                        <a href="http://facebook.com">
                            <FacebookTwoTone />
                        </a>
                        <a href="http://facebook.com">
                            <InstagramIcon />
                        </a>
                        <a href="http://facebook.com">
                            <TwitterIcon />
                        </a>

                        <a href="http://facebook.com">
                            <PinterestIcon />
                        </a>
                        <a href="http://facebook.com">
                            <LinkedInIcon />
                        </a>
                    </div>
                    <div className="middle">
                        <span>{user && user.fullname}</span>
                        <div className="info">
                            <div className="item">
                                <Place />
                                <span>{user && user.place}</span>
                            </div>
                            <div className="item">
                                <LanguageRounded />
                                <span>{user && user.email}</span>
                            </div>
                        </div>
                        <div className="followInfo">
                            <span onClick={() => setShowFollowings(true)}> {user && user.following.length} Followings</span>
                            <span onClick={() => setShowFollowers(true)}> {user && user.followers.length} Followers</span>
                        </div>

                        <div className="otherInfo">
                            <span> {user && user.story}</span>

                        </div>
                        {me._id === id ? <button onClick={() => navigate("/edit-profile")}>
                            Edit Profile</button> : <FollowBtn user={user} followed={followed} setFollowed={setFollowed} id={id} />}




                    </div>
                    <div className="right">
                        <EmailOutlined className='emailicon' />
                        <MoreVertIcon />
                    </div>
                </div>

                {/* {edit && <EditProfile user={me} setEdit={setEdit} />} */}

                {ShowFollowers &&
                    <ShowFollowersBox
                        user={user.followers}
                        setShowFollowers={setShowFollowers}
                    />}

                {ShowFollowings &&
                    <ShowFollowingsBox
                        user={user.following}
                        setShowFollowings={setShowFollowings}
                    />}




            </div>

            <div className='posts'>
                {me._id === id ? <Share /> : ""}

                {loading ? <Loader /> : GetUserPosts && GetUserPosts.length > 0 ? (GetUserPosts.map((post) => (
                    <div className="post">
                        <Post post={post} key={post._id} loading={loading} />
                    </div>
                ))) : <h1>No Posts Yet</h1>
                }
            </div>
        </div>
    )
}

export default UserProfile