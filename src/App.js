import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import Home from './components/Home';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import boyImage from './assets/boy1.png';

function App() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const loadImage = () => {
      return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = boyImage;
        image.onload = () => resolve();
        image.onerror = () => reject();
      });
    };

    Promise.all([loadImage()])
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading assets:', error);
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home data={boyImage} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
