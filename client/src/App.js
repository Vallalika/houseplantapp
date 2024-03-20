import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PlantManagement from './PlantManagement';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <PlantManagement />
    </BrowserRouter>
  );
}

export default App;
