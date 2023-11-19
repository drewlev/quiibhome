import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/pages/Landing';
import Apply from './components/pages/apply';
import { useEffect } from 'react';



function App() {
  const RedirectToExternal = () => {
    useEffect(() => {
      window.location.href = 'https://m3jcdnom1s3.typeform.com/to/c0BpoK9m';
    }, []);

    return null; // or some loading indicator until the redirect happens
  };



  return (
    <div>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/apply" element={<Apply />} />
      <Route path="/learn" element={<RedirectToExternal />} />
    </Routes>
    
    </div>
  );
}

export default App;
