/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useHistory, useRouteMatch, useLocation } from 'react-router';
import { Link } from "react-router-dom";

import Logo from "../images/logo.png"





export default function navbar(props) {
    
    // const history = useHistory();

    // const handleBack = () => {
    //     history.goBack()
    //   }


    return (
        <div className="border-8 border-b-8 border-blue-700 z-10 ">
            <div className="  top-0 bg-gray-100  fixed w-screen z-50">
                
                    <div className="container flex flex-row sm:flex-row  border-8 justify-between items-center mx-auto py-4 px-8">
                    <div className="flex  cursor-pointer">   
                        <span className="w-48 md:56 lg:ml-8" >
                            <Link to="/" >
                                <img src={Logo} />
                            </Link>    
                        </span>
                    </div>
                    <ul class="flex ">
                        <li class="mr-6">                            
                            <Link to="/" >
                                <div class="text-black hover:text-blue-800 cursor-pointer">Home</div>
                            </Link>
                        </li>
                    </ul>
                    </div>
                
            </div>
        </div>
    )
}






