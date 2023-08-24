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
      className={`p-1 fixed w-full z-10 flex ${
        scrolling ? "bg-white" : "bg-transparent"
      }`}
    >
      <div>
        <Image src={logoSrc} alt="logo" width={250} height={150} />
      </div>
      <div className=" grow">
        <div
          className={`flex gap-8 justify-center mt-5 -ml-40
           ${textColor} font-bold`}
        >
          <Link href={"#about"} className="font-bold">
            Nosotros
          </Link>
          <Link href={"#services"} className="font-bold">
            Servicios
          </Link>
          <Link href={""} className="font-bold">
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
    </div>
  );
};

export default Navbar;
