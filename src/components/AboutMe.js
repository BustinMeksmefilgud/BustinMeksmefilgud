import React, { Component } from 'react';

class AboutMe extends Component{
    
    
    render() {
        return (
          
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
              <h1 class="text-5xl font-bold text-emerald-300 mb-4">About Me</h1>
              <div class="bg-teal-400 p-6 rounded shadow-md flex">
                <div class="mr-6">
                  <img src="./assets/img/me.jpg" alt="Profile" height="800" width="1600" />
                  <div class="font-bold text-emerald-800 mt-30">
                    <p class="mt-8">Full Name: <br/>Sebastian Seth R. Escarro</p>
                    <p class="mt-8">Birthday: <br/>July 23, 2023</p>
                    <p class="mt-8">Location: <br/>Cebu City, Philippines </p>
                    <p class="mt-8">Weaknesses: <br/>Being stabbed</p>
                  </div>
                </div>
                <div>
                  <h2 class="font-bold text-gray-800 mb-4">Hello, I'm Sebastian Seth</h2>
                  <p class="text-gray-700 leading-relaxed mb-4 pb-9 text-justify">
                                You can call me Sebastian but Seth is more easier to say. I also like to be refered as Bustin. I am an aspiring
                                software engineer, looking to learn more about coding.
                  </p>
                  <h2 class="font-bold text-gray-800 mb-4">Education</h2>
                  <p class="text-gray-700 leading-relaxed mb-4 pb-9 text-justify">
                                I am currently enrolled at University of Cebu - Banilad, studying in the Computer Studies course. I am also enrolled
                                at Lithan Edculaas Singapore as a Software Engineer
                  </p>
                  <h2 class="font-bold text-gray-800 mb-4">Interest and Hobbies</h2>
                  <p class="text-gray-700 leading-relaxed mb-4 text-justify">
                                I am an enjoyer of video games, my favorite genres are fighting and rythym games. I am also interested in the internet
                                as a whole. An entire new world filled with all the wonders of technology, allowing us to achieve things in the comfort of our homes.
                  </p>
                </div>
              </div>
            </div>
          
        )
    }

}

export default AboutMe