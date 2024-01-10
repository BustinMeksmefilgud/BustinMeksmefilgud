import React, { Component } from 'react';
import TypewriterEffect from './TypewriterEffect';

class Home extends Component{
    
    
    render() {
        return (
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
                <div class="container">
                    <h1 class="cursor-default text-5xl lg:text-7xl leading-normal">
                        Hey everyone, This is Sebastian Seth Escarro, and welcome to my portfolio
                    </h1> <br />
                    <TypewriterEffect />
                    <div class="mt-20">
                        <button class="me-8 mt-4 bg-transparent hover:bg-emerald-300 text-emerald-300 font-semibold hover:text-teal-800 py-2 px-4 border border-emerald-300 hover:border-transparent rounded">
                            <a target="" href="https://drive.google.com/file/d/1lzvRylansTwPfsNati20QCMVdFfg60y6/view?usp=sharing">Resume</a>
                        </button>
                        <button class="me-8 mt-4 bg-transparent hover:bg-emerald-300 text-emerald-300 font-semibold hover:text-teal-800 py-2 px-4 border border-emerald-300 hover:border-transparent rounded">
                            <a target="" href="https://youtu.be/47VIfABvEm0">Introduction Video</a>
                        </button>
                    </div>
                </div>
            </div>
       )
      
    }

}

export default Home