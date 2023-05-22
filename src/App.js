import React, {useState,useEffect} from 'react'
import NavBar from './Components/NavBar/NavBar';
import './App.css'
import HomeBody from './Components/HomeBody/HomeBody';
import GridLoader from "react-spinners/GridLoader";

function App() {
  const [loading, setLoading] = useState(false);
   useEffect(() => {
     setLoading(true);
     setTimeout(() => {
       setLoading(false);
     }, 3000);
   }, []);

  return (
    <div className="App">
      <div className='loading'>
        {loading ? (
          <GridLoader
            color={"#32cd32"}
            loading={loading}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <>
            <HomeBody />
            <NavBar />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
