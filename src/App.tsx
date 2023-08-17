import React from 'react';
import { logout, login, setup, create } from "frontend-library";
import logo from './logo.svg';
import {CookieConsent} from "react-cookie-consent";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header';

function App() {
  return (
    <div >
      <Router>
        
      <Header />
        <div>
          <Routes>
              <Route path="/" element={<Home/>}/>

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

