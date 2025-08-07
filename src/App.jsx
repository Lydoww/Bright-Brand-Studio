import Navbar from "./components/layout/Navbar";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
      {/* Navbar fixe - retire le wrapper bg-white pour éviter les conflits */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-[1440px] mx-auto">
          <Navbar />
        </div>
      </div>

      {/* Contenu principal scrollable */}
      <HomePage />
    </>
  );
};

export default App;