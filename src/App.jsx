import Background from "./components/layout/Background";
import HomeHero from "./components/home/HomeHero";
import Navbar from "./components/layout/Navbar";

const App = () => {
  return (
    <Background>
      <div className="max-w-[1280px] mx-auto px-4">
        <Navbar />
        <HomeHero />
      </div>
    </Background>
  );
};

export default App;
