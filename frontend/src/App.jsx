/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";
import { useState } from 'react';
import MainPage from './pages/MainPage.jsx';
import Calendar from './pages/Calendar.jsx';
import Tutorial from './pages/Tutorial.jsx';
import Profile from './pages/Profile.jsx';
import LoginForm from './components/LoginForm/LoginForm.jsx';
import SignUp from './components/RegisterForm/SignUp.jsx';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const getProfileRoute = () => {
    if (loggedIn) {
      return <Route path="/Profile" element={<Profile />} />;
    } else {
      return <Route path="/Profile" element={<Navigate to="/Login" replace />} />;
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Main" replace />} />
      <Route path="/Main" element={<MainPage />} />
      <Route path="/Calendar" element={<Calendar />} />
      <Route path="/Tutorial" element={<Tutorial />} />
      {getProfileRoute()}
      <Route path="/Login" element={<LoginForm setLoggedIn={setLoggedIn} />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
  );
}

export default App;
