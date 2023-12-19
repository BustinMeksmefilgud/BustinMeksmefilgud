import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Project from './components/Project';
import ContactMe from './components/ContactMe';

class App extends Component {
  

  render() {


    return (
      <div class="bg-gradient-to-tr lg:bg-gradient-to-tl from-teal-900 via-teal-700 to-emerald-700 min-h-screen bg-fixed">
        <Router>
          <div class="font-mono text-emerald-300 text-2xl md:text-3xl pb-20">

          <div className="group navbar">
            <div className="navbar-start">
              <div className="dropdown lg:hidden me-5">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-slate-900">
                <li
                      class="hover:text-3xl duration-300 py-1 hover:text-blue-500"
                      data-te-nav-item-ref
                    >
                      <Link to="/">Home</Link>
                    </li>
                    <li
                      class="hover:text-3xl duration-300 py-1 hover:text-blue-500"
                      data-te-nav-item-ref
                    >
                      <Link to="/About">About Me</Link>
                    </li>
                    <li
                      class="hover:text-3xl duration-300 py-1 hover:text-blue-500"
                      data-te-nav-item-ref
                    >
                      <Link to="/Projects">Projects</Link>
                    </li>
                    <li
                      class="hover:text-3xl duration-300 py-1 hover:text-blue-500"
                      data-te-nav-item-ref
                    >
                      <Link to="/Contact">Contact Me</Link>
                    </li>
                </ul>
              </div>
            <p class="lg:flex hidden items-center group-hover:animate-bounce">
                  <img
                    src="./assets/img/log.png"
                    class="xl:animate-pulse"
                    alt="logo"
                    height="100"
                    width="100"
                  />
                </p>
            <p class="xl:flex hidden fixed items-center group-hover:animate-bounce">
                <img
                    src="./assets/img/log.png"
                    alt="logo"
                    height="100"
                    width="100"
                  />
                </p>
            </div>
            <div className="navbar-center">
            <ul class="text-2xl tracking-wide list-style-none mr-auto pl-0 hidden lg:flex flex-row gap-x-8">
                    <li
                      class="hover:text-3xl duration-300 py-1 hover:text-blue-500"
                      data-te-nav-item-ref
                    >
                      <Link to="/">Home</Link>
                    </li>
                    <li
                      class="hover:text-3xl duration-300 py-1 hover:text-blue-500"
                      data-te-nav-item-ref
                    >
                      <Link to="/About">About Me</Link>
                    </li>
                    <li
                      class="hover:text-3xl duration-300 py-1 hover:text-blue-500"
                      data-te-nav-item-ref
                    >
                      <Link to="/Projects">Projects</Link>
                    </li>
                    <li
                      class="hover:text-3xl duration-300 py-1 hover:text-blue-500"
                      data-te-nav-item-ref
                    >
                      <Link to="/Contact">Contact Me</Link>
                    </li>
                  </ul>
            </div>
            <div className="navbar-end">
            <p class="flex lg:hidden items-center mt-5">
                  <img
                    src="./assets/img/log.png"
                    class="animate-bounce"
                    alt="logo"
                    height="100"
                    width="100"
                  />
                </p>
            </div>
          </div>

            
          
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<AboutMe />} />
              <Route path="/Projects" element={<Project />} />
              <Route path="/Contact" element={<ContactMe />} />
            </Routes>
          </div>
          <div class="cursor-default text-center py-5 xl:fixed xl:bottom-60 xl:-right-12 mx-auto text-emerald-300 xl:-rotate-90">
            <p>Sebastian Seth Escarro | 2023</p>
          </div>
        </Router>
        
      </div>
    );
  }
}

export default App;
