import React from 'react'
import Logo from "../images/logo.png"
function navbar() {
    return (
        <div>
        <nav className="flex fixed w-screen items-center justify-between flex-wrap bg-white p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="w-48 md:56 lg:ml-12">
                <img src={Logo} />
                </span>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-black hover:border-black">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                
                </div>
                <div>
                <a href="" className="block mt-4 hov lg:inline-block  border-red lg:mt-0 text-black hover:text-green-200 mr-12">
                   Main/Home
                </a>
                <a href="" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-12">
                    Home
                </a>
                <a href="" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-48">
                    About
                </a>
                </div>
            </div>
        </nav>
        </div>
    )
}

export default navbar
