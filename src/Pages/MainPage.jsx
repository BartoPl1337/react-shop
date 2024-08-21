import React from "react"
import { data1, data2, data3, data5 } from "../components/MainPage/data"
import Header from "../components/MainPage/Header"
import News from "../components/MainPage/News"
import Main from "../components/MainPage/Main"
import Cards from "../components/MainPage/Cards"
import Items from "../components/MainPage/Items"
import Footer from "../components/MainPage/Footer"
import HeaderLogin from "../components/MainPage/HeaderLogin"

export default function MainPage() {
  return (
    <div className="">
      <HeaderLogin />
      <Header 
      data = {data5}
      />
      <Main />
      <News 
      data = {data3}
      description = "Najnowsze i najlepsze"
      />
      <Cards
      data = {data1}
      description = "Przeglądaj według modelu"
      />
      <Cards 
      data = {data2}
      description = "Sport"
      />
      <Items
      data = {data5}
      description = "Zamów teraz"
      />
      <Footer />
    </div>
  )
}


