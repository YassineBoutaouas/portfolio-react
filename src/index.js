import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import './css/index.css';

import AboutMe from './js/pages/AboutMe.js';
import Projects from './js/pages/Projects.js';
import Goap from './js/pages/Goap.js';
import CrowdSim from './js/pages/CrowdSimulation.js';
import Renderengine from './js/pages/Renderengine.js';
import Gameplay from './js/pages/Gameplay.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router basename="/portfolio-react">
    <Routes>
      <Route path="/" element={<Projects/>}/>
      <Route path="/AboutMe" element={<AboutMe/>}/>
      <Route path="/Goap" element={ <Goap/>}/>
			<Route path="/CrowdSim" element={ <CrowdSim/> }/>
			<Route path="/RenderEngine" element={ <Renderengine/>}/>
			<Route path="/Gameplay" element={ <Gameplay/>}/>
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();