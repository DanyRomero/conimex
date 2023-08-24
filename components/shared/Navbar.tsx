"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const logoSrc = scrolling
    ? "/images/logo_transparent_background.png"
    : "/images/white_logo_transparent.png";

  const textColor = scrolling ? "text-black" : "text-white";

  return (
    <div
      className={`p-1 fixed w-full z-10 flex transition-all duration-300 ease-in ${
        scrolling ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div>
        <Image src={logoSrc} alt="logo" width={250} height={150} />
      </div>
      <div
        className={`flex gap-8 justify-center -ml-40 transition-colors
           ${textColor} font-bold grow items-center`}
      >
        <Link href={"#about"} className="font-bold">
          Nosotros
        </Link>
        <Link href={"#services"} className="font-bold">
          Servicios
        </Link>
        <Link href={"#projects"} className="font-bold">
          Proyectos
        </Link>
        <Link href={""} className="font-bold">
          Cotización
        </Link>
        <Link href={""} className="font-bold">
          Clientes
        </Link>
        <Link href={""} className="font-bold">
          Contacto
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
