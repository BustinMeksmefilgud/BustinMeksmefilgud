import React, { Component } from 'react';
class Project extends Component{
    
    
    render() {
        const { image, name, description } = this.props;
    
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
            <h1 className="text-5xl font-bold mb-8">My Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              {/* Project 1 */}
              
              <div className="group bg-teal-200 hover:bg-teal-300 duration-300 p-4">
                  <a target="_blank" href="https://github.com/BustinMeksmefilgud/Know-Your-Neighboorhood">    
                    <img src="./assets/img/Picture2.png" alt="A project of mine" className="object-cover w-full h-80 hover:-translate-y-1 hover:scale-60 hover:p-4 duration-300" />
                  </a>
                  <div className="px-4 py-3 text-gray-800">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center hover:-translate-y-1 hover:scale-110 hover:p-4 duration-300"><a target="_blank" href="https://github.com/BustinMeksmefilgud/Know-Your-Neighboorhood">Know Your Neighborhood</a></h2>
                    <p>A website that show faclilities added by users. Made using ReactJS and Spring tool Suite. Integrates Facebook Login API</p>
                    <div className="container flex flex-wrap sm:hidden group-hover:flex">
                      <div className="flex rounded-full items-center bg-teal-100 cursor-default hover:bg-teal-500 duration-300 px-4 py-2 mt-4 mr-2">
                        <h1 className="w-4 h-4 sm:w-6 sm:h-6 bg-green-700 rounded-full mr-2"></h1>
                          Java
                      </div>        
                      <div className="flex rounded-full items-center bg-teal-100 cursor-default hover:bg-teal-500 duration-300 px-4 py-2 mt-4 mr-2">
                        <h1 className="w-4 h-4 sm:w-6 sm:h-6 bg-green-400 rounded-full mr-2"></h1>
                          Spring
                      </div>    
                      <div className="flex rounded-full items-center bg-teal-100 cursor-default hover:bg-teal-500 duration-300 px-4 py-2 mt-4 mr-2">
                        <h1 className="w-4 h-4 sm:w-6 sm:h-6 bg-teal-500 rounded-full mr-2"></h1>
                          React
                      </div>
                      <div className="flex rounded-full items-center bg-teal-100 cursor-default hover:bg-teal-500 duration-300 px-4 py-2 mt-4 mr-2">
                        <h1 className="w-4 h-4 sm:w-6 sm:h-6 bg-blue-500 rounded-full mr-2"></h1>
                          MySQL
                      </div>
                    </div>
                    
                  </div>
              </div>
              
              {/* Project 2 */}
              
              <div className="group bg-teal-200 hover:bg-teal-300 duration-300 p-4">
                <a target="_blank" href="https://github.com/BustinMeksmefilgud/ABC-Car-Portal">    
                  <img src="./assets/img/Picture1.png" alt="A project of mine" className="object-cover w-full h-80 hover:-translate-y-1 hover:scale-60 hover:p-4 duration-300" />
                </a> 
                <div className="px-4 py-3 text-gray-800">
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center hover:-translate-y-1 hover:scale-110 hover:p-4 duration-300"><a target="_blank" href="https://github.com/BustinMeksmefilgud/ABC-Car-Portal">ABC Car Portal</a></h2>
                  <p>A used car portal that allows users to post and buy used cars. Made using Spring tool Suite uses spring security for user authentication</p>
                  <div className="container flex flex-wrap sm:hidden group-hover:flex duration-300">
                      <div className="flex rounded-full items-center bg-teal-100 cursor-default hover:bg-teal-500 duration-300 px-4 py-2 mt-4 mr-2">
                        <h1 className="w-4 h-4 sm:w-6 sm:h-6 bg-green-700 rounded-full mr-2"></h1>
                          Java
                      </div>        
                      <div className="flex rounded-full items-center bg-teal-100 cursor-default hover:bg-teal-500 duration-300 px-4 py-2 mt-4 mr-2">
                        <h1 className="w-4 h-4 sm:w-6 sm:h-6 bg-green-400 rounded-full mr-2"></h1>
                          Spring
                      </div>     
                      <div className="flex rounded-full items-center bg-teal-100 cursor-default hover:bg-teal-500 duration-300 px-4 py-2 mt-4 mr-2">
                        <h1 className="w-4 h-4 sm:w-6 sm:h-6 bg-blue-500 rounded-full mr-2"></h1>
                          MySQL
                      </div>
                    </div>
                </div>
              </div>
              
              {/*End of Row 1*/}   

               {/* Project 3 */}
              
               <div className="group bg-teal-200 hover:bg-teal-300 duration-300 p-4">
                <a target="_blank" href="https://mealsonwheels.yeems214.xyz/">    
                  <img src="./assets/img/MealsOnWheels.png" alt="A project of mine" className="object-cover w-full h-80 hover:-translate-y-1 hover:scale-60 hover:p-4 duration-300" />
                </a> 
                <div className="px-4 py-3 text-gray-800">
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center hover:-translate-y-1 hover:scale-110 hover:p-4 duration-300"><a target="_blank" href="https://mealsonwheels.yeems214.xyz/">Meals on Wheels</a></h2>
                  <p>A website that allows members to order hot meals if they are within 10km from the outsourced kitchen but cold meals if above that. Utilizes a donation page
                    that uses the PayPal api in order to send donations.
                  </p>
                  <div className="container flex flex-wrap sm:hidden group-hover:flex duration-300">
                      <div className="flex rounded-full items-center bg-teal-100 cursor-default hover:bg-teal-500 duration-300 px-4 py-2 mt-4 mr-2">
                        <h1 className="w-4 h-4 sm:w-6 sm:h-6 bg-green-700 rounded-full mr-2"></h1>
                          Java
                      </div>        
                      <div className="flex rounded-full items-center bg-teal-100 cursor-default hover:bg-teal-500 duration-300 px-4 py-2 mt-4 mr-2">
                        <h1 className="w-4 h-4 sm:w-6 sm:h-6 bg-green-400 rounded-full mr-2"></h1>
                          Spring
                      </div>     
                      <div className="flex rounded-full items-center bg-teal-100 cursor-default hover:bg-teal-500 duration-300 px-4 py-2 mt-4 mr-2">
                        <h1 className="w-4 h-4 sm:w-6 sm:h-6 bg-blue-500 rounded-full mr-2"></h1>
                          MySQL
                      </div>
                    </div>
                </div>
              </div>
          
            {/* Project 4 */}
              
              <div className="group bg-teal-200 hover:bg-teal-300 duration-300 p-4">
                <a target="_blank" href="https://github.com/BustinMeksmefilgud/ABC-Job-Portal">    
                  <img src="./assets/img/Picture3.png" alt="A project of mine" className="object-cover w-full h-80 hover:-translate-y-1 hover:scale-60 hover:p-4 duration-300" />
                </a> 
                <div className="px-4 py-3 text-gray-800">
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center hover:-translate-y-1 hover:scale-110 hover:p-4 duration-300"><a target="_blank" href="https://github.com/BustinMeksmefilgud/ABC-Job-Portal">ABC Job Portal</a></h2>
                  <p>A job portal where users can post threads for other users to see, apply for jobs created by the administrator, and search for other
                  users registered on the portal. Created using Spring MVC. 
                  </p>
                  <div className="container flex flex-wrap sm:hidden group-hover:flex duration-300">
                      <div className="flex rounded-full items-center bg-teal-100 cursor-default hover:bg-teal-500 duration-300 px-4 py-2 mt-4 mr-2">
                        <h1 className="w-4 h-4 sm:w-6 sm:h-6 bg-green-700 rounded-full mr-2"></h1>
                          Java
                      </div>        
                      <div className="flex rounded-full items-center bg-teal-100 cursor-default hover:bg-teal-500 duration-300 px-4 py-2 mt-4 mr-2">
                        <h1 className="w-4 h-4 sm:w-6 sm:h-6 bg-green-500 rounded-full mr-2"></h1>
                          Spring MVC
                      </div>     
                      <div className="flex rounded-full items-center bg-teal-100 cursor-default hover:bg-teal-500 duration-300 px-4 py-2 mt-4 mr-2">
                        <h1 className="w-4 h-4 sm:w-6 sm:h-6 bg-blue-500 rounded-full mr-2"></h1>
                          MySQL
                      </div>
                    </div>
                </div>
              </div>

            {/*End of Row 2*/}   
              
            {/* Project 5 */}
              
              <div className="group bg-teal-200 hover:bg-teal-300 duration-300 p-4">
                  <a target="_blank" href="https://github.com/BustinMeksmefilgud/JumpTrackPro">    
                    <img src="./assets/img/JumpTrackpro.png" alt="A project of mine" className="object-cover w-full h-80 hover:-translate-y-1 hover:scale-60 hover:p-4 duration-300" />
                  </a>
                  <div className="px-4 py-3 text-gray-800">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center hover:-translate-y-1 hover:scale-110 hover:p-4 duration-300"><a target="_blank" href="https://github.com/BustinMeksmefilgud/JumpTrackPro">JumpTrack Pro</a></h2>
                    <p>An inventory management system that shows warehouse stock and allows managers to order stock for their stores and make sales. Lists products, employees, and stores that have the most sales. Created using react and spring</p>
                    <div className="container flex flex-wrap sm:hidden group-hover:flex">
                      <div className="flex rounded-full items-center bg-teal-100 cursor-default hover:bg-teal-500 duration-300 px-4 py-2 mt-4 mr-2">
                        <h1 className="w-4 h-4 sm:w-6 sm:h-6 bg-green-700 rounded-full mr-2"></h1>
                          Java
                      </div>        
                      <div className="flex rounded-full items-center bg-teal-100 cursor-default hover:bg-teal-500 duration-300 px-4 py-2 mt-4 mr-2">
                        <h1 className="w-4 h-4 sm:w-6 sm:h-6 bg-green-400 rounded-full mr-2"></h1>
                          Spring
                      </div>    
                      <div className="flex rounded-full items-center bg-teal-100 cursor-default hover:bg-teal-500 duration-300 px-4 py-2 mt-4 mr-2">
                        <h1 className="w-4 h-4 sm:w-6 sm:h-6 bg-teal-500 rounded-full mr-2"></h1>
                          React
                      </div>
                      <div className="flex rounded-full items-center bg-teal-100 cursor-default hover:bg-teal-500 duration-300 px-4 py-2 mt-4 mr-2">
                        <h1 className="w-4 h-4 sm:w-6 sm:h-6 bg-blue-500 rounded-full mr-2"></h1>
                          MySQL
                      </div>
                    </div>
                  </div>
              </div>

            </div>
          </div>
        );
      }
    }

export default Project