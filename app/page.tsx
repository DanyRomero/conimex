import AboutUs from "@/components/home/AboutUs";
import Slider from "@/components/home/Slider";
import Navbar from "@/components/shared/Navbar";
import Services from "@/components/home/Services";
import Projects from "@/components/home/Projects";
import WhatsAppIcon from "@/components/shared/WhatsAppIcon";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Slider />
      <AboutUs />
      <Services />
      <Projects />
      <WhatsAppIcon />
    </main>
  );
}
