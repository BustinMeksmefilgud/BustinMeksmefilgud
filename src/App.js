import './App.css';
import React, { Component } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Project from './components/Project';
import ContactMe from './components/ContactMe';

class App extends Component {
  render(){
    return (
      <div class="bg-teal-800 h-screen">
      <Router>
        <div class="font-mono text-emerald-300 text-2xl bg-teal-800">
          <nav class="top-0 left-0 w-auto py-6">
            <div class="container mx-auto flex justify-between">

              <p class="flex items-center"> 
                <img src="./assets/img/log.png" class="animate-bounce" alt="logo" height="100" width="100" /> 
                <span>Sebastian Seth Escarro</span>
              </p>
              
              <ul class="md:ml-auto md:mr-auto flex flex-wrap tracking-wide items-center flex gap-x-8">
                <li class="hover:scale-1000 duration-300 py-1 hover:text-blue-500"><Link to="/">Home</Link></li>
                  <li class="hover:scale-1000 duration-300 py-1 hover:text-blue-500"><Link to="/About">About Me</Link></li>
                  <li class="hover:scale-1000 duration-300 py-1 hover:text-blue-500"><Link to="/Skills">Skills</Link></li>
                  <li class="hover:scale-1000 duration-300 py-1 hover:text-blue-500"><Link to="/Projects">Projects</Link></li>
                  <li class="hover:scale-1000 duration-300 py-1 hover:text-blue-500"><Link to="/Contact">Contact Me</Link></li>
              </ul>
            </div>
            </nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<AboutMe />} />
              <Route path="/Skills" element={<Skills />} />
              <Route path="/Projects" element={<Project />} />
              <Route path="/Contact" element={<ContactMe />} />
          </Routes>
        
        </div>
        <div class="grid place-items-center mx-auto text-teal-800 bg-teal-800">
            Secret! but empty... Like my soul
        </div>
        </Router>
        </div>
    );
  }
}

export default App;
