import React from 'react'
import { useHistory } from 'react-router';

import Logo from "../images/logo.png"





export default function navbar() {
    
    // const history = useHistory();

    // const handleBack = () => {
    //     history.goBack()
    //   }


    return (
        <div>
            <div className="  top-0 bg-gray-100 fixed w-screen z-50">
                
                    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-8 px-8">
                    <div className="flex  cursor-pointer">   
                        <span className="w-48 md:56 lg:ml-8">
                            <img src={Logo}  />
                        </span>
                    </div>
                    <ul class="flex ">
                        <li class="mr-6">
                            <a class="text-black hover:text-blue-800 cursor-pointer" >Home</a>
                        </li>
                    </ul>
                    </div>
                
            </div>
        </div>
    )
}






