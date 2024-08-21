import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainPage from "./Pages/MainPage"
import ShopAir from "./Pages/ShopAir"

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