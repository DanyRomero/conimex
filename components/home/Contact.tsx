import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="pt-24" style={{ backgroundColor: "#F7F7F7" }}>
      <h2 className="mb-3 px-6 text-2xl text-center text-conimex-gray-300 font-bold lg:w-1/2 m-auto">
        Solicita tu cotización o contáctanos por este medio
      </h2>
      <form className="px-6">
        <div className="flex lg:px-56 flex-wrap lg:flex-nowrap gap-4 mt-12">
          <div className="w-full">
            <label className="font-bold" htmlFor="name">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              placeholder="Tu nombre"
              className="border-conimex-gray-200 border rounded-2xl bg-transparent p-4 w-full"
            />
          </div>
          <div className="w-full">
            <label className="font-bold" htmlFor="company">
              Nombre de tu compañía
            </label>

            <input
              type="text"
              id="company"
              placeholder="Compañía"
              className="border border-conimex-gray-200 rounded-2xl bg-transparent p-4 w-full"
            />
          </div>
        </div>
        <div className="flex lg:px-56 flex-wrap lg:flex-nowrap gap-4 mt-8">
          <div className="w-full">
            <label className="font-bold" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="Dirección de email"
              className="border-conimex-gray-200 border rounded-2xl bg-transparent p-4 w-full"
            />
          </div>
          <div className="w-full">
            <label className="font-bold" htmlFor="phone">
              Teléfono
            </label>
            <input
              type="text"
              id="phone"
              placeholder="Número de teléfono"
              className="border border-conimex-gray-200 rounded-2xl bg-transparent p-4 w-full"
            />
          </div>
        </div>
        <div className="flex lg:px-56 flex-wrap lg:flex-nowrap gap-4 mt-8">
          <div className="w-full">
            <label className="font-bold" htmlFor="text">
              ¿Cómo podemos ayudarte?
            </label>
            <textarea
              id="text"
              rows={5}
              placeholder="Ingresa tu mensaje aquí..."
              className="border-conimex-gray-200 border rounded-2xl bg-transparent p-4 w-full"
            />
          </div>
        
        </div>
      </form>

      <div className="relative">
        <Image
          src={"/images/contact/banner.jpg"}
          alt="contact team"
          width={1920}
          height={600}
        />
      </div>
    </div>
  );
};

export default Contact;
