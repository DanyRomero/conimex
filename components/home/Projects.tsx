"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const Projects = () => {
  const [emblaRef] = useEmblaCarousel({});

  return (
    <div id="projects" className="py-24">
      <h2 className="my-3 text-2xl text-center text-conimex-gray-300 font-bold md:w-1/2 m-auto">
        Proyectos realizados
      </h2>

      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
