import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "LoginRequest",
    });

    const { data } = await axios.post(
      "/api/v1/login",
      { email, password },
      {
        headers: {
          "Content-Type": "application/json"
          
        },
      }
    );
    dispatch({
      type: "LoginSuccess",
      payload: data.user,
    });
    toast.success("Login Successfully");
  } catch (error) {
    dispatch({
      type: "LoginFailure",
      payload: error.response.data.msg,
    });
    toast.error(error.response.data.msg);

  }
};

export const loadUser = ()=> async (dispatch)=>{
  try {
    
    dispatch({
      type:"LoadUserRequest"
    })

    const {data} = await axios.get("/api/v1/me");

    dispatch({
      type:"LoadUserSuccess",
      payload:data.user
    })
  } catch (error) {
    dispatch({
      type:"LoadUserFailure",
      payload:error.response.data.msg
    })
  }
}

export const registerUser = (fullname,email,password,username,gender) => async (dispatch)=>{
   
  try {
    
    dispatch({
      type:"RegisterRequest"
    })
     
    const {data} = await axios.post("/api/v1/register",
     {fullname,email,password,username,gender}
     )

     dispatch({
      type:"RegisterSuccess",
      payload:data.user
     })
  } catch (error) {

    dispatch({
      type:"RegisterFailure",
      payload:error.response.data.msg
    })
    toast.error(error.response.data.msg);

    
  }
}

export const getallusers = (username="")=> async(dispatch)=>{

  try {
    dispatch({
      type:"GetAllUsersRequest"
    })

    const {data} = await axios.get(`/api/v1/users?username=${username}`)

    dispatch({
      type:"GetAllUsersSuccess",
      payload:data.users
    })
  } catch (error) {
    dispatch({
      type:"GetAllUsersFailure",
      payload:error.response.data.msg
    })
  }
}

export const getUser = (id)=> async(dispatch)=>{

  try {
    dispatch({
      type:"GetUserRequest"
    })

    const {data} = await axios.get(`/api/v1/profile/user/${id}`)

    dispatch({
      type:"GetUserSuccess",
      payload:data.user
    })
  } catch (error) {
    dispatch({
      type:"GetUserFailure",
      payload:error.response.data.msg
    })
  }
}
export const getUserPosts = (id)=> async(dispatch)=>{

  try {
    dispatch({
      type:"GetUserPostRequest"
    })

    const {data} = await axios.get(`/api/v1/profile/user/${id}/posts`)

    dispatch({
      type:"GetUserPostSuccess",
      payload:data.posts
    })
  } catch (error) {
    dispatch({
      type:"GetUserPostFailure",
      payload:error.response.data.msg
    })
  }
}

export const updateUser = (fullname,username,email,coverPicture,profilePicture,gender,mobile,
address,story,website,place)=> async(dispatch)=>{

  try {
    
    dispatch({
      type:"UpdateUserRequest"
    })

    const {data}= await axios.put("/api/v1/update/profile/me",{
      fullname,
            username,
            email,
            coverPicture,
            profilePicture,
            gender,
            mobile,
            address,
            story,
            website,place
    })

    dispatch({
      type:"UpdateUserSuccess",
      payload:data.user
    })
  } catch (error) {
    dispatch({
      type:"UpdateUserFailure",
      payload:error.response.data.msg
    })
  }
}

export const followAndUnfollow = (id)=> async(dispatch)=>{

  try {
    
    dispatch({
      type:"followUserRequest"
    })

    const {data} = await axios.get(`/api/v1/${id}/follow`)

    dispatch({
      type:"followUserSuccess",
      payload:data.msg
    })
  } catch (error) {

    dispatch({
      type:"followUserFailure",
      payload:error.response.data.msg
    })
    
  }
}
