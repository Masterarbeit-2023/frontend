import React from 'react';
import { logout, login, setup, create } from "frontend-library";
import logo from './logo.svg';
import {CookieConsent} from "react-cookie-consent";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from './pages/HomePage';
import Header from './components/Header';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div >
      <Router>
        
      <Header />
        <div>
          <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/search" element={<SearchPage/>}/>
          </Routes>
        </div>
      </Router>
      <CookieConsent
          buttonText="Ok, verstanden"
          style={{background: "#2B373B"}}
          buttonStyle={{color: "#4e503b", fontSize: "13px"}}
      >Diese Website verwendet Cookies, um die Benutzerfreundlichkeit zu verbessern.</CookieConsent>
    </div>
  );
}

export default App;

