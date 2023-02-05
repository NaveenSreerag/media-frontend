import React from 'react'
import { Link } from 'react-router-dom'

const ShowFollowersBox = ({user,setShowFollowers}) => {
  const avatar = "https://cdn-icons-png.flaticon.com/512/149/149071.png"



    return (
      <div className='showBox'>
        <div className="showFollowBox">
          <div className='heading'>
            <h6>Followers</h6>
            <button onClick={() => setShowFollowers(false)}>Close</button>
  
          </div>
          <hr />
          {
            user.map(u => (
  
              <div className="userInfo">
                <Link to={`/profile/${u._id}`}>
                  <img src={u && u.profilePicture ? u.profilePicture.url : avatar} />
                  <span>{u && u.fullname}</span>
                </Link>
              </div>
  
            ))
          }
  
        </div>
  
      </div>
    )
  
}

export default ShowFollowersBox