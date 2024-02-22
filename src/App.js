import './App.css';
import './components/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import MyNav from './components/MyNav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Services from './components/Services';
import LoadingScreen from './components/LoadingScreen'
import { useState, useEffect } from 'react';

function App() {
  const myImage = "/assets/pk1.jpg";
  const boy = "/assets/boy1.png";
  const [pankaj, setPankaj] = useState();
  const [boy1,setBoy]=useState()
  const getImage = () => {
    setBoy(boy)
    setPankaj(myImage);
  };
  useEffect(() => {
    getImage();
  }, []);
  if (!pankaj) {
    <LoadingScreen />
  }
  return (
    <>
      <LoadingScreen />
      <Router>
        <MyNav />
        <Routes>
          <Route path="/" element={<Home data={boy1} pk={pankaj}/>} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/about" element={<About pk={pankaj} />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
