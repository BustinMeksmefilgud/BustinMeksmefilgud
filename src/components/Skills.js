import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Skill extends Component{
  componentDidMount() {
    AOS.init();
  }
  constructor() {
    super();
    this.state = {
      skills: [
        {
          name: 'Web Development',
          imageLink: './assets/img/WebDev.png',
          description: 'I am familiar with how to make websites and I am knowledgeable in using HTML, CSS, and Javascript.',
        },
        {
          name: 'Java Programming',
          imageLink: './assets/img/Java.png',
          description: 'I have experience working using Java as the main language and I have an understanding of OOP concepts.',
        },
        {
          name: 'Spring Framework',
          imageLink: './assets/img/Spring.png',
          description: 'I worked with Spring Tool Suite and Eclipse IDE in developing using Spring Boot with Spring Security for encryption and authentication.',
        },
        {
          name: 'Database Management',
          imageLink: './assets/img/MySql.png',
          description: 'I have done work with databases using MySql Workbench.',
        },
        {
          name: 'React Development',
          imageLink: './assets/img/React.png',
          description: 'I have used React to create front-end designs while using REST API for connecting with the back-end and I am familiar with Bootstrap and Tailwindcss.',
        },
        {
          name: 'Testing and Debugging',
          imageLink: './assets/img/Debugging.png',
          description: 'I have experience with testing and debugging projects using Junit.',
        }
      ]
    }
}
  render() {
    const { skills } = this.state;
    const skillList = skills.map((s) => (
  
      <div className="tooltip flex" data-tip={s.description}>
        <img src={s.imageLink} alt={s.name} className="w-20 h-20 object-contain" />
        <p className="my-auto">{s.name}</p>
      </div>

    ));
    return (
        <>
        <div  class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 font-normal cursor-default">
          <h1 class="text-5xl font-bold text-emerald-300 mb-4">My Skills</h1>
          <div class="text-xl grid mx-auto grid-cols-1 sm:grid-cols-4 md:grid-cols-6 gap-6">
           {skillList}
          </div>


        </div>

            
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <h1 className="text-5xl font-bold mb-8">Work Experience</h1>

          <h3>Byrocs</h3>
          <ul className="text-lg text-emerald-400 list-disc ps-12">
            <li className="text-lg text-emerald-400">1 month work trial</li>
            <li className="text-lg text-emerald-400">Content and Design for Website</li>
          </ul>

        </div>
      </>
       )
      
    }

}

export default Skill