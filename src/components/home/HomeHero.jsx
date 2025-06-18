const HomeHero = () => {
  return (
    <section className="min-h-[calc(100vh-160px)] flex flex-col justify-end pb-10">
      {" "}
      {/* justify-end + pb-20 pour espace du bas */}
      <div className="max-w-[1280px] mx-auto px-4 w-full">
        {" "}
        {/* Conteneur aligné avec la Navbar */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-shrikhand text-[#2B59C3] leading-tight w-max">
          {" "}
          {/* w-max pour largeur contenu */}
          Strategy that feels human.
          <br />
          Brands that feel true.
        </h1>
      </div>
    </section>
  );
};

export default HomeHero;
