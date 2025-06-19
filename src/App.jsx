import Navbar from "./components/layout/Navbar";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
      {/* Navbar fixe */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="max-w-[1280px] mx-auto px-4">
          <Navbar />
        </div>
      </div>

      {/* Contenu principal scrollable */}
      <HomePage />
    </>
  );
};

export default App;
