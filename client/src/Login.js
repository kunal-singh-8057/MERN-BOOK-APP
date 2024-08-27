import React, { useState } from 'react'
import img2 from './Assets/img1.webp'
import { Link, useNavigate } from 'react-router-dom'
import Axios from 'axios'
import './Login.css'

const Login = () => {

  const[email,setemail] = useState("");
  const[password,setpassword]=useState("");

  const navigate = useNavigate();

  const login = ()=>{

    Axios.post("/login",{email,password})
  
    .then(result=>{
      console.log(result)
      
      if(result.data === "success"){
        alert("Welcome back user")
        navigate("/home")
      }
    })
  
    .catch((err)=>{
      console.log(err)
    })


  }



  return (
  <>
<div className='form1'>
<img src={img2} className='img2'></img>
<h1>Login</h1>
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
  <button onClick={login}>Login</button>
  <br></br>
  <br></br>
  <label>Don't have an account yet : <Link to='Signup' className='navr'>Signup</Link></label>
  <br></br>
  <br></br>
  <label>Login as an Admin : <Link to='/admine' className='navr'>Admine</Link></label>
</div>
  </>
  )
}

export default Login
