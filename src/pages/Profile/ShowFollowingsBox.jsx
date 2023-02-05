import React from 'react'
import { Link } from 'react-router-dom'
import "./showFollowBox.css"

const ShowFollowingsBox = ({ user, setShowFollowings }) => {
  const avatar = "https://cdn-icons-png.flaticon.com/512/149/149071.png"

  return (
    <div className='showBox'>
      <div className="showFollowBox">
        <div className='heading'>
          <h6>Followings</h6>
          <button onClick={() => setShowFollowings(false)}>Close</button>

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

export default ShowFollowingsBox