import Background from "../components/layout/Background";
import HomeHero from "../components/home/HomeHero";

const HomePage = () => {
  return (
    <Background>
      <div className="max-w-[1280px] mx-auto px-4">
        <HomeHero />
      </div>
    </Background>
  );
};

export default HomePage;
