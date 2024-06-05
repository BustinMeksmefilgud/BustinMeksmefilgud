import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

class AboutMe extends Component {
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
          name: 'MySQL Database Management',
          imageLink: './assets/img/MySql.png',
          description: 'I have done work with databases using MySql Workbench.',
        },
        {
          name: 'React JS',
          imageLink: './assets/img/React.png',
          description: 'I have used React to create front-end designs while using REST API for connecting with the back-end and I am familiar with Bootstrap and Tailwindcss.',
        },
        {
          name: 'Testing and Debugging',
          imageLink: './assets/img/Debugging.png',
          description: 'I have experience with testing and debugging projects using Postman.',
        },
        {
          name: 'Data Analysis',
          imageLink: './assets/img/PowerBi.png',
          description: "I have used Power Bi for making easy to read dashboards for data analysis"
        },
        {
          name: 'React Native',
          imageLink: './assets/img/React.png',
          description: "I am using react native for developing an app for Android and IOS, utilizing useStates, useEffects and working with estylesheets"
        },
        {
          name: 'Firestore',
          imageLink: './assets/img/Firestore.png',
          description: "I am using firestore for saving information for the current project from my current company"
        },
        {
          name: 'Google AI Studio',
          imageLink: './assets/img/Gemini.png',
          description: "I am familiar with using google ai studio for generating prompts using AI"
        }
      ],


      wip: [
        {
          name: 'Python Programming',
          imageLink: './assets/img/Python.png',
          description: "I'm currently practicing the basics of Python Programming."
        },
       

      ]
    }
}
  render() {
    const { skills } = this.state;
    const skillList = skills.map((s) => (
      <div className="p-3 tooltip flex rounded hover:bg-teal-800" data-tip={s.description}>
        <img src={s.imageLink} alt={s.name} className="w-20 h-20 object-contain" />
        <p className="my-auto">{s.name}</p>
      </div>
    ));

    const { wip } = this.state;
    const wipList = wip.map((w) => (
      <div className="p-3 tooltip flex rounded hover:bg-teal-800" data-tip={w.description}>
      <img src={w.imageLink} alt={w.name} className="w-20 h-20 object-contain" />
      <p className="my-auto">{w.name}</p>
    </div>
    ));

    return (
      <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <h1 className="text-5xl font-bold text-emerald-300 mb-4">About Me</h1>
        <div className="flex flex-col sm:flex-row cursor-default">
          <div data-aos="fade-right" className="mb-6 sm:mb-0 sm:w-1/2">
            <img src="./assets/img/me.png" alt="Profile" className="h-5/6 mx-auto rounded-full" />
          </div>
          <div data-aos="fade-left" className="sm:w-1/2 cursor-default text-center">
           
            <h2 className="font-bold text-emerald-300 mt-6">Hello, I'm Sebastian Seth</h2>
            <p className="text-emerald-400 text-lg sm:text-xl leading-relaxed mb-4">
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
            <p className="text-lg sm:text-xl text-emerald-400 leading-relaxed mb-4 pb-9">
            I am currently pursuing a Computer Studies course at the esteemed University of Cebu - Banilad, equipping me with a strong foundation in computer science principles,
            programming, software development, algorithms, and database management. Additionally, I am enrolled at Lithan Edculaas in Singapore, actively pursuing a software engineering
            program to enhance my expertise. This dual enrollment combines theory and practical experience, enabling me to develop innovative software solutions.
            </p>
        </div>

        <div  class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 font-normal cursor-default">
          <h1 class="text-5xl font-bold text-emerald-300 mb-4">My Skills</h1>
          <h3 className="ms-44 sm:ms-0 mt-6 mb-5 tooltip text-green-500" data-tip="These are the skills I used to create my projects">Learned</h3>
          <div class="text-xl grid mx-auto grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {skillList}
        
          </div>
          <h3 className="ms-36 sm:ms-0 mt-6 mb-5 tooltip text-yellow-400" data-tip="These are skills I'm currently learning without any projects yet">Work in Progress</h3>

          <div class="text-xl grid mx-auto grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {wipList}
        
          </div>

        </div>

            
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <h1 className="text-5xl font-bold mb-8">Work Experience</h1>

          <h3>Byrocs (October 2023 - November 2023)</h3>
          <ul className="text-lg text-emerald-400 list-disc ps-12">
            <li className="text-lg sm:text-xl text-emerald-400">Conducted a 1-month work trial at Byrocs, focusing on content creation and website design.</li>
            <li className="text-lg sm:text-xl text-emerald-400">Created content for their social media pages</li>
          </ul>

          <h3 className="mt-12">Kura Kura (March 2024 - Present)</h3>
          <ul className="text-lg text-emerald-400 list-disc ps-12">
            <li className="text-lg sm:text-xl text-emerald-400"> Engaged as a Full-Stack Developer at Kura Kura, Developed new features for the project</li>
            <li className="text-lg sm:text-xl text-emerald-400">Managed various AI factors such as context and token handling for optimal responses</li>
          </ul>

        </div>
      </>

    );
  }
}

export default AboutMe;
