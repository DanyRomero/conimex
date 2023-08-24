"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const Slider = () => {
  const [emblaRef] = useEmblaCarousel({}, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide h-screen w-screen relative">
          <Image
            src="/images/work.jpg"
            alt="img slider"
            fill
            className="object-cover -z-10"
          />
          <p className="text-white z-10 mt-40 mx-64 text-2xl">
            Nuestra pasión es simplificar tus compras corporativas e
            industriales, ofreciendo soluciones integrales que liberan tu tiempo
            y te permiten enfocarte en lo que realidad importa.
          </p>
          <p className="text-white z-10 ml-64 mt-5 font-extrabold text-6xl">
            !Hacer crecer tu negocio!
          </p>
        </div>

        <div className="embla__slide h-screen w-screen relative">
          <Image
            src="/images/office3.jpg"
            alt="img slider"
            fill
            className="object-cover"
          />
        </div>
        <div className="embla__slide h-screen w-screen relative">
          <Image
            src="/images/industrial.jpg"
            alt="img slider"
            fill
            className="object-cover"
          />
        </div>
        <div className="embla__slide h-screen w-screen relative">
          <Image
            src="/images/soldador.jpg"
            alt="img slider"
            fill
            className="object-cover"
          />
        </div>
        <div className="embla__slide h-screen w-screen relative">
          <Image
            src="/images/laps.jpg"
            alt="img slider"
            fill
            className="object-cover"
          />
        </div>
        <div className="embla__slide h-screen w-screen relative">
          <Image
            src="/images/nitrilo.jpg"
            alt="img slider"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
