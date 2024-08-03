import React from "react";
import { Accessibility } from "lucide-react";
export default function Header() {
  return (
    <header className="bg-zinc-800 text-white">
      <div className="flex justify-between mx-16 py-1 items-center">
        <Accessibility />
        <div></div>
        <div className="flex gap-6 font-semibold text-sm">
          <a href="">Znajdż sklep</a>
          <a href="">Pomoc</a>
          <a href="">Dołącz do nas</a>
          <a href="">Zaloguj się</a>
        </div>
      </div>
    </header>
  );
}
