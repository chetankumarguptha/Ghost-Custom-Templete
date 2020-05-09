import React from 'react'
import { useHistory, useRouteMatch, useLocation } from 'react-router';

import Logo from "../images/logo.png"





export default function navbar(props) {
    
    // const history = useHistory();

    // const handleBack = () => {
    //     history.goBack()
    //   }


    return (
        <div className="border-8 border-b-8 border-blue-700 z-10 ">
            <div className="  top-0 bg-gray-100  fixed w-screen z-50">
                
                    <div className="container flex flex-row sm:flex-row  border-8 justify-between items-center mx-auto py-8 px-8">
                    <div className="flex  cursor-pointer">   
                        <span className="w-48 md:56 lg:ml-8" >
                            <img src={Logo} />
                        </span>
                    </div>
                    <ul class="flex ">
                        <li class="mr-6">
                            <div class="text-black hover:text-blue-800 cursor-pointer" >Home</div>
                        </li>
                    </ul>
                    </div>
                
            </div>
        </div>
    )
}






