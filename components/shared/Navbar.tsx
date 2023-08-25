"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  // const [scrolling, setScrolling] = useState(false);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 100) {
  //       setScrolling(true);
  //     } else {
  //       setScrolling(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const logoSrc = scrolling
  //   ? "/images/logo_transparent_background.png"
  //   : "/images/white_logo_transparent.png";

  // const textColor = scrolling ? "text-black" : "text-white";

  return (
    <div
      className='fixed w-full z-10 flex flex-col'
    >
      <Link href={'#slider'} className=" bg-white">
        <Image src='/images/logo_transparent_background.png' alt="logo" width={250} height={150} />
      </Link>
      <div
        className='text-white flex md:gap-6 lg:gap-28 py-1 justify-center'
        style={{backgroundColor:'#002F67'}}
      >
        <Link href={"#about"}>
          NOSOTROS
        </Link>
        <Link href={"#services"}>
          SERVICIOS
        </Link>
        <Link href={"#projects"}>
          PROYECTOS
        </Link>
        <Link href={""}>
          CLIENTES
        </Link>
        <Link href={"#contact"}>
          COTIZACIONES Y CONTACTO
        </Link>
      </div>
      
    </div>
  );
};

export default Navbar;
