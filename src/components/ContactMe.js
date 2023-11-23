import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
class ContactMe extends Component{
    componentDidMount() {
        AOS.init();
      }
    constructor() {
        super();
        this.state = {
            socials: [
                {
                    name: 'Linkedin',
                    imageSrc: './assets/img/linkedin.png',
                    link: 'https://www.linkedin.com/in/sebastian-seth-escarro-197b90250/'
                },
                {
                    name: 'Facebook',
                    imageSrc: './assets/img/facbook.png',
                    link: 'https://www.facebook.com/sebastianseth.escarro'
                },
                {
                    name: 'Github',
                    imageSrc: './assets/img/gitdown.png',
                    link: 'https://github.com/BustinMeksmefilgud'
                },
                {
                    name: 'Telegram',
                    imageSrc: './assets/img/telegram.png',
                    link: 'https://t.me/Sebustin'
                }
            ]
        }
    }
    render() {
        const { socials } = this.state;
        const socialList = socials.map((s) => (
            <div data-aos="fade-up" className="group/ic w-max mx-auto">
            <a target="_blank" href={s.link}>
                <img src={s.imageSrc} alt={s.name} className="scale-75 md:scale-100 h-32 w-32 mx-auto md:my-10 group-hover/ic:mb-2" />
                <div className="md:hidden group-hover/ic:flex">
                        <p className="mx-auto">{s.name}</p>
                </div>
            </a>
            </div>
        ));
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
                <h1 className="cursor-default text-5xl font-bold mb-4">Contact Me</h1>
                <div className="cursor-default container">
                    <div>
                        <h2 className="text-2xl font-bold mb-10">Get in Touch</h2>
                        <p className="text-emerald-500 mb-10 animate-pulse">
                            Want to send me a banana? You can't but I would like to hear from you anyway
                        </p>
                    <div data-aos="fade-right">
                        <div className="flex items-center mb-2 pb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-house w-12 h-12 text-emerald-500 mr-6" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                                <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                            </svg>
                            <span className="text-emerald-200">13 Anika Homes, Buhisan Street, Buhisan, Cebu City</span>
                        </div>
                        <div className="flex items-center mb-2 pb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-envelope w-8 h-8 text-emerald-500 mr-6" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                            </svg>
                            <span className="text-emerald-200">escarro.sebastian@gmail.com</span>
                        </div>
                        <div className="flex items-center mb-2 pb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-phone w-8 h-8 text-emerald-500 mr-6" viewBox="0 0 16 16">
                                <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                            </svg>

                            <span className="text-emerald-200">(0917) 104 9083</span>
                        </div>
                    </div>
                    </div>

                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-7">
                        {socialList}
                        </div>

            
              
            </div>

       )
      
    }

}

export default ContactMe