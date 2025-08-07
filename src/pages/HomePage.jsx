import Background from "../components/layout/Background";
import HomeHero from "../components/home/HomeHero";
import ServicesPage from "./ServicesPage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";

const HomePage = () => {
  return (
    <>
      <Background>
        <div id="home" className="max-w-[1440px] mx-auto">
          <HomeHero />
        </div>
      </Background>

      <section id="services" className="scroll-mt-16 sm:scroll-mt-20 lg:scroll-mt-24">
        <ServicesPage />
      </section>

      <section id="about" className="scroll-mt-16 sm:scroll-mt-20 lg:scroll-mt-24">
        <AboutPage />
      </section>

      <section id="contact" className="scroll-mt-16 sm:scroll-mt-20 lg:scroll-mt-24">
        <ContactPage />
      </section>
    </>
  );
};

export default HomePage;