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
                <img src={s.imageSrc} alt={s.name} className="scale-75 md:scale-100 h-32 w-32 mx-auto md:my-10 group-hover/ic:mb-1" />
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
                        <p className="text-emerald-400 mb-10 animate-pulse">
                            Want to send me a banana? You can't but I would like to hear from you anyway.
                        </p>
                    
                    <div data-aos="fade-right" className="text-lg sm:text-2xl">
                        <div className="flex items-center mb-2 pb-3">
                            <svg className="w-10 h-10 text-emerald-500 mr-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9"/>
                            </svg>
                            <span className="text-emerald-200">13 Anika Homes, Buhisan Street, Buhisan, Cebu City</span>
                        </div>
                        <div className="flex items-center mb-2 pb-3">
                            <svg className="w-5 h-5 sm:w-9 sm:h-9 text-emerald-500 mr-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 2-8.4 7.05a1 1 0 0 1-1.2 0L1 2m18 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1m18 0v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2"/>
                            </svg>
                            <span className="text-emerald-200">escarro.sebastian@gmail.com</span>
                        </div>
                        <div className="flex items-center mb-2 pb-3">
                            <svg className="w-6 h-6 sm:w-10 sm:h-10 text-emerald-500 mr-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 14h12M1 4h12M6.5 16.5h1M2 1h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"/>
                            </svg>

                            <span className="text-emerald-200">(0917) 104 9083</span>
                        </div>
                    </div>
                    </div>

                </div>
                <p className="text-emerald-300 mt-10">
                            For inquiries, please reach me through my socials first.
                        </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-7">
                        {socialList}
                        </div>

            
              
            </div>

       )
      
    }

}

export default ContactMe