import React, { useEffect, useState } from "react";
import { Frame, ShoppingCart, Heart } from "lucide-react";
import DropDownMenu from "./HeaderComponents/DropDownMenu";
import { News, Mens, Womens, Kids } from "./HeaderComponents/NewsData";
import SearchBar from "./SearchBar";

export default function Header(props) {
  // SearchBar
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [search, setSearch] = useState("");
  // DropDownMenu
  const [showDropDownMenu, setShowDropDownMenu] = useState(false);
  const [id, setId] = useState(0);

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
  // Navrbar scroll
  const [current, setCurrent] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > current) {
        setHidden(false);
      } else {
        setHidden(true);
      }
      setCurrent(scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [current]);

  return (
    <header
      className={`bg-black text-white p-3 ${hidden ? "sticky top-0 z-10" : ""}`}
    >
      <div className="flex mx-12 items-center">
        <div className="flex-1">
          <Frame />
        </div>
        {!showSearchBar && (
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
        )}
        <div className="flex flex-1 gap-6 justify-end items-center">
          <input
            type="search"
            placeholder="Wyszukaj"
            className="rounded-full p-1.5 w-1/4 bg-neutral-700 font-semibold"
            onChange={(e) => setSearch(e.target.value)}
            onClick={() => setShowSearchBar(true)}
          />
          <button href="" className="hover:bg-neutral-700 rounded-full p-2">
            <Heart />
          </button>
          <button href="" className="hover:bg-neutral-700 rounded-full p-2">
            <ShoppingCart />
          </button>
        </div>
      </div>
      {showDropDownMenu && (
        <DropDownMenu menu={zmienna(id)} onMouseOver={onMouseLeave} />
      )}
      {showSearchBar && (
        <SearchBar
          data={props.data}
          search={search}
          className="z-10"
          onMouseOver={() => setShowSearchBar((prev) => false)}
        />
      )}
    </header>
  );
}
