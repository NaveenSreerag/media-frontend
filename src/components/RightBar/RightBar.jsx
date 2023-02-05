import React, { useEffect } from 'react'
import "../RightBar/RightBar.css"


import { useDispatch, useSelector } from 'react-redux'
import { getallusers } from '../../Actions/User';
import { Link } from 'react-router-dom';


const RightBar = () => {

  const dispatch = useDispatch();

  const { allUsers } = useSelector(state => state.allUsers)
  const { user } = useSelector(state => state.user)
const avatar = "https://cdn-icons-png.flaticon.com/512/149/149071.png"





  useEffect(() => {

    dispatch(getallusers())
  }, [dispatch])

  return (
    <div className='rightBar'>
      <div className="container">
        <div className="item">
          <span>Suggetions for you</span>

          {allUsers && allUsers.map((alluser) => (
            <div className="user">
              {user._id === alluser._id ?'': <>
                <div className="userInfo">
                 <Link to={`/profile/${alluser._id}`}>
                 <img src={alluser && alluser.profilePicture ? alluser.profilePicture.url : avatar} />
                  <span>{alluser && alluser.fullname}</span>
                  </Link>
                </div>
                {/* <div className="buttons">
                  <button>Follow</button>
                  <button>Dismiss</button>
                </div> */}
              </>

              }


            </div>
          ))}



        </div>

        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/9969160/pexels-photo-9969160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <p>
                <span>Sandra </span>
                Changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/9969160/pexels-photo-9969160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <p>
                <span>Sandra </span>
                Changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/9969160/pexels-photo-9969160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <p>
                <span>Sandra </span>
                Changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/9969160/pexels-photo-9969160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <p>
                <span>Sandra </span>
                Changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/9969160/pexels-photo-9969160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <p>
                <span>Sandra </span>Changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/9969160/pexels-photo-9969160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className='online-icon'></div>
              <span>John</span>
            </div>


          </div>

          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/9969160/pexels-photo-9969160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className='online-icon'></div>
              <span>John</span>
            </div>


          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/9969160/pexels-photo-9969160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className='online-icon'></div>
              <span>John</span>
            </div>


          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/9969160/pexels-photo-9969160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className='online-icon'></div>
              <span>John</span>
            </div>


          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/9969160/pexels-photo-9969160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className='online-icon'></div>
              <span>John</span>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar 