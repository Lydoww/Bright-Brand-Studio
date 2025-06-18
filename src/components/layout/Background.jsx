import mainBg from "../../assets/bg.png";

const Background = ({ children }) => {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${mainBg})` }}
    >
      {/* Overlay semi-transparent si besoin */}
      {children}
    </div>
  );
};

export default Background;
