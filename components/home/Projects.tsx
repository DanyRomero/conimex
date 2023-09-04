"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

import Image from "next/image";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";

const Projects = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({});

  const images = [
    {
      src: "/images/projects/cajasPapel.jpg",
    },
    {
      src: "/images/projects/carga.jpg",
    },
    {
      src: "/images/projects/higiene.jpeg",
    },
    {
      src: "/images/projects/cinchos.jpeg",
    },
    {
      src: "/images/projects/futbolito.jpg",
    },
    {
      src: "/images/projects/carpa2.jpeg",
    },
    {
      src: "/images/projects/carpa.jpg",
    },
    {
      src: "/images/projects/entregas.jpeg",
    },
    {
      src: "/images/projects/ferreteria.jpeg",
    },
    {
      src: "/images/projects/tv.jpg",
    },
    {
      src: "/images/projects/enfriadores.jpeg",
    },
    {
      src: "/images/projects/cintas.jpeg",
    },
    {
      src: "/images/projects/entregas2.jpeg",
    },
    {
      src: "/images/projects/instalacion.jpg",
    },
    {
      src: "/images/projects/cubrebocas.jpg",
    },
    {
      src: "/images/projects/patin.jpeg",
    },
    {
      src: "/images/projects/lockers.jpeg",
    },
    {
      src: "/images/projects/bolsas.jpeg",
    },
    {
      src: "/images/projects/bolsas2.jpeg",
    },
    {
      src: "/images/projects/refri.jpg",
    },
    {
      src: "/images/projects/licuadoras.jpg",
    },
    {
      src: "/images/projects/cajas1.jpeg",
    },
    {
      src: "/images/projects/herramientas.jpeg",
    },
    {
      src: "/images/projects/diales.jpeg",
    },
    {
      src: "/images/projects/sala.jpg",
    },
    {
      src: "/images/projects/sillas.jpg",
    },
    {
      src: "/images/projects/sala2.jpg",
    },
    {
      src: "/images/projects/cajas3.jpeg",
    },
   
  ];

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  return (
    <div id="projects" className="py-24">
      <div className="flex  mx-6 md:justify-between text-center md:text-left flex-wrap md:flex-nowrap justify-center">
        <div>
          <h2 className="my-3 mx-6 md:ml-20 text-2xl text-conimex-gray-300 font-bold md:w-1/2 ">
            Proyectos realizados
          </h2>
          <p className="text-conimex-gray-200 my-2 md:ml-20 md:w-1/2 ">
            Con más de <strong>500 proyectos ejecutados</strong>; te presentamos de manera visual
            nuestro compromiso con la excelencia y el éxito en cada proyecto.
            Desde seguridad industrial, limpieza, mantenimiento, hasta productos
            electrónicos de vanguardia, estas imágenes capturan nuestra <strong>pasión
            por brindar soluciones de calidad a corporativos.</strong>
          </p>
        </div>
        <div className="hidden lg:flex items-center md:mr-6">
          <ArrowLeftCircleIcon
            className="h-12 w- m-2 text-blue-500 hover:bg-blue-400 hover:text-white hover:rounded-full"
            onClick={() => scrollPrev()}
          />
          <ArrowRightCircleIcon
            className="h-12 w-12 m-2 text-blue-500  hover:bg-blue-400 hover:text-white hover:rounded-full"
            onClick={() => scrollNext()}
          />
        </div>
      </div>

      <div className="embla ml-4 md:ml-24 mr-2 m-auto mt-20">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container items-end gap-6">
            {images.map((img, index) => {
              return (
                <div className="shrink-0" key={index}>
                  <Image
                    className="embla__slide__img rounded-lg max-h-96"
                    src={img.src}
                    alt="slide image"
                    width={300}
                    height={400}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
