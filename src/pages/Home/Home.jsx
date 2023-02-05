import React from 'react'
import '../../App.css'

import { Link } from 'react-router-dom';
import LeftBar from '../../components/LeftBar/LeftBar';
import MainBar from '../../components/MainBar/MainBar';
import Navbar from '../../components/Navbar/Navbar';
import RightBar from '../../components/RightBar/RightBar';
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';

const Home = () => {
  const { loading, user } = useSelector(state => state.user)

  return loading ? <Loader /> :  (
    <>
      <div className='home'>
        <Navbar user={user} id={user._id}/>
        <div className='layout' style={{ display: "flex" }}>
          <LeftBar />

          <div style={{ flex: "6" }}>
            <MainBar />

          </div>
          <RightBar />

        </div>
      </div>
    </>
  )
}

export default Home