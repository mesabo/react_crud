import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateUserPage from './pages/CreateUserPage';
import EditUserPage from './pages/EditUserPage';
import ViewUserPage from './pages/ViewUserPage';
import AboutPage from './pages/AboutPage';
import NavBar from '../components/NavBar'; // Corrected import path

const App = () => (
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<CreateUserPage />} />
      <Route path="/edit/:id" element={<EditUserPage />} />
      <Route path="/view/:id" element={<ViewUserPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  </Router>
);

export default App;
