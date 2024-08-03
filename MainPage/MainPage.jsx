import React from "react"
import HeaderLogin from "./components/HeaderLogin"
import Header from "./components/Header"
import Main from "./components/Main"
import News from "./components/News"
import Cards from "./components/Cards"
import { data1, data2, data3, data5 } from "./components/data"
import Items from "./components/Items"
import Footer from "./components/Footer"

export default function MainPage() {
  return (
    <div className="">
      <HeaderLogin />
      <Header />
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


