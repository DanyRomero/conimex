import Image from "next/image";
import Link from "next/link";
import React from "react";

const WhatsAppIcon = () => {
  return (
    <Link className="fixed  right-2 bottom-2" href={'https://wa.me/5215544367353?text=Quisiera%20información%20sobre%20Conimex'}>
      <Image src={'/images/whatsapp.webp'} alt="whatsApp icon" width={50} height={50} className="m-3"/>
    </Link>
  );
};

export default WhatsAppIcon;
