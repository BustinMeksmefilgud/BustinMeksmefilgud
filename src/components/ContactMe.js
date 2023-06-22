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
                    <div class="flex items-center mb-2">
                        <svg class="w-6 h-6 mr-2 text-emerald-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                        <span class="text-emerald-200">13 Anika Homes, Buhisan Street, Buhisan, Cebu City</span>
                    </div>
                    <div class="flex items-center mb-2">
                        <svg class="w-6 h-6 mr-2 text-emerald-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                        </svg>
                        <span class="text-emerald-200">escarro@sebastian.com</span>
                    </div>
                    <div class="flex items-center mb-2">
                        <svg class="w-6 h-6 mr-2 text-emerald-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="5" r="3"></circle>
                        <path d="M19 14c0 4.418-4.029 8-9 8s-9-3.582-9-8"></path>
                        <path d="M12 5c2.76 0 5 2.686 5 6 0 2.25-1.613 4.439-5 7.282-3.387-2.843-5-5.032-5-7.282 0-3.314 2.24-6 5-6z"></path>
                        </svg>
                        <span class="text-emerald-200">+63 935-235-9240</span>
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