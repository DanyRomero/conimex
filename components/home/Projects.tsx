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
      src: "/images/projects/futbolito.jpg",
    },
    {
      src: "/images/projects/tv.jpg",
    },
    {
      src: "/images/projects/instalacion.jpg",
    },
    {
      src: "/images/projects/cubrebocas.jpg",
    },
    {
      src: "/images/projects/refri.jpg",
    },
    {
      src: "/images/projects/licuadoras.jpg",
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
      src: "/images/projects/carpa.jpg",
    },
    {
      src: "/images/projects/patin.jpeg",
    },
  ];

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  )
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  )

  return (
    <div id="projects" className="py-32">
      <h2 className="my-3 text-2xl text-center text-conimex-gray-300 font-bold md:w-1/2 m-auto">
        Proyectos realizados
      </h2>
      <div className="flex float-right mr-6">
        <ArrowLeftCircleIcon className="h-12 w- m-2 text-blue-500" onClick={()=> scrollPrev()} />
        <ArrowRightCircleIcon className="h-12 w-12 m-2 text-blue-500" onClick={()=> scrollNext()} />
      </div>

      <div className="embla ml-4 md:ml-24 mr-2 m-auto mt-20">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container items-end gap-6">
            {images.map((img, index) => {
              return (
                <div className="shrink-0" key={index}>
                  <Image
                    className="embla__slide__img rounded-lg"
                    src={img.src}
                    alt="slide image"
                    width={400}
                    height={300}
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
