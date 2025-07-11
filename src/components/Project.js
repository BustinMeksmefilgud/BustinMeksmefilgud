import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
class Project extends Component{
  componentDidMount() {
    AOS.init();
  }
  constructor() {
    super();
    this.state = {
      projects: [
        // {
        //   name: 'JumpTrack Pro',
        //   imageSrc: './assets/img/JumpTrackpro.png',
        //   description:
        //     'An inventory management system that shows warehouse stock and allows managers to order stock for their stores and make sales. Lists products, employees, and stores that have the most sales. Created using React and Spring.',
        //   badges: ['Java', 'Spring', 'ReactJS', 'MySQL', 'JWT', 'REST'],
        //   link: 'https://github.com/BustinMeksmefilgud/JumpTrackPro',
        // },
        {
          name: 'Order in the Court',
          imageSrc: './assets/img/GameCourt.png',
          description:
            'A simple 1v1 fighting game made using Java. Has 4 main attacks with different properties and sizes. (Characters owned by Capcom)',
          badges: ['Java'],
          link: 'https://github.com/pointlessduffin-21/ea-2-fighting-game',
        },
        {
          name: 'Meals on Wheels',
          imageSrc: './assets/img/MealsOnWheels.png',
          description:
            'A website that allows members to order hot meals if they are within 10km from the outsourced kitchen but cold meals if above that. I worked on the kitchen page, allowing the kitchen to transfer the ordered food to the volunteers/delivery ',
          badges: ['Java', 'Spring', 'MySQL'],
          link: 'https://mealsonwheels.yeems214.xyz/',
        },
        {
          name: 'Know Your Neighborhood',
          imageSrc: './assets/img/Picture2.png',
          description:
            'A website that shows facilities added by users. Made using ReactJS and Spring tool Suite. Integrates Facebook Login API.',
          badges: ['Java', 'Spring', 'ReactJS', 'MySQL', 'REST'],
          link: 'https://github.com/BustinMeksmefilgud/Know-Your-Neighboorhood',
        },
        {
          name: 'ABC Car Portal',
          imageSrc: './assets/img/Picture1.png',
          description:
            'A used car portal that allows users to post and buy used cars. Made using Spring tool Suite uses Spring Security for user authentication.',
          badges: ['Java', 'Spring', 'MySQL'],
          link: 'https://github.com/BustinMeksmefilgud/ABC-Car-Portal',
        },
        {
          name: 'ABC Job Portal',
          imageSrc: './assets/img/Picture3.png',
          description:
            'A job portal where users can post threads for other users to see, apply for jobs created by the administrator, and search for other users registered on the portal. Created using Spring MVC.',
          badges: ['Java', 'SpringMVC', 'MySQL'],
          link: 'https://github.com/BustinMeksmefilgud/ABC-Job-Portal',
        },
      ],

      badgeColors: {
        Java: 'bg-gradient-to-b from-red-400 from-50% to-blue-500 to-50%',
        Python: 'bg-gradient-to-tl from-yellow-400 from-50% to-blue-500 to-50%',
        Spring: 'bg-green-400',
        ReactJS: 'bg-teal-500',
        ReactNative: 'bg-teal-400',
        Expo: 'bg-gray-900',
        MySQL: 'bg-blue-500',
        SpringMVC: 'bg-green-500',
        JWT: 'bg-zinc-700',
        REST: 'bg-cyan-300',
      },

      featuredBadges: ['Java', 'Spring', 'ReactJS', 'MySQL', 'JWT', 'REST']
    }
  }
// Make it so that when hovered, badges will have the color instead of the dots
    render() {
      const { projects, badgeColors, featuredBadges } = this.state;
      const projectList = projects.map((p) => (
        <div data-aos="flip-left" className="card bg-neutral-900 hover:bg-neutral-800">
            <figure>                
            <a target="" href={p.link}>    
              <img src={p.imageSrc} alt="A project of mine" className="object-contain h-60 hover:scale-110 duration-300"/>
            </a>
            </figure>
            <div className="card-body items-center text-center mx-4 px-4 py-3">
            <h2 className="card-title text-4xl md:text-5xl font-bold my-8 text-center hover:-translate-y-1 hover:scale-110 duration-300"><a target="" href={p.link}>{p.name}</a></h2>
            <p className="cursor-default">{p.description}</p>
              <div className="m-4 container text-gray-800 text-lg md:text-xl flex flex-wrap">
              {p.badges.map((badge, badgeIndex) => (
            <div key={badgeIndex}
              className="flex rounded-full items-center bg-teal-100 cursor-default hover:bg-teal-900 hover:text-emerald-500 duration-300 px-4 py-2 mt-4 mr-2">
            <h1 className={`w-4 h-4 sm:w-6 sm:h-6 ${badgeColors[badge]} rounded-full mr-2`}> </h1>
            {badge}
          </div>
        ))}
              </div>
            </div>
        </div>
      ));

      const featured = featuredBadges.map((b) => (
        <div className="flex rounded-full items-center bg-teal-100 cursor-default hover:bg-teal-900 hover:text-emerald-500 duration-300 px-4 py-2 mt-4 mr-2">
          <h1 className={`w-4 h-4 sm:w-6 sm:h-6 ${badgeColors[b]} rounded-full mr-2`}> </h1>
            {b}
        </div>
      ));

        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
            <h1 className="text-5xl font-bold mb-8 cursor-default">My Projects</h1>

            <div data-aos="fade-up" className="bg-neutral-900 hover:bg-neutral-800 p-10 rounded justify-items-center">
              
              <h2 className="cursor-default text-4xl md:text-5xl font-bold my-2 text-center hover:-translate-y-1 hover:scale-110 duration-300">
                <a target="" href="https://github.com/BustinMeksmefilgud/JumpTrackPro">JumpTrack Pro</a>
              </h2>

            
              <div className="h-48 sm:h-60 lg:h-96 md:w-5/6 md:ms-20 mt-2 carousel carousel-vertical rounded-box">
                <div className="carousel-item scale-90 sm:scale-75">
                  <img src="./assets/img/JumpDash.png" alt="Dashboard"/>
                </div> 
                <div className="carousel-item scale-90 sm:scale-75">
                  <img src="./assets/img/JumpArchive.png" alt="Request/History"/>
                </div> 
                <div className="carousel-item scale-90 sm:scale-75">
                  <img src="./assets/img/JumpStore.png"  alt="Store"/>
                </div> 
                <div className="carousel-item scale-90 sm:scale-75">
                  <img src="./assets/img/JumpWare.png"  alt="Warehouse"/>
                </div> 
              </div>
             
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-1">
                  <h3 className="my-6">Description:</h3>
                  <p className="cursor-default text-center text-lg">An inventory management system that shows warehouse stock and allows managers to order stock
                    for their stores and make sales. Lists products, employees, and stores that have the most sales. Created using React
                    and Spring.</p>
                </div>

                <div className="col-span-1">
                  <h3 className="mt-6">Features:</h3>
                  <ul className="text-lg list-disc ps-0 sm:ps-4">
                    <li>3 User Types (Admin, Manager, Employee)</li>
                    <li>View of the warehouse products</li>
                    <li>Employees and Managers can sell items</li>
                    <li>Managers can order items for their store</li>
                    <li>Admin can accept or deny orders</li>
                    <li>Dasboard that shows data regarding employees, products, and stores with the most sales and total revenue</li>
                    <li>Every transaction saved in the database</li>
                  </ul>
                </div>
              </div>

              <div className="m-4 container text-gray-800 text-lg md:text-xl flex flex-wrap col-span-2">
                  {featured}
                </div>
            </div>
             
          

            <h3 className="mb-4 mt-6">Other Projects</h3>

            <div className="text-base sm:text-lg grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
      
            {projectList}
                       
            </div>
               <Link to="/Contact">
                      <div class='group mt-10 flex'>
                        <p> Go to Contact Me </p>
                        <p class='ms-5 group-hover:animate-bounce-x'>→</p>
                      </div>
                    </Link>
          </div>
        );
      }
    }

export default Project