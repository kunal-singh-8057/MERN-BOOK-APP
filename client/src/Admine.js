import React, { useState } from 'react'
import './Admine.css'
import img2 from './Assets/img1.webp'
import { Link, useNavigate } from 'react-router-dom'
import Axios from 'axios'

const Admine = () => {

  const[email,setemail] = useState("");
  const[password,setpassword] = useState("");

  const navigate = useNavigate();

  const admine = ()=>{

    Axios.post("/admine",{email,password})
    .then(result=>{
      if(result.data === 'admine'){
        console.log("success")
        alert("Welcome Admine")
        navigate("/dashboard")
      }
    })

  }



  return (
  <>
   <div className='form1'>
   <img src={img2} className='img2'></img>
   <h1 className='hh1'>Admine</h1>
   <br></br>
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
  <button onClick={admine}>Login</button>
  <br></br>
  <br></br>
  <label>Don't have an account : <Link to='/signup' className='navr'>Signup</Link></label>
  <br></br>
  <br></br>
  <label>Login as User : <Link to='/' className='navr'>Login</Link></label>
</div>
  </>
  )
}

export default Admine
