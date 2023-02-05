import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
import Home from "./pages/Home/Home";
import { useEffect } from "react";
import { loadUser } from "./Actions/User";
import Profile from "./pages/Profile/Profile";
import Search from "./pages/Search/Search";
import EditProfile from "./pages/Profile/EditProfile";
import EditPage from "./components/Posts/Post/EditPost";
import EditPost from "./components/Posts/Post/EditPost";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    
dispatch(loadUser())
  
   
  }, [])
  
const {isAuthenticated,user}= useSelector(state => state.user)


  return (
    <Router>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        

        <Route path="/" element={ isAuthenticated ? <Home/> :<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:id" element={isAuthenticated ? <Profile />:<Login />} />
        <Route path="/search" element={isAuthenticated ? <Search />:<Login />} />
        {/* <Route path="/edit/post/:id" element={isAuthenticated ? <EditPost />:<Login />} /> */}

        <Route path="/edit-profile" element={isAuthenticated ? <EditProfile user={user} />:<Login />} />



      </Routes>
    </Router>
  );
}

export default App;
