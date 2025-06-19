import Background from "../components/layout/Background";
import HomeHero from "../components/home/HomeHero";
import ServicesPage from "./ServicesPage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";

const HomePage = () => {
  return (
    <>
      <Background>
        <div id="home" className="max-w-[1280px] mx-auto px-4 pt-24">
          <HomeHero />
        </div>
      </Background>

      <section id="services">
        <ServicesPage />
      </section>

      <section id="about">
        <AboutPage />
      </section>

      <section id="contact">
        <ContactPage />
      </section>
    </>
  );
};

export default HomePage;
