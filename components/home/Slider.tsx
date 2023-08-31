"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const Slider = () => {
  const [emblaRef] = useEmblaCarousel({}, [Autoplay()]);

  const slides = [
    {
      src: "/images/hero/working.jpg",
      textColor: "text-white",
    },
    {
      src: "/images/hero/almacen.jpg",
      textColor: "text-white",
    },
    {
      src: "/images/hero/office3.jpg",
      textColor: "text-white",
    },
    {
      src: "/images/hero/industrial.jpg",
      textColor: "text-white",
    },
    {
      src: "/images/hero/soldador.jpg",
      textColor: "text-white",
    },
    {
      src: "/images/hero/laps.jpg",
      textColor: "text-white",
    },
    {
      src: "/images/hero/nitrilo.jpg",
      textColor: "text-white",
    },
  ];

  return (
    <div id="slider" className="embla" ref={emblaRef}>
      <div className="embla__container">
        {slides.map((slide) => {
          return (
            <div
              key={slide.src}
              className="embla__slide h-screen w-screen relative bg-black/30"
            >
              <Image
                src={slide.src}
                alt="img slider"
                fill
                className="object-cover -z-20"
              />
             
              <p className={`${slide.textColor} z-20 pt-4 mt-72  ml-10 lg:text-2xl pr-4  md:w-1/2`}>
                Nuestra pasión es simplificar tus compras corporativas e
                industriales, ofreciendo soluciones integrales que liberan tu
                tiempo y te permiten enfocarte en lo que realidad importa.
              </p>
              <p className={`${slide.textColor} z-20 ml-10 mt-6 font-extrabold text-xl md:text-3xl lg:text-6xl`}>
                ¡Hacer crecer tu negocio!
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
