import Carousel from "../components/services/Carousel";

const ServicesPage = () => {
  return (
    <main
      aria-labelledby="services-title"
      className="min-h-[calc(100vh-160px)] flex flex-col items-center text-center bg-[#F5F0E9]"
    >
      <div className="max-w-[1280px] mx-auto px-4">
        <h1
          id="services-title"
          className="font-gulfs mt-32 text-4xl md:text-6xl text-[#5B4739]"
        >
          My services
        </h1>
        <p className="mt-8 max-w-xl mx-auto text-xl text-[#5B4739]">
          I help purpose-led brands clarify their message, refine their
          strategy, and build stronger connections with their audience.
        </p>
        <button
          type="button"
          className="mt-6 border rounded-3xl px-6 py-1 font-semibold border-[#5B4739] hover:border-[#F98948] text-[#5B4739] hover:scale-105 hover:text-[#F98948] transition-all"
        >
          Let's Build your Ethical Brand
        </button>
      </div>
      <Carousel />
    </main>
  );
};

export default ServicesPage;
