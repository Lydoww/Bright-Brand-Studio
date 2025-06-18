import mainbg from "../../assets/bg.png";

const Background = ({ children }) => {
  return (
    <div
      style={{ backgroundImage: `url(${mainbg})` }}
      className="w-screen h-screen bg-center bg-cover"
    >
      {children}
    </div>
  );
};

export default Background;
