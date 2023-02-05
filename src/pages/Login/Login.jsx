import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"
import {useDispatch, useSelector} from 'react-redux'
import { loginUser } from '../../Actions/User'
import Loader from '../../components/Loader/Loader'


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [typePass,setTypePass] = useState(false);  
    const dispatch = useDispatch();


    const loginHandler = (e) => {
        e.preventDefault();
        
        dispatch(loginUser(email,password))
    }

    const {user,loading}=useSelector(state => state.user)

    return (
       <>
       {loading ? <Loader />:
        <div className='login'>
        <div className="card">
            <div className="left">
                <h1>NoteBook</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, recusandae!</p>
                <span>Don't you have an account?</span>
                <Link to="/register"> <button>Register</button></Link>
            </div>
            <div className="right">
                <h1 style={{textAlign:"center"}}>Login</h1>
                <form action="" onSubmit={loginHandler}>

                    <input type="email" placeholder='Email' required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />

                
                    <input className='password' type={typePass ? "text":"password"} placeholder='Password' required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                        <small onClick={() => setTypePass(!typePass)}>
                            {typePass ? "Hide Password": "Show Password"}
                        </small>
                    <button>Login</button>
                    <Link to="/register"><span style={{color:"grey",margin:'27px'}} className="new-account-span">Create a new Account</span></Link>

                </form>
            </div>
        </div> 
    </div>
     }
       </>
    )
}

export default Login