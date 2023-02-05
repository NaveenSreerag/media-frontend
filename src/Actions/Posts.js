import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const getfollowingPosts = () => async (dispatch) => {
  try {
    dispatch({
      type: "postFollowingRequest",
    });

    const { data } = await axios.get("/api/v1/post/all");

    dispatch({
      type: "postFollowingSuccess",
      payload: data.posts,
    });
  } catch (error) {
    dispatch({
      type: "postFollowingFailure",
      payload: error.response.data.msg,
    });
  }
};

export const addNewPost = (caption, image) => async (dispatch) => {
  try {
    dispatch({
      type: "addNewPostRequest",
    });

    const { data } = await axios.post("/api/v1/post/create", {
      caption,
      image,
    });

    dispatch({
      type: "addNewPostSuccess",
      payload: data.post,
    });

    toast.success("Post Added Successfully");
    window.location.href = "/";
  } catch (error) {
    dispatch({
      type: "addNewPostFailure",
      payload: error.response.data.msg,
    });
  }
};

export const likeAndUnlikePost = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "likeRequest",
    });

    const { data } = await axios.get(`/api/v1/post/likeandunlike/${id}`);

    dispatch({
      type: "likeSuccess",
      payload: data.msg,
    });
  } catch (error) {
    dispatch({
      type: "likeFailure",
      payload: error.response.data.msg,
    });
  }
};

export const updatePost = (caption, id) => async (dispatch) => {
  try {
    dispatch({
      type: "updatePostRequest",
    });

    const { data } = await axios.put(`/api/v1/post/update/${id}`, { caption });

    dispatch({
      type: "updatePostSuccess",
      payload: data.msg,
    });
  } catch (error) {
    dispatch({
      type: "updatePostFailure",
      payload: error.response.data.msg,
    });
    toast.error(error.response.data.msg);
  }
};

export const createComment =( post,comment,user ) => async (dispatch) => {

    try {
      
      dispatch({
        type: "createCommentRequest",
      });

     

      const { data } = await axios.post(`/api/v1/create/comment/${post._id}`, { comment,user:user._id,post:post._id });

      dispatch({
        type: "createCommentSuccess",
        payload: data.post,
      });
    } catch (error) {
      dispatch({
        type: "createCommentFailure",
        payload: error.response.data.msg,
      });
    }
  };

  export const  updateComment = ({comment,content})=> async(dispatch)=>{

    try {

      dispatch({
        type:"updateCommentRequest"
      })

      const {data}= await axios.post(`/api/v1/update/comment/${comment._id}`,{
        comment:content
      })

      dispatch({
        type:"updateCommentSuccess",
        payload:data
      })

      toast.success("Comment Updated Successfully")
      
    } catch (error) {
      
      dispatch({
        type:"updateCommentFailure",
        payload:error.response.data.msg
      })
      toast.error(error.response.data.msg)
    }
  }