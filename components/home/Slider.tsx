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
            src="/images/hero/work.jpg"
            alt="img slider"
            fill
            className="object-cover -z-10"
          />
          <p className="text-white z-10 mt-40 mx-64 text-2xl">
            Nuestra pasión es simplificar tus compras corporativas e
            industriales, ofreciendo soluciones integrales que liberan tu tiempo
            y te permiten enfocarte en lo que realidad importa.
          </p>
          <p className="text-white z-10 ml-64 mt-6 font-extrabold text-6xl">
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
