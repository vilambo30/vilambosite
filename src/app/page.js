import AboutUs from "./aboutus/about";
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
