import Navbar from './components/layout/Navbar';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <>
      <div className='fixed top-0 left-0 right-0 z-50'>
        <Navbar />
      </div>

      <HomePage />
    </>
  );
};

export default App;
