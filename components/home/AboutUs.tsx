import { EyeIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/outline";
import { BuildingOfficeIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div id="about" className="py-24 container mx-auto px-10 md:px-32 bg-slate-50	">
      <h1 className="my-3 text-2xl  text-conimex-gray-300 font-bold m-auto">
        ¿Quiénes somos?
      </h1>

      <p className="text-conimex-gray-200 my-2">
        Somos una empresa mexicana especializada en el suministro integral de
        materiales para corporativos e industrial. Comenzando operaciones en el
        año 2018, Conimex Importadora S.A de C.V. nace de la experiencia de un
        grupo multidisciplinario de colaboradores con más de 10 años de
        experiencia en el sector, brindando{" "}
        <strong>soluciones de compras enfocado en corporativos.</strong>{" "}
      </p>
      <p className="text-conimex-gray-200 my-2">
        Nos enfocamos en brindar una solución integral para tu área de compras,
        encargándonos de proveer los materiales que tu negocio necesita para
        proyectos especiales o recurrentes.
      </p>
      <h1 className="my-6 text-2xl text-center text-conimex-gray-300 font-bold m-auto">
      ¡Tus compras en un solo lugar! 
      </h1>
      
      <div className="flex gap-10 mt-10 flex-wrap lg:flex-nowrap items-center justify-center">
        <div className="lg:w-1/2 flex gap-4 flex-col">
          <div className="bg-white p-8 rounded-xl">
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
          <div className="bg-white p-8 rounded-xl">
            <EyeIcon className="h-8 w-8 my-2 text-blue-500" />

            <h4 className="text-xl  text-conimex-gray-300 font-semibold  mb-4">
              Visión
            </h4>
            <p className=" text-conimex-gray-200">
              Ser reconocidos como la mejor opción en el mercado de suministros
              de materiales para corporativos e industrial, gracias a la calidad
              de nuestros productos, la excelencia en nuestros servicios y la
              satisfacción de nuestros clientes.
            </p>
          </div>         
        </div>
        <div>
              <Image src="/images/aboutUs/items.jpeg" alt="about us image"width={700} height={700}/>
          </div>
      </div>
      <div className="mt-6 flex gap-10 flex-wrap-reverse lg:flex-nowrap items-center">
        <div >
          <Image
            src={"/images/aboutUs/team.png"}
            alt="team"
            width={650}
            height={650}
          />
        </div>

        <div className="bg-white  p-8 rounded-xl lg:w-1/2">
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
