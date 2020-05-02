import React, {useState, useEffect} from  'react';
import {useSelector, useDispatch} from 'react-redux';
import {  makeStyles } from '@material-ui/core/styles';
import {Helmet} from "react-helmet";

import { useHistory } from 'react-router';
import TimeAgo from 'react-timeago';
import parse from 'html-react-parser';
import { BsFillPersonFill } from "react-icons/bs";


const useStyles = makeStyles(theme => ({
  root: {
    // background: '#f9f9f9',
    // height: '50vh',
    // margin: '5em'
  },
  imge:{
    height:'33em',
    width: '100%',
    background: '#0a5bff',
    zIndex: '100',
  },

}));

export default function CardPost(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

 const handleExcerptClick = (v) => {

   history.push(`/${v.slug}`, {postData: v})
 }

 return(
   <div>
      <Helmet>
      <meta charSet="utf-8" />
      <link rel="canonical" href={ parse (props.v.url )}   />
      <meta name="description" content="A React.js application" />

      </Helmet>      
      <div className="container  cursor-pointer px-4 md:px-0 max-w-6xl mx-auto p-10 lg:-mt-8">
        <div className="w-auto  rounded  sm:flex" onClick={()=>handleExcerptClick(props.v)}>
          <div className="px-6 py-4 md:w-2/3">
            <h2 className="mb-2 font-black">{props.v.title}</h2>
            <p className="mb-4 text-grey-dark text-sm">
            {parse(props.v.excerpt)}
            </p>
            <div className="flex-none mt-auto  lg:mt-16  lg:p-6 mb-8 mt-4">
              <div className="flex items-center justify-between">
              <button
                  className="bg-white bg-gray-100 shadow-sm lg:-ml-4 font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                <BsFillPersonFill className="align-middle w-8 h-8 lg:ml-1 ml-1" />
             </button>
              <div class="flex items-center text-sm justify-between leading-tight lg:-ml-40 md:-ml-4 md:p-4">
                  <h1 class="text-lg">
                      <a class="no-underline hover:underline text-black text-gray-900 font-bold text-lg leading-none lg:ml-12" >Ramesh Seelamsetty</a>
                  </h1>
                </div>
                <p className="text-gray-600 text-xs md:text-sm mr-4 ">
                <TimeAgo date={parse (props.v.published_at )}>{({ value }) => <h2>{value}</h2>}</TimeAgo>
                </p>
              </div>
              
            </div>
          </div>
          <div className=" sm:h-auto sm:w-64 md:w-2/4 flex-none bg-cover  hover:shadow-2xl rounded-t md:mr-4 sm:mr-4 
          rounded-lg   sm:rounded-l ">
          <img src={props.v.feature_image} className="h-full w-full rounded-lg "  onClick={()=>handleExcerptClick(props.v)} />
          </div>
        </div>
      </div>
   </div>
 )

}


