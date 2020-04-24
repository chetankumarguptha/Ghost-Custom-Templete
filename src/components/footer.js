import React, { Component } from 'react';
import { AiOutlineGithub, AiOutlineGoogle } from "react-icons/ai";
import { FaFacebook, FaTwitter } from "react-icons/fa";



export default class footer extends Component {
    render() {
        return (
            <footer className="relative bg-gray-300 pt-8 pb-6 lg:-z-50">
            <div
              className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
              style={{ height: "80px", transform: "translateZ(0)" }}
            >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns=""
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="text-gray-300 fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <h4 className="text-3xl font-semibold">
                   Get in touch!!!
                  </h4>
                  <div className="mt-6">
                    <button
                      className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                      type="button"
                    >
                    <FaTwitter className="align-middle w-8 h-8 ml-1" />
                    </button>
                    <button
                      className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                      type="button"
                    >
                    <AiOutlineGoogle className="align-middle w-8 h-8 ml-1" />
                    </button>
                    <button
                      className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                      type="button"
                    >
                    <FaFacebook className="align-middle w-8 h-8 ml-1" />
                    </button>
                    <button
                      className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                      type="button"
                    >
                      <AiOutlineGithub className="align-middle w-8 h-8 ml-1" />
                    </button>
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="flex flex-wrap items-top mb-6">
                    <div className="w-full lg:w-4/12 px-4 ml-auto">
                      <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                        Useful Links
                      </span>
                      <ul className="list-unstyled">
                        <li>
                          <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                             href="/about">About Us
                          </a>
                        </li>   
                      </ul>
                    </div>
                    <div className="w-full lg:w-4/12 px-4">
                      <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                        Other 
                      </span>
                      <ul className="list-unstyled">
                        <li>
                          <div className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                             href="">Terms & Conditions
                          </div>
                        </li>
                        <li>
                          <div className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                             href="">Privacy Policy
                          </div>
                        </li>
                      </ul>    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        )
    }
}