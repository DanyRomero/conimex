import Image from "next/image";
import React from "react";

const Services = () => {
  const servicesList = [
    {
      color: "bg-indigo-100",
      title: "Mantenimiento y seguridad industrial",
      description:
        "Desde equipos de protección personal, hasta artículos de ferretería y plomería, nuestro catálogo cubre todas las necesidades de mantenimiento y seguridad.",
      img: "/images/services/seguridad.png",
      widthImg: 800,
      heightImg: 350,
    },
    {
      color: "bg-indigo-200",
      title: "Electrónicos",
      description:
        " Desde celulares,laptops, computadoras y tabletas hasta impresoras y cargadores, productos garantizados en calidad y rendimiento.",
      img: "/images/services/apple.png",
      widthImg: 680,
      heightImg: 280,
    },
    {
      color: "bg-indigo-300",
      title: "Línea blanca",
      description:
        "Desde hornos y refrigeradores hasta despachadores y ventiladores, nuestros productos cumplen con altos estándares de eficiencia y durabilidad.",
      img: "/images/services/lineaBlanca.webp",
      widthImg: 470,
      heightImg: 200,
    },
    {
      color: "bg-blue-100",
      title: "Audio y video",
      description:
        "Ofrecemos pantallas, bocinas, auriculares y más para crear experiencias visuales y auditivas impactantes en su entorno corporativo.",
      img: "/images/services/video.png",
      widthImg: 490,
      heightImg: 220,
    },
    {
      color: "bg-blue-200",
      title: "Sanidad",
      description:
        "Ofrecemos productos sanitarios para un ambiente empresarial saludable y seguro, incluyendo cubrebocas, termómetros, sanitizantes y oxímetros.",
      img: "/images/services/sanidad.webp",
      widthImg: 490,
      heightImg: 220,
    },
    {
      color: "bg-blue-300",
      title: "Mobiliario",
      description:
      "Tenemos una amplia selección de mobiliario funcional y elegante para sus instalaciones, incluyendo sillas, sillones, mesas, escritorios y anaqueles.",
      img: "/images/services/mobiliario.webp",
      widthImg: 490,
      heightImg: 220,
    },
    {
      color: "bg-sky-100",
      title: "Uniformes",
      description:
      "Ofrecemos uniformes corporativos de alta calidad y comodidad, desde chalecos y cascos hasta botas y batas, que reflejan la identidad de su empresa.",
      img: "/images/services/uniformes.webp",
      widthImg: 490,
      heightImg: 220,
    },
    {
      color: "bg-sky-200",
      title: "Regalos coporativos",
      description:
      "Destaque su empresa con regalos corporativos únicos y personalizados, desde tarjetas regalo hasta bicicletas y motos, fortaleciendo relaciones con clientes y empleados.",
      img: "/images/services/bici.webp",
      widthImg: 500,
      heightImg: 180,
    },
    {
      color: "bg-sky-300",
      title: "Cotizaciones Personalizadas",
      description:
      "Entendemos que cada cliente tiene necesidades únicas. Por eso, ofrecemos cotizaciones personalizadas para adaptarnos a sus requisitos específicos y presupuesto.",
      img: "/images/services/callcenter.png",
      widthImg: 500,
      heightImg: 100,
    },
  ];
  return (
    <div id="services" className="pt-24">
      <h2 className="my-3 text-2xl text-center text-conimex-gray-300 font-bold md:w-1/2 m-auto">
        Líneas de servicio{" "}
      </h2>
      <p className="text-center text-conimex-gray-200 my-2 mx-6 md:w-1/2 md:m-auto">
        Nuestra misión es simple pero poderosa: desbloquear su potencial
        empresarial. ¿Cómo lo hacemos? Proporcionando soluciones integrales y
        eficientes de compras que simplifican sus operaciones, liberándolos para
        centrarse en lo que realmente importa: el crecimiento de sus negocios. A
        continuación, le presentamos una selección de nuestros servicios clave:
      </p>
      <div className="grid md:grid-cols-3 gap-2 mt-16">
        {servicesList.map((service) => {
          return (
            <div key={service.title} className="relative overflow-hidden group">
              <div
                className={`${service.color} h-96 md:group-hover:-translate-y-44 transition-all flex items-center justify-center`}
              >
                <Image
                  src={service.img}
                  alt="security equipment"
                  width={service.widthImg}
                  height={service.heightImg}
                  className="p-4"
                />
              </div>
              <div className="md:absolute bottom-0 md:translate-y-44 group-hover:translate-y-0 transition-all">
                <h6 className="font-semibold text-center text-conimex-gray-300 p-2">
                  {service.title}
                </h6>
                <p className=" text-conimex-gray-200 text-center p-2">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
