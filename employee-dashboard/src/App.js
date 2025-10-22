import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import EmployeeForm from './components/EmployeeForm';
import './components/components.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee/new" element={<EmployeeForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
