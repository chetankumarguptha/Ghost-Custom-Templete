import React, {useState, useEffect} from  'react';
import {useSelector, useDispatch} from 'react-redux';
import {  makeStyles } from '@material-ui/core/styles';
import {Helmet} from "react-helmet";
import Avatar from '@material-ui/core/Avatar';

import { useHistory } from 'react-router';
import TimeAgo from 'react-timeago';
import parse from 'html-react-parser';
import one from "../images/1.jpg"
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    marginLeft:'-20px'
    
  },
  imge:{
    height:'400px',
    width: '100%',
    zIndex: '100',
    borderRadius:"25px",

    [theme.breakpoints.down('sm')]: {
      height: '250px',
    },
    [theme.breakpoints.up('md')]: {
      height: '300px',   
    },
    [theme.breakpoints.up('lg')]: {
      height:'400px',
    },

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
      <div className="container  cursor-pointer px-4 md:px-0 max-w-6xl mx-auto p-10  ">
        <div className="w-auto  rounded  sm:flex" onClick={()=>handleExcerptClick(props.v)}>
          <div className="px-6 py-4 md:w-2/3">
            <h2 className="mb-2 font-black">{props.v.title}</h2>
            <p className="mb-4 text-grey-dark text-sm">
            {parse(props.v.excerpt)}
            </p>
            <div className="flex-none mt-auto  lg:mt-12  p-6">
              <div className="flex items-center justify-between">
                <Avatar alt="Travis Howard" src={one} className={classes.root} />

                <div class="flex items-center text-sm justify-between leading-tight lg:-ml-40 md:-ml-4 md:p-4">
                  <h1 class="text-lg">
                      <a class="no-underline hover:underline text-black text-gray-900 font-bold text-lg leading-none lg:ml-8 md:ml-2" >Ramesh Seelamsetty</a>
                  </h1>
                </div>
                <p className="text-gray-600 text-xs md:text-sm">
                <TimeAgo date={parse (props.v.published_at )}>{({ value }) => <h2>{value}</h2>}</TimeAgo>
                </p>
              </div>
              
            </div>
          </div>
          <div className=" sm:h-auto sm:w-64 md:w-2/4 flex-none bg-cover   rounded-t md:mr-4 sm:mr-4
          rounded-lg   sm:rounded-l ">
          <img src={props.v.feature_image} className={classes.imge}   onClick={()=>handleExcerptClick(props.v)} />
          </div>
        </div>
      </div>
   </div>
 )

}


