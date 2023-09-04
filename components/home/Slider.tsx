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
      text: "Nuestra pasión es simplificar tus compras corporativas e industriales, ofreciendo soluciones integrales que liberan tu tiempo y te permiten enfocarte en lo que realidad importa.",
      quote: "¡Hacer crecer tu negocio!",
    },
    {
      src: "/images/hero/almacen.jpg",
      textColor: "text-white",
      text: ' Más de 15,000 productos a tu disposición. Encuentra todo lo que necesitas en un solo lugar y personaliza tus compras de acuerdo a tus necesidades.',
      quote: '¡Variedad de Productos!'
    },
    {
      src: "/images/hero/office3.jpg",
      textColor: "text-white",
      text:'¿Cansado de perder horas en la búsqueda y compra de suministros para tu negocio? Ofrecemos precios competitivos que pueden ahorrarte hasta un 15% en tiempo y dinero, sin comprometer la calidad de los productos',
      quote: '¡Ahorra tiempo y Dinero!'
    },
    {
      src: "/images/hero/industrial.jpg",
      textColor: "text-white",
      text: 'No somos solo una empresa de suministros, somos tus socios de compras. Experimenta un servicio personalizado con respuestas rápidas, presupuestos y atención excepcional.',
      quote: '¡Atención Personalizada!'
    },
    {
      src: "/images/hero/soldador.jpg",
      textColor: "text-white",
      text: 'Trabajamos con los mejores proveedores, importadores y fabricantes para garantizar que recibas productos de la más alta calidad.',
      quote: '¡Calidad y confianza!'
    },
    {
      src: "/images/hero/laps.jpg",
      textColor: "text-white",
      text: 'Puedes confiar en entregas a domicilio rápidas y eficientes en todo el país. Nuestro compromiso es asegurarnos de que recibas tus pedidos a tiempo.',
      quote: '¡Eficiencia en entregas!'
    },
    {
      src: "/images/hero/nitrilo.jpg",
      textColor: "text-white",
      text: 'En un mundo empresarial en constante cambio, CONIMEX es tu socio estratégico. Nuestra flexibilidad, innovación y enfoque en la satisfacción del cliente nos convierten en la elección perfecta para tus compras corporativas.',
      quote: '¡Confía en CONIMEX para alcanzar tus objetivos comerciales!'
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

              <p
                className={`${slide.textColor} z-20 pt-4 mt-72  ml-10 lg:text-2xl pr-4  md:w-1/2`}
              >
                {slide.text}
              </p>
              <p
                className={`${slide.textColor} z-20 ml-10 mt-6 font-extrabold text-xl md:text-3xl lg:text-6xl`}
              >
                {slide.quote}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
