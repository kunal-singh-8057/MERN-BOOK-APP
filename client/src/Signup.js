import React, { useState } from 'react'
import img2 from './Assets/img1.webp'
import { Link, useNavigate } from 'react-router-dom'
import './Signup.css'
import Axios from 'axios'
const Signup = () => {

  const navigate = useNavigate();

  const[user,setuser]=useState("");
  const[email,setemail]=useState("");
  const[password,setpassword]=useState("");

  const signup = ()=>{

    Axios.post("https://mern-book-app-three.vercel.app/addusers",{
      user:user,
      email:email,
      password:password
    }).then(()=>{
      alert("Signup successfull")
      navigate("/home")
    }).catch((err)=>{
      console.log(err)
    })

    
  }



  return (
  <>
<div className='form1'>
<img src={img2} className='img2'></img>
<h1>Signup</h1>
   <br></br>
   <label>Name:</label>
  <br></br>
  <input placeholder='Enter the name here' onChange={(e)=>{setuser(e.target.value)}}></input> 
  <br></br>
  <label>Email:</label>
  <br></br>
  <input placeholder='Enter the email here' onChange={(e)=>{setemail(e.target.value)}}></input>
  <br></br>
  <label>Password:</label>
  <br></br>
  <input placeholder='Enter the password here' onChange={(e)=>{setpassword(e.target.value)}}></input>
  <br></br>
  <br></br>
  <button onClick={signup}>Signup</button>
  <br></br>
  <br></br>
  <label>Already have an account : <Link to='/' className='navr'>Login</Link></label>
  <br></br>
  <br></br>
  <label>Login as an Admin : <Link to='/admine' className='navr'>Admine</Link></label>
</div>
  </>
  )
}

export default Signup
