import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

class AboutMe extends Component {
  componentDidMount() {
    AOS.init();
  }
  render() {
    return (
      <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <h1 className="text-5xl font-bold text-emerald-300 mb-4">About Me</h1>
        <div className="flex flex-col sm:flex-row cursor-default">
          <div data-aos="fade-right" className="mb-6 sm:mb-0 sm:w-1/2">
            <img src="./assets/img/me.png" alt="Profile" className="h-5/6 mx-auto" />
          </div>
          <div data-aos="fade-left" className="sm:w-1/2 cursor-default text-center">
           
            <h2 className="font-bold text-emerald-300 mt-6">Hello, I'm Sebastian Seth</h2>
            <p className="text-emerald-400 text-xl leading-relaxed mb-4">
              You can call me Sebastian, but Seth is easier to say. I also like to be referred to as <a href="https://www.youtube.com/watch?v=0tdyU_gW6WE" className="cursor-default">Bustin</a>. I am an aspiring software engineer, looking to learn more about coding.
            </p>
            <div className="grid grid-cols-2 text-xl text-emerald-300 py-6 mt-6 sm:mt-0">
              <p className="mb-5"><b>Full Name:</b><br /> Sebastian Seth R. Escarro</p>
              <p className="mb-5"><b>Birthday:</b><br /> July 23, 2003</p>
              <p className="mb-5"><b>Location:</b><br /> Cebu City, Philippines</p>
              <p className="mb-5"><b>Hobbies:</b><br /> Video Games, Biking</p>
            </div>
          </div>
        </div>
        </div>
        <div data-aos="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold mb-8">Education</h1>
            <p className="text-xl text-emerald-400 leading-relaxed mb-4 pb-9">
            I am currently pursuing a Computer Studies course at the esteemed University of Cebu - Banilad, equipping me with a strong foundation in computer science principles, programming, software development, algorithms, and database management. Additionally, I am enrolled at Lithan Edculaas in Singapore, actively pursuing a software engineering program to enhance my expertise. This dual enrollment combines theory and practical experience, enabling me to develop innovative software solutions.
            </p>
        </div>
      
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <h1 className="text-5xl font-bold mb-8">Work Experience</h1>
         
          <h3>Byrocs</h3>
          <ul className="text-lg text-emerald-400 list-disc ps-12">
            <li className="text-lg text-emerald-400">1 month work trial</li>
            <li className="text-lg text-emerald-400">Content and Design for Website</li>
          </ul>
       
        </div>
      </>

    );
  }
}

export default AboutMe;
