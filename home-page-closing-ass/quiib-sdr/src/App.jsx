import { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Landing from './components/pages/Landing';
import Apply from './components/pages/apply';
import { useEffect } from 'react';

const RedirectToExternal = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.location.href = 'https://m3jcdnom1s3.typeform.com/to/c0BpoK9m';
    // Or use navigate for internal routes
    // navigate('/some-internal-route');
  }, [navigate]);
}

function App() {
  
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
