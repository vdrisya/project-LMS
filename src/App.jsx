import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import MentorDashboard from './Components/MentorManagement';
import AdminDashboard from './Components/AdminDashboard';
import Navbar from './components/Navbar'
import AdminBar from './Components/AdminBar';
import MentorBar from './Components/MentorBar';

const App = () => {
  return (
    <>
    
    <Router>
    <Navbar /> <br/> <br/>
      <Routes>
        <Route path="/" element={<Login />} />
        
        <Route path="/admin" element={
          <>
          <AdminBar />
          <AdminDashboard />
          </>
          } 
        />
        <Route path="/mentor" element={
          <>
          <MentorBar/>
        <MentorDashboard />
        </>
      } />
      </Routes>
    </Router>
    </>
  );
};

export default App;
