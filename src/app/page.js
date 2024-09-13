import AboutUs from "./aboutus/about";
import ContactForm from "./contact/contactForm";
import Footer from "./footer/footer";
import Navbar from "./header/navbar";
import HeroSection from "@/app/hero/hero";
import Services from "./services/services";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Services />
    </>
  );
}
