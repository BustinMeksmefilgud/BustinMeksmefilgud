import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Project from './components/Project';
import ContactMe from './components/ContactMe';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  render() {
    const { isOpen } = this.state;

    return (
      <div class="bg-teal-800 h-screen">
        <Router>
          <div class="font-mono text-emerald-300 text-2xl md:text-3xl bg-teal-800">

          <div className="navbar">
            <div className="navbar-start">
              <div className="dropdown lg:hidden me-5">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li
                      class="hover:scale-1000 duration-300 py-1 hover:text-blue-500"
                      data-te-nav-item-ref
                    >
                      <Link to="/">Home</Link>
                    </li>
                    <li
                      class="hover:scale-1000 duration-300 py-1 hover:text-blue-500"
                      data-te-nav-item-ref
                    >
                      <Link to="/About">About Me</Link>
                    </li>
                    <li
                      class="hover:scale-1000 duration-300 py-1 hover:text-blue-500"
                      data-te-nav-item-ref
                    >
                      <Link to="/Skills">Skills</Link>
                    </li>
                    <li
                      class="hover:scale-1000 duration-300 py-1 hover:text-blue-500"
                      data-te-nav-item-ref
                    >
                      <Link to="/Projects">Projects</Link>
                    </li>
                    <li
                      class="hover:scale-1000 duration-300 py-1 hover:text-blue-500"
                      data-te-nav-item-ref
                    >
                      <Link to="/Contact">Contact Me</Link>
                    </li>
                </ul>
              </div>
            <p class="lg:flex hidden items-center">
                  <img
                    src="./assets/img/log.png"
                    class="animate-pulse"
                    alt="logo"
                    height="100"
                    width="100"
                  />
                </p>
            </div>
            <div className="navbar-center">
            <ul class="text-2xl tracking-wide list-style-none mr-auto pl-0 hidden lg:flex flex-row gap-x-8">
                    <li
                      class="hover:scale-1000 duration-300 py-1 hover:text-blue-500"
                      data-te-nav-item-ref
                    >
                      <Link to="/">Home</Link>
                    </li>
                    <li
                      class="hover:scale-1000 duration-300 py-1 hover:text-blue-500"
                      data-te-nav-item-ref
                    >
                      <Link to="/About">About Me</Link>
                    </li>
                    <li
                      class="hover:scale-1000 duration-300 py-1 hover:text-blue-500"
                      data-te-nav-item-ref
                    >
                      <Link to="/Skills">Skills</Link>
                    </li>
                    <li
                      class="hover:scale-1000 duration-300 py-1 hover:text-blue-500"
                      data-te-nav-item-ref
                    >
                      <Link to="/Projects">Projects</Link>
                    </li>
                    <li
                      class="hover:scale-1000 duration-300 py-1 hover:text-blue-500"
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

            
            {/* <nav class="top-0 left-0 w-auto py-6 flex-no-wrap relative flex">
              <div class="container mx-auto flex justify-between">
                <p class="flex items-center">
                  <img
                    src="./assets/img/log.png"
                    class="animate-bounce"
                    alt="logo"
                    height="100"
                    width="100"
                  />
                </p>


                
                <button
                  class="block border-0 bg-transparent px-2 text-emerald-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden absolute top-3 right-3 z-10"
                  type="button"
                  onClick={this.toggleMenu}
                  aria-label="Toggle navigation"
                >
                  <span class="[&>svg]:w-7">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="h-7 w-7"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 110 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  class={`${
                    isOpen ? 'visible slide-down' : 'hidden'
                  } flex-grow basis-[100%] lg:!flex lg:basis-auto items-center flex`}
                  id="navbarSupportedContent1"
                >
                  <ul class="text-2xl tracking-wide list-style-none mr-auto flex flex-col pl-0 lg:flex-row gap-x-8">
                    <li
                      class="hover:scale-1000 duration-300 py-1 hover:text-blue-500"
                      data-te-nav-item-ref
                    >
                      <Link to="/">Home</Link>
                    </li>
                    <li
                      class="hover:scale-1000 duration-300 py-1 hover:text-blue-500"
                      data-te-nav-item-ref
                    >
                      <Link to="/About">About Me</Link>
                    </li>
                    <li
                      class="hover:scale-1000 duration-300 py-1 hover:text-blue-500"
                      data-te-nav-item-ref
                    >
                      <Link to="/Skills">Skills</Link>
                    </li>
                    <li
                      class="hover:scale-1000 duration-300 py-1 hover:text-blue-500"
                      data-te-nav-item-ref
                    >
                      <Link to="/Projects">Projects</Link>
                    </li>
                    <li
                      class="hover:scale-1000 duration-300 py-1 hover:text-blue-500"
                      data-te-nav-item-ref
                    >
                      <Link to="/Contact">Contact Me</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav> */}
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
