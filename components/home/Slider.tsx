"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const Slider = () => {
  const [emblaRef] = useEmblaCarousel({}, [Autoplay()]);

  const slides = [
    {
      src:'/images/hero/office3.jpg'
    },
    {
      src:'/images/hero/industrial.jpg'
    },
    {
      src:'/images/hero/soldador.jpg'
    },
    {
      src:'/images/hero/laps.jpg'
    },
    {
      src:'/images/hero/nitrilo.jpg'
    }
  ]

  return (
    <div id='slider' className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide h-screen w-screen relative">
          <Image
            src="/images/hero/main.jpeg"
            alt="img slider"
            fill
            className="object-cover -z-10"
          />
          <p className="text-white z-10 pt-4 mt-72 xl:mt-96 ml-10 lg:text-2xl pr-4  md:w-1/2">
            Nuestra pasión es simplificar tus compras corporativas e
            industriales, ofreciendo soluciones integrales que liberan tu tiempo
            y te permiten enfocarte en lo que realidad importa.
          </p>
          <p className="text-white z-10 ml-10 mt-6 font-extrabold text-xl md:text-3xl lg:text-6xl">
            ¡Hacer crecer tu negocio!
          </p>
        </div>
        {slides.map((slide)=>{
          return(
            <div  key={slide.src} className="embla__slide h-screen w-screen relative">
          <Image
            src= {slide.src}
            alt="img slider"
            fill
            className="object-cover"
          />
        </div>
          )
        })}
      </div>
    </div>
  );
};

export default Slider;
