import React from "react";
import { Frame, ShoppingCart, Heart } from "lucide-react";
import DropDownMenu from "./HeaderComponents/DropDownMenu";
import { useState } from "react";
import { News, Mens, Womens, Kids } from "./HeaderComponents/NewsData";

export default function Header() {
  const [showDropDownMenu, setShowDropDownMenu] = useState(false);
  const [id, setId] = useState(0);
  // const [current, setCurrent] = useState(0);
  // const [hidden, setHidden] = useState(false);

  // const scrollEvent = () => {
  //   setCurrent((prev) => {
  //     if (window.scrollY > prev) {
  //       setHidden(true);
  //       return window.scrollY;
  //     } else {
  //       setHidden(false);
  //       return window.scrollY;
  //     }
  //   });
  // };
  
  // useEffect(() => {
  //   window.addEventListener("scroll", scrollEvent);
  //   return () => {
  //     window.removeEventListener("scroll", scrollEvent);
  //   };
  // }, []);

  const zmienna = (id) => {
    switch (id) {
      case 1:
        return News;
      case 2:
        return Mens;
      case 3:
        return Womens;
      case 4:
        return Kids;
    }
  };
  function onMouseOver(e) {
    setShowDropDownMenu((prev) => true);
    setId(parseInt(e.target.getAttribute("aria-label")));
  }
  function onMouseLeave() {
    setTimeout(() => {
      setShowDropDownMenu((prev) => false);
    }, 100);
  }
  return (
    <header className="bg-black text-white p-3">
      <div className="flex mx-12 items-center ">
        <div className="flex-1">
          <Frame />
        </div>
        <div className="flex flex-1 gap-6 justify-center font-semibold text-base">
          <a href="" onMouseOver={onMouseOver} aria-label="1">
            Nowe i polecane
          </a>
          <a href="" onMouseOver={onMouseOver} aria-label="2">
            Mężczyzni
          </a>
          <a href="" onMouseOver={onMouseOver} aria-label="3">
            Kobiety
          </a>
          <a href="" onMouseOver={onMouseOver} aria-label="4">
            Dzieci
          </a>
        </div>

        <div className="flex flex-1 gap-6 justify-end items-center">
          <input
            type="search"
            placeholder="Wyszukaj"
            className="rounded-full p-1.5 w-1/4 bg-neutral-700"
          />
          <button href="">
            <Heart />
          </button>
          <button href="">
            <ShoppingCart />
          </button>
        </div>
      </div>
      {showDropDownMenu && (
        <DropDownMenu menu={zmienna(id)} onMouseOver={onMouseLeave} />
      )}
    </header>
  );
}
