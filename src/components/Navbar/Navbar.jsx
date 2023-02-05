import React from 'react'
import { Link } from 'react-router-dom'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import "./Navbar.css"
import { useSelector } from 'react-redux';
const avatar = "https://cdn-icons-png.flaticon.com/512/149/149071.png"
    const coveravatar = "https://images.pexels.com/photos/11718802/pexels-photo-11718802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"



const Navbar = ({id}) => {
    const {user} = useSelector(state => state.user)

    return (
        <div className='navbar'>
            <div className='left'>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span >NoteBook</span>
                </Link>
                <HomeOutlinedIcon />
                <DarkModeOutlinedIcon />
                <GridViewOutlinedIcon />
                    <Link to="/search">
                    <SearchOutlinedIcon className='searchIcon' />

                    </Link>
            </div>

            <div className='right'>
                <PersonOutlineOutlinedIcon/>
                <EmailOutlinedIcon/>
                <NotificationsOutlinedIcon/>  
                <div className="user">
                <Link to={`/profile/${user._id}`}>
                <img src={user && user.profilePicture ? user.profilePicture.url : avatar}/>
                    <span>{user && user.fullname}</span>
                                </Link>
              
                </div>
                
            </div>
        </div>
    )
}

export default Navbar