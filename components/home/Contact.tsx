"use client";
import { useForm } from "react-hook-form";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

type FormValues = {
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
};

const Contact = () => {
  const [confirmation, setConfirmation] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      setConfirmation(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setConfirmation(false)
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div id="contact" className="pt-24" style={{ backgroundColor: "#F7F7F7" }}>
      <h2 className="mb-3 px-6 text-2xl text-center text-conimex-gray-300 font-bold lg:w-1/2 m-auto">
        Solicita tu cotización o contáctanos por este medio
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="px-6 md:px-40 xl:px-96"
      >
        <div className="flex  flex-wrap md:flex-nowrap gap-4 mt-12">
          <div className="w-full">
            <label className="font-bold" htmlFor="name">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              placeholder="Tu nombre"
              className={`${
                errors.name ? "border-red-800" : "border-conimex-gray-200"
              } border rounded-2xl bg-transparent p-4 w-full`}
              {...register("name", { required: "El nombre es requerido" })}
            />
            {errors.name && (
              <div className="mt-2 text-sm rounded-lg text-center bg-red-200 text-red-800">
                {errors.name.message}
              </div>
            )}
          </div>
          <div className="w-full">
            <label className="font-bold" htmlFor="company">
              Nombre de tu compañía
            </label>

            <input
              type="text"
              id="company"
              placeholder="Tu compañía"
              className="border border-conimex-gray-200 rounded-2xl bg-transparent p-4 w-full"
              {...register("company")}
            />
          </div>
        </div>
        <div className="flex  flex-wrap lg:flex-nowrap gap-4 mt-8">
          <div className="w-full">
            <label className="font-bold" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="Dirección de email"
              className={`${
                errors.name ? "border-red-800" : "border-conimex-gray-200"
              } border rounded-2xl bg-transparent p-4 w-full`}
              {...register("email", { required: "El email es requerido" })}
            />
            {errors.email && (
              <div className="mt-2 text-sm rounded-lg text-center bg-red-200 text-red-800">
                {errors.email.message}
              </div>
            )}
          </div>
          <div className="w-full">
            <label className="font-bold" htmlFor="phone">
              Teléfono
            </label>
            <input
              type="text"
              id="phone"
              placeholder="Número de teléfono"
              className={`${
                errors.name ? "border-red-800" : "border-conimex-gray-200"
              } border rounded-2xl bg-transparent p-4 w-full`}
              {...register("phone", { required: "El teléfono es requerido" })}
            />
            {errors.phone && (
              <div className="mt-2 text-sm rounded-lg text-center bg-red-200 text-red-800">
                {errors.phone.message}
              </div>
            )}
          </div>
        </div>
        <div className="flex  flex-wrap lg:flex-nowrap gap-4 mt-8">
          <div className="w-full">
            <label className="font-bold" htmlFor="message">
              ¿Cómo podemos ayudarte?
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Ingresa tu mensaje aquí..."
              className="border-conimex-gray-200 border rounded-2xl bg-transparent p-4 w-full"
              {...register("message")}
            />
          </div>
        </div>
        <div className="flex justify-center my-10">
          <button
            type="submit"
            className="border rounded-2xl bg-conimex-gray-300 hover:bg-conimex-gray-300/80 transition-colors text-white font-bold px-10 md:px-28 py-4"
          >
            Enviar
          </button>
        </div>
      </form>
      
      {confirmation && (
        <div className="flex justify-center bg-green-500 text-white py-2">
          {" "}
          <CheckIcon className="w-6 h-6" />
          <p>Correo enviado</p>{" "}
        </div>
      )}

      <div className="flex justify-center">
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
