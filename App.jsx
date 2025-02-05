import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header' 
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home' 
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import ExploreMenu from './components/ExploreMenu/ExploreMenu'
import FoodDisplay from './components/FoodDisplay/FoodDisplay' 
import AppDownload from './components/AppDownload/AppDownload'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Footer from './components/Footer/Footer'

const App = () => {

  const [showLogin, setShowLogin] = useState(false) 
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>} 
    
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>  
      <Header/> 
      <ExploreMenu/> 
      <FoodDisplay/> 
      <AppDownload/>
      <Footer />   
     <Routes>
      < Route path='./' element={<Home/>} /> 
      < Route path='/Cart' element={<Cart />} /> 
      < Route path='.Order' element={<PlaceOrder/>} />  
     </Routes>


    </div>
    </>
  )
}

export default App