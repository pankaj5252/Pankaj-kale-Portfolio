import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAssets = async () => {
      // Simulate loading time
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Set loading to false once assets are loaded
      setLoading(false);
    };

    loadAssets();
  }, []);

  return (
    <div
      style={{
        display: loading ? 'flex' : 'none',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#f8f9fa', // Change to your preferred background color
        zIndex: 9999, // Ensure it's above other elements
        transition: 'opacity 0.5s ease-in-out',
        opacity: loading ? 1 : 0,
        pointerEvents: loading ? 'auto' : 'none',
      }}
    >
      <div>
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;