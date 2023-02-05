import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router';
import "./Register.css"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerUser } from '../../Actions/User';


const Register = () => {

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.user)

    const [fullname, setFullname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [gender, setGender] = useState("male")
    const [typePass, setTypePass] = useState(false)
    const [confirmTypePass, setConfirmTypePass] = useState(false)

    const registerHandler = (e)=>{
        e.preventDefault()
        if(password === confirmPassword) {
        dispatch(registerUser(fullname,email,password,username,gender))

        }else{
            toast.error("Password did not match!");

        }
       
        
    }

    useEffect(() => {
        if (user) {
            navigate('/')
        }

    }, [user, navigate])

    return (
        <div className='register'>
            <div className="card">

                <div className="right">
                    <h1 style={{textAlign:"center"}}>Register</h1>
                    <form onSubmit={registerHandler}>
                        <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} required />
                        <input type="text" placeholder='Fullname' value={fullname} onChange={(e) => setFullname(e.target.value)} required />
                        <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete='none'/>

                        <input className='password' type={typePass ? "text" : "password"} placeholder='Password' value={password} required onChange={(e) => setPassword(e.target.value)} />
                        <small onClick={() => setTypePass(!typePass)}> {typePass ? 'Hide Password' : 'Show Password'}</small>

                        <input className='password' type={confirmTypePass ? "text" : "password"} placeholder='Confirm Password'required 
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)} />
                        <small onClick={() => setConfirmTypePass(!confirmTypePass)}> {confirmTypePass ? 'Hide Password' : 'Show Password'}</small>
                       <div className='gender'>
                         <label htmlFor="male">
                            Male: <input type="radio" id='male' name='gender' value='male' 
                            onChange={(e)=> setGender(e.target.value)} />
                         </label>

                         <label htmlFor="female">
                            Female: <input type="radio" id='Female' name='gender' value='female'
                             onChange={(e)=> setGender(e.target.value)} />
                         </label>
                         <label htmlFor="others">
                            Others: <input type="radio" id='others' name='gender' value='others'
                            onChange={(e)=> setGender(e.target.value)} />
                         </label>
                         
                       </div>

                        <button>Register</button>
                    </form>
                </div>
                <div className="left">
                    <h1>NoteBook</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, recusandae!</p>
                    <span>You have an account?</span>
                    <Link to="/"> <button>Login</button></Link>

                </div>
            </div>
        </div>
    )
}

export default Register