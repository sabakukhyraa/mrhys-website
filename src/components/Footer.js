import React from "react";
import Icons from "../components/icons/Icons";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center w-full">
      <section className="z-30 w-full py-8 md:w-auto bg-amber-700 md:rounded-3xl">
        <div className="container">
          <ul className="flex flex-col items-center gap-6 text-sm text-center md:flex-row md:text-lg">
            <li className="flex flex-col items-center gap-4 md:w-1/3">
              <Icons iconName={"web"} />
              <p>
                Tekstil uzmanlarından giysiler ve ayakkabılar!
                <strong> MRHYA.com</strong>'u deneyin!
              </p>
            </li>

            <li className="flex flex-col items-center gap-4 md:px-4 md:border-x-[1px] md:w-1/3">
              <Icons iconName={"contact"} />
              <a className="block" href="tel:+90 657 77 11 00">
                İletişim: +90 657 77 11 00
              </a>
            </li>

            <li className="flex flex-col items-center gap-4 md:w-1/3">
              <Icons iconName={"location"} />
              <address>
                Adres: Şeker Mahallesi, Yankı Sokak, Tuzla/İstanbul
              </address>
            </li>
          </ul>
        </div>
      </section>

      <section className="w-full text-center bg-amber-500 md:-mt-14">
        <div className="container py-8 text-sm md:pt-20 md:text-base">
          <i className="block">Copyright © 2022 | MRHYA Tekstil</i>
          <i>Tüm hakları saklıdır.</i>
        </div>
      </section>
    </footer>
  );
}
