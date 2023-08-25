import { StarIcon } from "@heroicons/react/20/solid";
import React from "react";

const Reviews = () => {
  const testimonials = [
    {
      title: "Facilita mis compras",
      name: "Laura L",
      comment:
        "CONIMEX ha sido nuestro aliado estratégico en el suministro de materiales para nuestra empresa. Su atención personalizada y la calidad de los productos que ofrecen han superado nuestras expectativas.",
    },
    {
      title: "Excelente",
      name: "Eduardo M",
      comment:
        "Estamos muy satisfechos con la eficiencia y profesionalismo de CONIMEX. Han demostrado ser un proveedor confiable que se preocupa por nuestras necesidades y plazos de entrega",
    },
    {
      title: "Ahorro tiempo",
      name: "Carlos R",
      comment:
        "CONIMEX nos ha ayudado a simplificar nuestros procesos de adquisición. Su amplia gama de productos y la rapidez en las cotizaciones nos han permitido ahorrar tiempo y recursos",
    },
    {
      title: "Muy recomendados",
      name: "Sofía L",
      comment:
        "La atención al cliente de CONIMEX es excepcional. Siempre están dispuestos a resolver nuestras dudas y a encontrar soluciones que se adapten a nuestras necesidades",
    },
    {
      title: "Buen servicio",
      name: "Andrés P",
      comment:
        "Desde que comenzamos a trabajar con CONIMEX, hemos visto un impacto positivo en nuestros costos de operación. Sus precios competitivos y productos de calidad nos han ayudado a ser más eficientes",
    },
    {
      title: "Me ayudan mucho",
      name: "Gabriela H",
      comment:
        "CONIMEX se ha convertido en un socio clave para nuestro negocio. Su compromiso con la calidad y la satisfacción del cliente es evidente en cada interacción que tenemos con ellos",
    },
    {
      title: "Servcicio excelente",
      name: "Luis T",
      comment:
        "Hemos encontrado en CONIMEX una fuente confiable para nuestros suministros de seguridad industrial. Su variedad de productos y entregas puntuales nos han brindado tranquilidad en nuestro lugar de trabajo",
    },
    {
      title: "Excelentes productos",
      name: "María C",
      comment:
        "La atención personalizada de CONIMEX nos hace sentir que somos su prioridad. Nos han ayudado a encontrar productos específicos y nos han brindado asesoramiento valioso en cada etapa",
    },
    {
      title: "Muy buenos",
      name: "Javier S",
      comment:
        "CONIMEX ha sido un socio estratégico en la optimización de nuestros procesos de compras. Su enfoque en la calidad y el servicio al cliente nos ha permitido enfocarnos en crecer como empresa",
    },
  ];
  return (
    <div id="reviews" className="py-14 container md:px-10">
      <h2 className="text-2xl text-conimex-gray-300 font-bold text-center m-auto ">
        Testimoniales
      </h2>
      <div className="md:flex mt-10  gap-6 flex-wrap justify-center p-4">
        {testimonials.map((testimonial, index) => {
          return (
            <div key={index} className=" m-4 lg:w-1/4  bg-slate-100 rounded-lg p-4">
              <div className="flex gap-2 py-3 w-auto">
                <StarIcon className="h-6 w- text-green-500" />
                <StarIcon className="h-6 w- text-green-500" />
                <StarIcon className="h-6 w- text-green-500" />
                <StarIcon className="h-6 w- text-green-500" />
                <StarIcon className="h-6 w- text-green-500" />
              </div>

              <h5 className=" font-bold text-conimex-gray-300 ">{testimonial.title}</h5>
              <h5 className="text-conimex-gray-200 my-2 ">{testimonial.comment}</h5>
              <p className="text-conimex-gray-200">{testimonial.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
