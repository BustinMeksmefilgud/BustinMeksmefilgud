import React, { Component } from 'react';

class Skill extends Component{
    
    
    render() {
      return (
        <div  class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <h1 class="text-5xl font-bold text-emerald-300 mb-4">My Skills</h1>
          <div class="container mx-auto grid grid-cols-2 grid-rows-2 gap-4 mt-16">
            <div class="flex items-center justify-center border-t p-4">
              <img src="./assets/img/Java.png" alt="Java" height="200" width="400" />
            </div>
            <div class="flex flex-col justify-center border-t p-4">
              <h2 class="text-2xl font-bold mb-2">Java Programming</h2>
              <p class="text-emerald-500">
                I have experienced working using Java as the main language and I have an understannding of OOP concepts
              </p>
            </div>
            <div class="flex flex-col justify-center border-t p-4">
              <h2 class="text-2xl font-bold mb-2">Spring Security</h2>
              <p class="text-emerald-500">
                I have developed websites using Spring Boot using Spring Security for encryption and authentication
              </p>
            </div>
            <div class="flex items-center justify-center border-t p-4">
              <img src="./assets/img/Spring.png" alt="Security" height="200" width="400" />
            </div>
            <div class="flex items-center justify-center border-t p-4">
              <img src="./assets/img/MySql.png" alt="Java" height="200" width="400" />
            </div>
            <div class="flex flex-col justify-center border-t p-4">
              <h2 class="text-2xl font-bold mb-2">Database Management</h2>
              <p class="text-emerald-500">
                I have done work with databases using MySql Workbench
              </p>
            </div>
            <div class="flex flex-col justify-center border-t p-4">
              <h2 class="text-2xl font-bold mb-2">Web Development</h2>
              <p class="text-emerald-500">
                I have used React to create front-end designs and I am familiar with Bootstrap and Tailwindcss
              </p>
            </div>
            <div class="flex items-center justify-center border-t p-4">
              <img src="./assets/img/React.png" alt="Security" height="200" width="400" />
            </div>
            <div class="flex items-center justify-center border-t p-4">
              <img src="./assets/img/Debugging.png" alt="Java" height="200" width="400" />
            </div>
            <div class="flex flex-col justify-center border-t p-4">
              <h2 class="text-2xl font-bold mb-2">Testing and Debugging</h2>
              <p class="text-emerald-500">
                I have experience with testing and debugging projects using Junit
              </p>
            </div>
          </div>
        </div>
       )
      
    }

}

export default Skill