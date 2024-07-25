import {React, useState, useEffect} from 'react';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000)
  }, []);

  return (
    <div className="App">
      {
        loading ? (
          <div className='flex justify-center items-center w-full h-lvh'>
          <ClimbingBoxLoader 
          size={30}
          color={'#1B3047'}
          loading={loading}
          />
          </div>
        ) : (
          <>
          <Navbar />
          <Home />
          </>
        )   
      }
    </div>
  );
}

export default App;
