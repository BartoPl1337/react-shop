import React from "react"
import MainPage from "../MainPage/MainPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ShopAir from "../ShopAir/ShopAir"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/shopair" element={<ShopAir />}/>
      </Routes>
    </BrowserRouter>
  )
}