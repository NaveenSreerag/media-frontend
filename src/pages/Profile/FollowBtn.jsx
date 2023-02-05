import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { followAndUnfollow } from '../../Actions/User';

const FollowBtn = ({ user, followed,setFollowed,id }) => {
    const dispacth = useDispatch();
    const { loading } = useSelector(state => state.follow)
    const { user: me } = useSelector(state => state.user)
    const navigate = useNavigate();





    const followHandler = (e) => {
        e.preventDefault();
        dispacth(followAndUnfollow(user._id))
       
        window.location.href = ("/profile/"+id)

        setFollowed(true)
    }

   

    return (
        <div>
            <button style={{ background: followed ? "red" : "blueviolet" }} onClick={followHandler} disabled={loading}>
                {loading ? "loading..." :followed ? "Unfollow" : "Follow"}
            </button>
        </div>
    )
}

export default FollowBtn