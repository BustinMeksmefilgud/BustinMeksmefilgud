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
              <p class="mt-8">Hobbies: <br />Video Games, Biking</p>
            </div>
          </div>
          <div class="sm:w-1/2 mr-9">
           
            <h2 class="font-bold text-gray-800 mt-6">Hello, I'm Sebastian Seth</h2>
            <p class="text-gray-700 leading-relaxed mb-4 pb-9 text-justify">
              You can call me Sebastian, but Seth is easier to say. I also like to be referred to as Bustin. I am an aspiring software engineer, looking to learn more about coding.
            </p>
            <h2 class="font-bold text-gray-800">Education</h2>
            <p class="text-gray-700 leading-relaxed mb-4 pb-9 text-justify">
            I am currently pursuing a Computer Studies course at the esteemed University of Cebu - Banilad, equipping me with a strong foundation in computer science principles, programming, software development, algorithms, and database management. Additionally, I am enrolled at Lithan Edculaas in Singapore, actively pursuing a software engineering program to enhance my expertise. This dual enrollment combines theory and practical experience, enabling me to develop innovative software solutions.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
