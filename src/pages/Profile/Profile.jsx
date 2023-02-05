import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getUser } from '../../Actions/User';
import LeftBar from '../../components/LeftBar/LeftBar'
import Navbar from '../../components/Navbar/Navbar'
import RightBar from '../../components/RightBar/RightBar'
import "../Profile/Profile.css"
import UserProfile from './UserProfile'



const Profile = () => {
    const dispacth = useDispatch();


    const {id}= useParams()
    const{GetUser,loading}= useSelector(state => state.getUser)

    useEffect(() => {

        dispacth(getUser(id))
      
    }, [dispacth,id])
    

    return (
        
            <div>
                <Navbar />
                <div className='layout' style={{ display: "flex" }}>
                    <LeftBar />

                    <div style={{ flex: "6" }}>
                        <UserProfile user={GetUser} load={loading}  />
                        
                    </div>
                    <RightBar />

                </div>
            </div>
        

    )
}

export default Profile