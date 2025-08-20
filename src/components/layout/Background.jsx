import mainBg from '../../assets/bg.jpg';

const Background = ({ children }) => {
  return (
    <div
      className='min-h-screen h-screen bg-cover bg-center bg-no-repeat overflow-x-hidden'
      style={{ backgroundImage: `url(${mainBg})` }}
    >
      {children}
    </div>
  );
};

export default Background;
