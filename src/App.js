import './App.css';
import './components/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import Home from './components/Home';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import { useState, useEffect } from 'react';
import { Link as Element } from 'react-scroll';
import boy from "./assets/boy1.png"

function App() {
  const [boy1, setBoy] = useState();

  const getImage = () => {
    setBoy(boy);
  };

  useEffect(() => {
    getImage();
  }, []);

  if (!boy1) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <Element name="home">
                <Home data={boy1}/>
              </Element>
            </>
          } />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
