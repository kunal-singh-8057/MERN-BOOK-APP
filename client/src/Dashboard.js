import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import './Dashboard.css'

const Dashboard = () => {

  const[users,setusers] = useState([]);
  
 

  useEffect(()=>{
    
  Axios.get("https://mern-book-app-three.vercel.app/getbooks")
  .then((res=>{
    setusers(res.data)
  }))

  .catch((err)=>{
    console.log(err)
  })
  },[])

const del = (id)=>{
Axios.delete("https://mern-book-app-three.vercel.app/deletebooksbyid/"+id)
.then((res)=>{console.log(res)})
.catch((err)=>{console.log(err)})
alert("Book Data Deleted successfully")
}




  return (
   <>
   <div className='back7'></div>
   <div className='set'>
   {
    users.map((user)=>{
      return(
        <div className='setboo'>
          <p>Name: {user.name}</p>
          <p>Aurthor: {user.aurthor}</p>
          <p>Image: {user.image}</p>
          <p>Price: {user.price}</p>
          <br></br>
          <button className='del-btn' onClick={(e)=>del(user._id)}>Delete</button>
          <Link className='update-btn' to={`/update/${user._id}`}>Update</Link>
        </div>
      )
    })
   }
   <Link className='add-btn' to='/add'>Add Book</Link>
   </div>
   </>
  )
}

export default Dashboard
