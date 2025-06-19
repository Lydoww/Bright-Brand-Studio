import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import Audrey from "../assets/audrey.jpg";

const AboutPage = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-[#F5F0E9]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-[#5B4739] italic text-4xl md:text-6xl mb-12 text-center md:text-left">
          Who I am?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Texte à gauche - même marge droite que l'image à gauche */}
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-[#5B4739]">
              Hi, I'm Audrey!
            </h2>

            <div className="space-y-6 text-lg text-gray-700">
              <p>
                After several years working in ethical fashion and brand marketing
                — from co-founding a circular fashion brand to leading strategy
                for sustainable concept stores — I realized that most
                mission-driven brands don't need more content. They need clarity.
              </p>

              <p>
                I created a strategy framework to help you root your vision, align
                your voice, and grow without compromising your values.
              </p>
            </div>

            <button
              type="button"
              className="mt-4 px-8 py-3 bg-[#5B4739] text-white rounded-md hover:bg-[#4a3a2e] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#5B4739] focus:ring-opacity-50"
              aria-label="Contact Audrey to work together"
            >
              Let's work together
            </button>
          </div>

          {/* Image à droite - même marge gauche que le texte à droite */}
          <div className="flex justify-center md:justify-end">
            <LazyLoadImage
              src={Audrey}
              alt="Audrey - Sustainable Brand Strategist"
              effect="opacity"
              width={500}
              height={500}
              className="rounded-lg object-cover w-full max-w-[500px] h-auto shadow-lg"
              placeholderSrc={Audrey}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;