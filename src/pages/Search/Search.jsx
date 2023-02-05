import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import "../Search/Search.css"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { getallusers } from '../../Actions/User';
import { useDispatch, useSelector } from 'react-redux';


const Search = () => {
    const dispacth = useDispatch();
    const { allUsers } = useSelector(state => state.allUsers)
    const { user } = useSelector(state => state.user)


    const [username, setUsername] = useState("")
    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispacth(getallusers(username))
    }
    return (
        <div className='searchItem'>
            <Navbar />
            <form action="" onSubmit={onSubmitHandler}>
                <div className="SearchPage">
                    <input type="text" placeholder='Search...' value={username} onChange={(e) => setUsername(e.target.value)} />
                    <button className='submitSearch'>Search</button>

                </div>
            </form>
            <div className="item">
                <span>Suggetions for you</span>

                {allUsers && allUsers.map((alluser) => (
                    <div className="user">
                        {user._id === alluser._id ? <>
                            <div className="userInfo">
                                <Link to={`/profile/${alluser._id}`}>
                                    <img src={alluser && alluser.profilePicture ? alluser.profilePicture.url : alluser.avatar} />
                                    <span>{alluser && alluser.fullname}</span>
                                    <span>You</span>
                                </Link>

                            </div>

                        </> : <>
                            <div className="userInfo">
                            <Link to={`/profile/${alluser._id}`}>

                                <img src={alluser && alluser.profilePicture ? alluser.profilePicture.url : alluser.avatar} />
                                <span>{alluser && alluser.fullname}</span>
                                </Link>

                            </div>

                        </>

                        }


                    </div>
                ))}



            </div>
        </div>
    )
}

export default Search