import { createReducer } from "@reduxjs/toolkit";
const initialState = {
  isAuthenticated: false,
};

export const userReducer = createReducer(initialState, {
  LoginRequest: (state) => {
    state.loading = true;
  },

  LoginSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },

  LoginFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },

  RegisterRequest: (state) => {
    state.loading = true;
  },
  RegisterSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  RegisterFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },

  LoadUserRequest: (state) => {
    state.loading = true;
  },
  LoadUserSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  LoadUserFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },

  UpdateUserRequest: (state) => {
    state.loading = true;
  },
  UpdateUserSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  UpdateUserFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },
});

export const allUsersReducer = createReducer(initialState, {
  GetAllUsersRequest: (state) => {
    state.loading = true;
  },
  GetAllUsersSuccess: (state, action) => {
    state.loading = false;
    state.allUsers = action.payload;
  },
  GetAllUsersFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
});

export const getUserReducer = createReducer(initialState, {
  GetUserRequest: (state) => {
    state.loading = true;
  },
  GetUserSuccess: (state, action) => {
    state.loading = false;
    state.GetUser = action.payload;
  },
  GetUserFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
});

export const getUserPostReducer = createReducer(initialState, {
  GetUserPostRequest: (state) => {
    state.loading = true;
  },
  GetUserPostSuccess: (state, action) => {
    state.loading = false;
    state.GetUserPosts = action.payload;
  },
  GetUserPostFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
});

export const followAndUnfollowUser = createReducer(initialState,{
  followUserRequest:(state)=>{
    state.loading =true;
  },
  followUserSuccess:(state,action)=>{
    state.loading=false;
    state.message=action.payload;
  },
  followUserFailure:(state,action)=>{
    state.loading=false;
    state.error= action.payload;
  }
})