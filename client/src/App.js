import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home'
import Dashboard from './Dashboard'
import Navbar from './Navbar'
import Viewbooks from './Viewbooks'
import Contact from './Conatct'
import About from './About'
import Signup from './Signup'
import Login from './Login'
import Logout from './Logout'
import Admine from './Admine'
import './App.css'
import Update from './Update'
import Add from './Add'
import Read from './Read'


const App = () => {
  return (
  <>
<BrowserRouter>
<Navbar></Navbar>
<Routes>
  <Route path='/home' element={<Home/>}></Route>
  <Route path='/dashboard' element={<Dashboard/>}></Route>
  <Route path='/Viewbooks' element={<Viewbooks/>}></Route>
  <Route path='/contact' element={<Contact/>}></Route>
  <Route path='/about' element={<About/>}></Route>
  <Route path='/signup' element={<Signup/>}></Route>
  <Route path='/' element={<Login/>}></Route>
  <Route path='/logout' element={<Logout/>}></Route>
  <Route path='/admine' element={<Admine/>}></Route>
  <Route path='/update/:id' element={<Update/>}></Route>
  <Route path='/add' element={<Add/>}></Route>
  <Route path='/read/:id' element={<Read/>}></Route>
</Routes>
</BrowserRouter>
  </>
  )
}

export default App

