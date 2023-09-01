import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-blue-900 py-6 flex justify-center">
      <div className="container px-10 lg:px-28 flex gap-10 flex-wrap lg:flex-nowrap justify-center">
        <div className="hidden lg:flex flex-col text-white lg:justify-center">
          <h6 className="font-bold">MENU</h6>
          <Link href={"#slider"} className="text-xs">
            - INICIO
          </Link>
          <Link href={"#about"} className="text-xs">
            - NOSOTROS
          </Link>
          <Link href={"#services"} className="text-xs">
            - SERVICIOS
          </Link>
          <Link href={"#projects"} className="text-xs">
            - PROYECTOS
          </Link>
          <Link href={"#reviews"} className="text-xs">
            - CLIENTES
          </Link>
          <Link href={"#contact"} className="text-xs">
            - COTIZACIONES Y CONTACTO
          </Link>
        </div>
        <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-24">
          <div>
            <div className="flex flex-col">
              <h5 className="font-bold text-white">Contacto</h5>
              <a className="text-white text-xs" href="tel:5544367353">
                Teléfono: 5544367353
              </a>
              <a
                className="text-white text-xs"
                href="mailto:contacto@conimeximp.com"
              >
                Correo: contacto@conimeximp.com
              </a>
            </div>
            <div className="flex gap-3 mt-4">
              <Image
                src="/images/footer/truck.svg"
                alt="truck image"
                width={30}
                height={15}
              />
              <p className="text-white font-bold">
                Entregas a domicilio en todo México
              </p>
            </div>
          </div>
          <div>
            <div>
              <h5 className="font-bold text-white ">Horario</h5>
              <p className="text-white text-xs">L-V: 9:00 - 10:00 hrs </p>
            </div>
            <div>
              <h5 className="font-bold text-white mt-7">Redes Sociales</h5>
              <div className="flex gap-4">
                <Link href="https://www.linkedin.com/company/conimex-imp/"  target="_blank">
                  <Image
                    src="/images/footer/linkedin.png"
                    alt="social media"
                    width={22}
                    height={22}
                  />
                </Link>
                <Link href="https://www.instagram.com/conimex_imp/?hl=es" target="_blank">
                  <Image
                    src="/images/footer/instagram.png"
                    alt="social media"
                    width={22}
                    height={22}
                  />
                </Link>
                <Link href="https://m.facebook.com/people/Conimex-Imp/100064838021836/" target="_blank">
                  <Image
                    src="/images/footer/facebook.png"
                    alt="social media"
                    width={22}
                    height={22}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-start justify-center">
            <Image
              src="/images/white_logo_transparent.png"
              alt="logo"
              width={250}
              height={75}
            />
            <p className="text-white text-xs px-5">
              CONIMEX IMPORTADORA S.A. DE C.V.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
