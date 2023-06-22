import React, { Component } from 'react';
import TypewriterEffect from './TypewriterEffect';

class Home extends Component{
    
    
    render() {
        return (
            <div class="flex justify-center items-center mt-44">
                <div class="container">
                    <h1 class="text-7xl leading-normal">
                        Hey everyone, This is Sebastian Seth Escarro, and welcome to my domain
                    </h1> <br />
                    <TypewriterEffect />
                    <div class="mt-20">
                        <button class="me-8 bg-transparent hover:bg-emerald-300 text-emerald-300 font-semibold hover:text-teal-800 py-2 px-4 border border-emerald-300 hover:border-transparent rounded">
                            <a href="https://www.youtube.com/watch?v=0tdyU_gW6WE">Bustin</a>
                        </button>
                        <button class="me-8 bg-transparent hover:bg-emerald-300 text-emerald-300 font-semibold hover:text-teal-800 py-2 px-4 border border-emerald-300 hover:border-transparent rounded">
                            <a href="https://www.youtube.com/watch?v=0tdyU_gW6WE">Bustin</a>
                        </button>
                    </div>
                </div>
            </div>
       )
      
    }

}

export default Home