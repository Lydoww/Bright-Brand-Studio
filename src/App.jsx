import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <>
      {/* Navbar dans le conteneur mais présente partout */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-[1280px] mx-auto px-4">
          <Navbar />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/" element={<ContactPage />} />
      </Routes>
    </>
  );
};

export default App;
