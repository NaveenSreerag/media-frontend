import { createReducer } from "@reduxjs/toolkit";
const initialState = {} ;

export const postFollowingReducer = createReducer(initialState, {

    postFollowingRequest : (state)=>{
        state.loading = true;
    },

    postFollowingSuccess : (state,action)=>{
        state.loading = false;
        state.posts = action.payload;
    },

    postFollowingFailure : (state,action)=>{
        state.loading = false;
        state.error = action.payload;
    }

    
})

export const addNewPost = createReducer(initialState,{

    addNewPostRequest : (state)=>{
        state.loading = true;
    },

    addNewPostSuccess:(state,action)=>{
        state.loading = false;
        state.post= action.payload;
    },
    addNewPostFailure:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
    }
})

export const likeReducer = createReducer(initialState,{

    likeRequest:(state)=>{
        state.loading = true;
    },
    likeSuccess:(state,action)=>{
        state.loading=false;
        state.message=action.payload;
    },
    likeFailure:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
    }
})

export const updatePostReducer = createReducer(initialState,{
    updatePostRequest:(state)=>{
        state.loading = true;
    },
    updatePostSuccess:(state,action)=>{
        state.loading=false;
        state.message=action.payload;
    },
    updatePostFailure:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
    }
})

export const createCommentReducer = createReducer(initialState,{

    createCommentRequest:(state)=>{
        state.loading = true;
    },
    createCommentSuccess:(state,action)=>{
        state.loading=false;
        state.message=action.payload;
    },
    createCommentFailure:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
    },

    updateCommentRequest:(state)=>{
        state.loading=false;
    },
    updateCommentSuccess:(state,action)=>{
        state.loading=false;
        state.message=action.payload;
    },
    updateCommentFailure:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
    }
})