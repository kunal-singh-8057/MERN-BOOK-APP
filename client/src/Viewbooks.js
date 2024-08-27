import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import './Viewbooks.css'
import {Link} from 'react-router-dom'

const Viewbooks = () => {

  const[users,setusers] = useState([]);


  useEffect(()=>{
    Axios.get("/getbooks")

    .then((response)=>{
      setusers(response.data);
    })
  },[])

  
  return (
   <>
   <div className='back6'></div>
   <div className='newsum'>
    {users.map(user=>{
      return(
      <div className='subsets'>
      <img src={user.image} className='bimage'></img>
      <p className='puu'>Name: {user.name}</p>
      <p className='puu'>Author: {user.aurthor}</p>
      <p className='puu'>Price: {user.price}</p>
      <br></br>
      <Link className='buy-btn' to={`/read/${user._id}`}>BUY</Link>
      </div>
      )
    })
   }
   </div>
   </>
  )
}

export default Viewbooks
