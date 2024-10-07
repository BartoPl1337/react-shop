import React from 'react'
import Header from '../components/MainPage/Header'
import Sorts from '../components/ShopAir/Sorts'
import HeaderLogin from "../components/MainPage/HeaderLogin"
const ShopAir = () => {
  return (
    <div>
      <HeaderLogin />
      {/* <Header /> */}
      <Sorts />
    </div>
  )
}

export default ShopAir