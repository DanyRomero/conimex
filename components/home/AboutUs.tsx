import { EyeIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/outline";
import { BuildingOfficeIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div id="about" className="py-24 container mx-auto px-10 bg-slate-50	">
      <h1 className="my-3 text-2xl text-center text-conimex-gray-300 font-bold md:w-1/2 m-auto">
        Centraliza tus compras en un solo lugar y libera tu tiempo para
        concentrarte en lo que realmente importa:
      </h1>
      <h1 className="my-3 text-2xl text-center text-conimex-gray-300 font-bold md:w-1/2 m-auto">
        Hacer crecer tu negocio.
      </h1>

      <p className="text-center text-conimex-gray-200 my-2 md:w-1/2 m-auto">
        Nos especializamos en ser tu aliado estratégico en compras,
        proporcionando los materiales esenciales para impulsar tus proyectos, ya
        sean únicos o recurrentes.
      </p>

      <div className="flex gap-10 mt-10 flex-wrap">
        <div className="bg-white p-8 rounded-xl flex-1">
          <BuildingOfficeIcon className="h-8 w-8 my-2 text-blue-500" />
          <h4 className="text-xl  text-conimex-gray-300 font-semibold mb-4">
            Historia
          </h4>
          <p className=" text-conimex-gray-200">
            Conimex Importadora S.A de C.V. es una empresa mexicana fundada en
            2018 por un equipo de expertos con más de 10 años de experiencia en
            suministros corporativos e industriales. Nos especializamos en
            ofrecer soluciones de compra integral para empresas.
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl flex-1">
          <StarIcon className="h-8 w-8 my-2 text-blue-500" />
          <h4 className="text-xl  text-conimex-gray-300 font-semibold  mb-4">
            Misión
          </h4>
          <p className=" text-conimex-gray-200">
            Ser una empresa líder en el suministro integral de materiales para
            corporativos e industrial, brindando soluciones de compras
            personalizadas y eficientes a nuestros clientes, con un enfoque en
            la satisfacción total del cliente.
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl flex-1">
          <EyeIcon className="h-8 w-8 my-2 text-blue-500" />

          <h4 className="text-xl  text-conimex-gray-300 font-semibold  mb-4">
            Visión
          </h4>
          <p className=" text-conimex-gray-200">
            Ser reconocidos como la mejor opción en el mercado de suministros de
            materiales para corporativos e industrial, gracias a la calidad de
            nuestros productos, la excelencia en nuestros servicios y la
            satisfacción de nuestros clientes.
          </p>
        </div>
      </div>
      <div className="mt-6 flex gap-8 flex-wrap md:flex-nowrap">
        <div className="w-1/2 m-auto flex justify-center">
          <Image
            src={"/images/team3.jpg"}
            alt="team"
            width={500}
            height={500}
            className="rounded-full"
          />
        </div>

        <div className="bg-white p-8 rounded-xl md:w-1/2">
          <HeartIcon className="h-8 w-8 my-2 text-blue-500" />

          <h4 className="text-xl  text-conimex-gray-300 font-semibold  mb-4">
            Nuestros valores
          </h4>
          <p className="text-conimex-gray-300 font-semibold">Excelencia</p>
          <p className=" text-conimex-gray-200">
            Nos dedicamos a proporcionar servicios y productos de la más alta
            calidad, siempre persiguiendo la mejora continua en todas nuestras
            acciones
          </p>
          <p className="text-conimex-gray-300 font-semibold">Integridad</p>
          <p className=" text-conimex-gray-200">
            Actuamos con honestidad, transparencia y ética en todas nuestras
            relaciones, tanto comerciales como personales
          </p>
          <p className="text-conimex-gray-300 font-semibold">
            Trabajo en equipo
          </p>
          <p className=" text-conimex-gray-200">
            Fomentamos la colaboración para alcanzar nuestros objetivos
            empresariales, compartiendo ideas, experiencias y conocimientos
          </p>
          <p className="text-conimex-gray-300 font-semibold">Innovación </p>
          <p className=" text-conimex-gray-200">
            Exploramos constantemente nuevas formas de mejorar y optimizar
            nuestros servicios y productos, manteniéndonos a la vanguardia del
            mercado
          </p>
          <p className="text-conimex-gray-300 font-semibold">
            Responsabilidad social{" "}
          </p>
          <p className=" text-conimex-gray-200">
            Nos comprometemos a ser una empresa socialmente responsable,
            promoviendo prácticas éticas y sostenibles, y contribuyendo
            positivamente a la sociedad y al medio ambiente
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
