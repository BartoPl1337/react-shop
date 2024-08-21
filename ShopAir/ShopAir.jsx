import React from 'react'
import Header from '../MainPage/components/Header'
import Login from '../MainPage/components/HeaderLogin'
import Sorts from './components/Sorts'
const ShopAir = () => {
  return (
    <div>
      <Login />
      <Header 
      // classname="absolute"
      />
      <Sorts />
    </div>
  )
}

export default ShopAir