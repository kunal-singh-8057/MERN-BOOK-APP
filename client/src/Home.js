import React from 'react'
import img1 from './Assets/img2.jpg'
import img3 from './Assets/img3.png'
import './Home.css'

const Home = () => {
  return (
  <>
  <div className='back'></div>
  <h1 className='sol'>Reading is our life</h1>
  <img src={img3} className='img3'></img>
  </>
  )
}

export default Home
