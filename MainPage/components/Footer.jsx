import React from "react";

export default function Footer() {
  return (
    <footer className="text-white bg-black p-16">
        <hr className="pb-8"/>
      <div className="flex">
        <div className="flex-1">
          <h3 className="font-bold">Zasoby</h3>
          <div className="pt-6 flex flex-col space-y-1.5">
            <a>Karty upominkowe</a>
            <a>Znajdz sklep</a>
            <a>Nike Journal</a>
            <a>Zostań członkiem</a>
            <a>Rabat studencki</a>
            <a>Prześlij opinie</a>
            <a>Kody promocyjne</a>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="font-bold">Pomoc</h3>
          <div className="pt-6 flex flex-col space-y-1.5">
            <a>Uzyskaj pomoc</a>
            <a>Status zamówienia</a>
            <a>Wysyłka i dostawa</a>
            <a>Zwroty</a>
            <a>Opcje płatoności</a>
            <a>Skontaktuj się z nami</a>
            <a>Opinie</a>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="font-bold">Firma</h3>
          <div className="pt-6 flex flex-col space-y-1.5">
            <a>Informacje o Nike</a>
            <a>Aktualności</a>
            <a>Praca</a>
            <a>Podmioty inwestujące</a>
            <a>Ochrona środowiska</a>
            <a>Cel</a>
          </div>
        </div>
      </div>

      <div className="flex gap-8 pt-10">
        <a>© 2024 Nike, Inc. Wszelskie prawa zastrzeżone</a>
        <a>Warunki korzystania</a>
        <a>Regulamin sprzedaży</a>
        <a>Dane firmy</a>
        <a>Polityka prywatności i zasady dotyczące plików cookie</a>
        <a>Ustawienia prywatności plików cookie</a>
      </div>
    </footer>
  );
}
