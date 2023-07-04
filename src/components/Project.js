import React, { Component } from 'react';
class Project extends Component{
    
    
    render() {
        const { image, name, description } = this.props;
    
        return (
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
            <h1 class="text-5xl font-bold mb-8">My Projects</h1>
            <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              {/* Project 1 */}
              
              <div class="group bg-teal-200 hover:bg-teal-300 duration-300 p-4">
                  <a target="_blank" href="https://github.com/BustinMeksmefilgud/Know-Your-Neighboorhood">    
                    <img src="./assets/img/Picture2.png" alt="A project of mine" class="object-cover w-full h-80 hover:-translate-y-1 hover:scale-60 hover:p-4 duration-300" />
                  </a>
                  <div class="px-4 py-3 text-gray-800">
                    <h2 class="text-4xl md:text-5xl font-bold mb-8 text-center hover:-translate-y-1 hover:scale-110 hover:p-4 duration-300"><a target="_blank" href="https://github.com/BustinMeksmefilgud/Know-Your-Neighboorhood">Know Your Neighborhood</a></h2>
                    <p>A website that show faclilities added by users. Made using ReactJS and Spring tool Suite. Integrates Facebook Login API</p>
                    <div class="container flex flex-wrap sm:hidden group-hover:flex duration-300">
                      <div class="flex rounded-full items-center bg-teal-100 border-cyan-900 px-4 py-2 mt-4 mr-2">
                        <h1 class="w-4 h-4 sm:w-6 sm:h-6 bg-green-700 rounded-full mr-2"></h1>
                          Java
                      </div>        
                      <div class="flex rounded-full items-center bg-teal-100 border-cyan-900 px-4 py-2 mt-4 mr-2">
                        <h1 class="w-4 h-4 sm:w-6 sm:h-6 bg-green-400 rounded-full mr-2"></h1>
                          Spring
                      </div>    
                      <div class="flex rounded-full items-center bg-teal-100 border-cyan-900 px-4 py-2 mt-4 mr-2">
                        <h1 class="w-4 h-4 sm:w-6 sm:h-6 bg-teal-500 rounded-full mr-2"></h1>
                          React
                      </div>
                      <div class="flex rounded-full items-center bg-teal-100 border-cyan-900 px-4 py-2 mt-4 mr-2">
                        <h1 class="w-4 h-4 sm:w-6 sm:h-6 bg-blue-500 rounded-full mr-2"></h1>
                          MySQL
                      </div>
                    </div>
                    
                  </div>
              </div>
              
              {/* Project 2 */}
              
              <div class="group bg-teal-200 hover:bg-teal-300 duration-300 p-4">
                <a target="_blank" href="https://github.com/BustinMeksmefilgud/ABC-Car-Portal">    
                  <img src="./assets/img/Picture1.png" alt="A project of mine" class="object-cover w-full h-80 hover:-translate-y-1 hover:scale-60 hover:p-4 duration-300" />
                </a> 
                <div class="px-4 py-3 text-gray-800">
                  <h2 class="text-4xl md:text-5xl font-bold mb-8 text-center hover:-translate-y-1 hover:scale-110 hover:p-4 duration-300"><a target="_blank" href="https://github.com/BustinMeksmefilgud/ABC-Car-Portal">ABC Car Portal</a></h2>
                  <p>A used car portal that allows users to post and buy used cars. Made using Spring tool Suite uses spring security for user authentication</p>
                  <div class="container flex flex-wrap sm:hidden group-hover:flex duration-300">
                      <div class="flex rounded-full items-center bg-teal-100 px-4 py-2 mt-4 mr-2">
                        <h1 class="w-4 h-4 sm:w-6 sm:h-6 bg-green-700 rounded-full mr-2"></h1>
                          Java
                      </div>        
                      <div class="flex rounded-full items-center bg-teal-100 px-4 py-2 mt-4 mr-2">
                        <h1 class="w-4 h-4 sm:w-6 sm:h-6 bg-green-400 rounded-full mr-2"></h1>
                          Spring
                      </div>     
                      <div class="flex rounded-full items-center bg-teal-100 border-cyan-900 px-4 py-2 mt-4 mr-2">
                        <h1 class="w-4 h-4 sm:w-6 sm:h-6 bg-blue-500 rounded-full mr-2"></h1>
                          MySQL
                      </div>
                    </div>
                </div>
              </div>
              
          
            {/*End of Row 1*/}   


            </div>
          </div>
        );
      }
    }

export default Project