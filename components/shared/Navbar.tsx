"use client";

import { Transition } from "@headlessui/react";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleNav = () => {
    setIsMobileNavOpen((previous) => !previous);
  };
  return (
    <div className="fixed w-full z-10 bg-white">
      <div className="flex items-center">
        <Link href={"#slider"} className="bg-white grow">
          <Image
            src="/images/logo_transparent_background.png"
            alt="logo"
            width={250}
            height={150}
          />
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-blue-500 md:hidden mr-4"
          onClick={toggleNav}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>

      <Transition
        show={isMobileNavOpen}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          className="text-white fixed inset-0 flex flex-col p-10 gap-10 md:hidden"
          style={{ backgroundColor: "#002F67" }}
        >
          <div className="flex justify-between pb-8">
            <Image
              src="/images/white_logo_transparent.png"
              alt="logo"
              width={200}
              height={100}
            />
            <button onClick={toggleNav} type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col gap-5 pl-4">
            <Link href="#about" onClick={toggleNav}>
              NOSOTROS
            </Link>
            <Link href="#services" onClick={toggleNav}>
              SERVICIOS
            </Link>
            <Link href="#projects" onClick={toggleNav}>
              PROYECTOS
            </Link>
            <Link href="#reviews" onClick={toggleNav}>
              CLIENTES
            </Link>
            <Link href="#contact" onClick={toggleNav}>
              COTIZACIONES Y CONTACTO
            </Link>
          </div>

          <div className="flex flex-col gap-2 mt-20 pl-4">
            <h5 className="font-bold text-white">Contacto</h5>
            <a className="text-white text-xs" href="tel:5544367353">
              Teléfono: 5544367353
            </a>
            <a
              className="text-white text-xs"
              href="mailto:contacto@conimeximp.com"
            >
              Correo: contacto@conimeximp.com
            </a>
            <p
              className="text-white text-xs mt-6"
            >
            Lunes a Viernes: 9:00am - 6:00pm
            </p>
          </div>
        </div>
      </Transition>

      <div
        className="text-white md:gap-6 lg:gap-28 py-1 justify-center hidden md:flex w-full"
        style={{ backgroundColor: "#002F67" }}
      >
        <Link href={"#about"}>NOSOTROS</Link>
        <Link href={"#services"}>SERVICIOS</Link>
        <Link href={"#projects"}>PROYECTOS</Link>
        <Link href={"#reviews"}>CLIENTES</Link>
        <Link href={"#contact"}>COTIZACIONES Y CONTACTO</Link>
      </div>
    </div>
  );
};

export default Navbar;
