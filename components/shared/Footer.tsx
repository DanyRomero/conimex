import React from "react";

const Footer = () => {
  return (
    <div className="bg-blue-900 py-20">
      <div className="container px-10 md:px-40 flex md:gap-20 gap-10 flex-wrap md:flex-nowrap">
        <div className="mt-4">
          <h5 className="font-bold text-white">Contacto</h5>
          <a className="text-white text-xs" href="tel:5544367353">
            Teléfono:5544367353
          </a>
          <br />
          <a
            className="text-white text-xs"
            href="mailto:contacto@conimeximp.com"
          >
            Correo: contacto@conimeximp.com
          </a>
        </div>
        <div className="md:mt-4">
          <h5 className="font-bold text-white ">Horario</h5>
          <p className="text-white text-xs">
            Lunes a Viernes: 9:00am - 6:00pm{" "}
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
