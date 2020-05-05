import React from 'react';

import Logo from "../images/logo.png";





export default function navbar() {

    return (
        <div>
            <div className="  bg-white fixed w-screen z-50">                    
                <div className="container flex flex-row sm:flex-row justify-between items-center mx-auto py-8 px-8">
                    <div className="flex items-left text-2xl text-center cursor-pointer">   
                        <span className="w-40 lg:ml-8">
                            <img src={Logo}/>
                        </span>
                    </div>
                    <ul class="flex ">
                        <li class="mr-6">
                            <div class="text-black hover:text-blue-800 cursor-pointer ml-8" >Main/Home</div>
                        </li>
                        <li class="mr-6 ">
                            
                        </li>
                    </ul>
                </div>                
            </div>
        </div>
    )
}




// <div class="text-black hover:text-blue-800 cursor-pointer" >Home</div>