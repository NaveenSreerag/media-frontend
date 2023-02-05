import {configureStore} from "@reduxjs/toolkit"
import { addNewPost, createCommentReducer, likeReducer, postFollowingReducer, updatePostReducer } from "./Reducers/Post";
import {  allUsersReducer, followAndUnfollowUser, getUserPostReducer, getUserReducer, userReducer } from "./Reducers/User";


const store = configureStore({
    reducer:{
        user:userReducer,
        followingPosts:postFollowingReducer,
        newPost:addNewPost,
        allUsers:allUsersReducer,
        likeAndUnlikePost:likeReducer,
        getUser:getUserReducer,
        getUserPosts:getUserPostReducer,
        follow:followAndUnfollowUser,
        updatePost:updatePostReducer,
        CommentPost:createCommentReducer,
        

    }
});

export default store;


