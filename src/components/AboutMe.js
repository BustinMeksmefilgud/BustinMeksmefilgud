import React, { Component } from 'react';

class AboutMe extends Component {
  render() {
    return (
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <h1 class="text-5xl font-bold text-emerald-300 mb-4">About Me</h1>
        <div class="bg-teal-400 p-6 rounded shadow-md flex flex-col sm:flex-row">
          <div class="sm:mr-6 mb-6 sm:mb-0 sm:w-1/2">
            <img src="./assets/img/me.jpg" alt="Profile" class="w-full max-w-md" />
            <div class="font-bold text-emerald-800 mt-6 sm:mt-0">
              <p class="mt-8">Full Name: <br />Sebastian Seth R. Escarro</p>
              <p class="mt-8">Birthday: <br />July 23, 2023</p>
              <p class="mt-8">Location: <br />Cebu City, Philippines</p>
              <p class="mt-8">Weaknesses: <br />Being stabbed</p>
            </div>
          </div>
          <div class="sm:w-1/2 mr-9">
           
            <h2 class="font-bold text-gray-800 mt-6">Hello, I'm Sebastian Seth</h2>
            <p class="text-gray-700 leading-relaxed mb-4 pb-9 text-justify">
              You can call me Sebastian, but Seth is easier to say. I also like to be referred to as Bustin. I am an aspiring software engineer, looking to learn more about coding.
            </p>
            <h2 class="font-bold text-gray-800">Education</h2>
            <p class="text-gray-700 leading-relaxed mb-4 pb-9 text-justify">
              I am currently enrolled at the University of Cebu - Banilad, studying in the Computer Studies course. I am also enrolled at Lithan Edculaas Singapore as a Software Engineer.
            </p>
            <h2 class="font-bold text-gray-800">Interest and Hobbies</h2>
            <p class="text-gray-700 leading-relaxed mb-4 text-justify">
              I enjoy playing video games, especially fighting and rhythm games. I am also interested in the internet as a whole, which offers a world of technology wonders and the ability to achieve things from the comfort of our homes.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
