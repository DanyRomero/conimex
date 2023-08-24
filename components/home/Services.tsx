import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div id="services" className="py-24">
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
      <div className="grid md:grid-cols-3 mt-16">
        <div className="relative overflow-hidden group">
          <div className="bg-indigo-100 h-96 group-hover:-translate-y-36 transition-all flex justify-center">
            <Image
              src="/images/seguridad.png"
              alt="security equipment"
              width={800}
              height={350}
              className="p-4"
            />
          </div>
          <div className="absolute bottom-0 translate-y-36 group-hover:translate-y-0 transition-all">
            <h6 className="font-semibold text-center text-conimex-gray-300 p-2">
              Equipo de mantenimiento y seguridad industrial
            </h6>
            <p className=" text-conimex-gray-200 text-center p-2">
              Desde equipos de protección personal, hasta artículos de
              ferretería y plomería, nuestro catálogo cubre todas las
              necesidades de mantenimiento y seguridad.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden group">
          <div className="bg-indigo-200 h-96 group-hover:-translate-y-36 transition-all flex justify-center">
            <Image
              src="/images/apple.png"
              alt="security equipment"
              width={450}
              height={250}
              className="p-4"
            />
          </div>
          <div className="absolute bottom-0 translate-y-36 group-hover:translate-y-0 transition-all">
            <h6 className="font-semibold text-center text-conimex-gray-300 p-2">
              Electrónicos
            </h6>
            <p className=" text-conimex-gray-200 text-center p-2">
              Desde celulares,laptops, computadoras y tabletas hasta impresoras
              y cargadores, productos garantizados en calidad y rendimiento.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden group">
          <div className="bg-indigo-300 h-96 group-hover:-translate-y-36 transition-all flex justify-center">
            <Image
              src="/images/lineaBlanca.webp"
              alt="security equipment"
              width={470}
              height={200}
              className="p-4"
            />
          </div>
          <div className="absolute bottom-0 translate-y-36 group-hover:translate-y-0 transition-all">
            <h6 className="font-semibold text-center text-conimex-gray-300 p-2">
              Línea blanca
            </h6>
            <p className=" text-conimex-gray-200 text-center p-2">
              Desde hornos y refrigeradores hasta despachadores y ventiladores,
              nuestros productos cumplen con altos estándares de eficiencia y
              durabilidad
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
