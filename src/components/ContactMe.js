import React, { Component } from 'react';

class ContactMe extends Component{
    
    
    render() {
        return (
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
                <h1 class="text-5xl font-bold mb-4">Contact Me</h1>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <h2 class="text-2xl font-bold mb-10">Get in Touch</h2>
                        <p class="text-emerald-600 mb-10">
                            Want to send me a banana? You can't but I would like to hear from you anyway
                        </p>
                        <div class="flex items-center mb-2 pb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-house w-12 h-12 text-emerald-500 mr-6" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                                <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                            </svg>
                            <span class="text-emerald-200">13 Anika Homes, Buhisan Street, Buhisan, Cebu City</span>
                        </div>
                        <div class="flex items-center mb-2 pb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-envelope w-8 h-8 text-emerald-500 mr-6" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                            </svg>
                            <span class="text-emerald-200">escarro.sebastian@gmail.com</span>
                        </div>
                        <div class="flex items-center mb-2 pb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-phone w-8 h-8 text-emerald-500 mr-6" viewBox="0 0 16 16">
                                <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                            </svg>

                            <span class="text-emerald-200">+63 935-235-9240</span>
                        </div>


                        <div class="flex items-center mb-2 pb-3">
                            <a target="_blank" href="https://www.linkedin.com/in/sebastian-seth-escarro-197b90250/">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-linkedin w-8 h-8 text-emerald-500 mr-6" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                </svg>
                            </a>
                            <span class="text-emerald-200"><a target="_blank" href="https://www.linkedin.com/in/sebastian-seth-escarro-197b90250/">Sebastian Seth Escarro</a></span>
                        </div>
                        <div class="flex items-center mb-2 pb-3">
                            <a target="_blank" href="https://github.com/BustinMeksmefilgud">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-github w-8 h-8 text-emerald-500 mr-6" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg>
                            </a>
                            <span class="text-emerald-200"><a target="_blank" href="https://github.com/BustinMeksmefilgud">BustinMeksmefilgud</a></span>
                        </div>
                        <div class="flex items-center mb-2 pb-3">
                            <a target="_blank" href="https://www.facebook.com/sebastianseth.escarro">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-facebook w-8 h-8 text-emerald-500 mr-6" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                </svg>
                            </a>    
                            <span class="text-emerald-200"><a target="_blank" href="https://www.facebook.com/sebastianseth.escarro">Sebastian Seth Escarro</a></span>
                        </div>
                    </div>
                    <form class="bg-teal-400 rounded-lg shadow-md p-6">
                    <h2 class="text-2xl font-bold mb-4 text-gray-800">Send a Message</h2>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Name</label>
                        <input class="w-full px-3 py-2 border border-emerald-300 rounded focus:outline-none focus:border-indigo-500" id="name" type="text" placeholder="Your Name" />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
                        <input class="w-full px-3 py-2 border border-emerald-300 rounded focus:outline-none focus:border-indigo-500" id="email" type="email" placeholder="Your Email" />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="message">Message</label>
                        <textarea class="w-full px-3 py-2 border border-emerald-300 rounded focus:outline-none focus:border-indigo-500" id="message" rows="5" placeholder="Your Message"></textarea>
                    </div>
                    <button class="bg-indigo-500 text-white px-4 py-2 rounded font-bold hover:bg-indigo-700" type="submit">Send</button>
                    </form>
                </div>
            </div>

       )
      
    }

}

export default ContactMe