import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import Audrey from "../assets/audrey.jpg";

const AboutPage = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-[#F5F0E9]">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Texte à gauche - même marge droite que l'image à gauche */}
          <div className="space-y-8">
            <p>Hi, </p>
            <h1 className="text-3xl font-semibold text-[#5B4739]">
              I'm Audrey
            </h1>

            <div className="space-y-6 text-lg text-[#5B4739]">
              <p>
                After several years working in ethical fashion and brand
                marketing — from co-founding a circular fashion brand to leading
                strategy for sustainable concept stores — I realized that most
                mission-driven brands don't need more content. They need
                clarity.
              </p>

              <p>
                I created a strategy framework to help you root your vision,
                align your voice, and grow without compromising your values.
              </p>
            </div>

            <button
              type="button"
              className=" rounded-full border font-semibold border-[#F98948] px-5 py-2 text-[#F98948] text-sm hover:bg-[#F98948] hover:text-white transition-colors"
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
