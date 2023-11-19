import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Skill extends Component{
  componentDidMount() {
    AOS.init();
  }
    
    render() {
      return (
        <div  class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 font-normal">
          <h1 class="text-5xl font-bold text-emerald-300 mb-4">My Skills</h1>

          <div class="text-xl grid container mx-auto grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-4 mt-16">
            {/* Spring Security */}
            <div data-aos="fade-right" class="flex sm:hidden items-center justify-center border-t p-4">
              <img src="./assets/img/WebDev.png" alt="WebDev" className="max-w-md" />
            </div>
              
            <div data-aos="fade-right" class="flex flex-col justify-center border-t p-4">
              <h2 class="text-2xl font-bold mb-2">Web Development</h2>
              <p class="text-emerald-500">
                I am familiar with how to make websites and I am knowledgable in using <b className="text-emerald-100">HTML, CSS, and Javascript</b>
              </p>
            </div>
            <div data-aos="fade-right" class="hidden sm:flex items-center justify-center border-t p-4">
              <img src="./assets/img/WebDev.png" alt="Security" className="max-w-md" />
            </div>
            
            {/* Java Programming */}
            <div data-aos="fade-left" class="flex items-center justify-center border-t p-4">
              <img src="./assets/img/Java.png" alt="Java" className="max-w-md" />
            </div>
            <div data-aos="fade-left" class="flex flex-col justify-center border-t p-4">
              <h2 class="text-2xl font-bold mb-2">Java Programming</h2>
              <p class="text-emerald-500">
                I have experienced working using <b className="text-emerald-100">Java</b> as the main language and I have an understanding of OOP concepts
              </p>
            </div>

            {/* Spring Security */}
            <div data-aos="fade-right" class="flex sm:hidden items-center justify-center border-t p-4">
              <img src="./assets/img/Spring.png" alt="Security" className="max-w-md" />
            </div>
              
            <div data-aos="fade-right" class="flex flex-col justify-center border-t p-4">
              <h2 class="text-2xl font-bold mb-2">Spring Security</h2>
              <p class="text-emerald-500">
                I have developed websites using <b className="text-emerald-100">Spring Boot</b> using <b className="text-emerald-100">Spring Security</b> for encryption and authentication
              </p>
            </div>
            <div data-aos="fade-right" class="hidden sm:flex items-center justify-center border-t p-4">
              <img src="./assets/img/Spring.png" alt="Security" className="max-w-md" />
            </div>

            {/* MySql */}
            <div data-aos="fade-left" class="flex items-center justify-center border-t p-4">
              <img src="./assets/img/MySql.png" alt="Workbench" className="max-w-md" />
            </div>
            <div data-aos="fade-left" class="flex flex-col justify-center border-t p-4">
              <h2 class="text-2xl font-bold mb-2">Database Management</h2>
              <p class="text-emerald-500">
                I have done work with databases using <b className="text-emerald-100">MySql Workbench</b>
              </p>
            </div>

            {/* React */}
            <div data-aos="fade-right" class="flex sm:hidden items-center justify-center border-t p-4">
              <img src="./assets/img/React.png" alt="React" className="max-w-md scale-90" />
            </div>  
            <div data-aos="fade-right" class="flex flex-col justify-center border-t p-4">
              <h2 class="text-2xl font-bold mb-2">React Development</h2>
              <p class="text-emerald-500">
                I have used <b className="text-emerald-100">React</b> to create front-end designs and I am familiar with <b className="text-emerald-100">Bootstrap</b> and <b className="text-emerald-100">Tailwindcss</b>
              </p>
            </div>
            <div data-aos="fade-right" class="hidden sm:flex items-center justify-center border-t p-4">
              <img src="./assets/img/React.png" alt="React" className="max-w-md scale-90" />
            </div>

            {/* Testing */}
            <div data-aos="fade-left" class="flex items-center justify-center border-t p-4">
              <img src="./assets/img/Debugging.png" alt="Debug" className="max-w-md scale-75" />
            </div>
            <div data-aos="fade-left" class="flex flex-col justify-center border-t p-4">
              <h2 class="text-2xl font-bold mb-2">Testing and Debugging</h2>
              <p class="text-emerald-500">
                I have experience with testing and debugging projects using <b className="text-emerald-100">Junit</b>
              </p>
            </div>
          </div>
        </div>
       )
      
    }

}

export default Skill