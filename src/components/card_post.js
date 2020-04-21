import React, {useState, useEffect} from  'react';
import {useSelector, useDispatch} from 'react-redux';
import {  makeStyles } from '@material-ui/core/styles';
import {Helmet} from "react-helmet";

import { useHistory } from 'react-router';
import TimeAgo from 'react-timeago';


// import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import parse from 'html-react-parser';
import img from '../images/bg-1.jpg'
import blog from '../images/card-top.jpg'
// import { Markup } from 'interweave';
import Footer from '../components/footer'

import {fetchAllPostsFromGhostAPIRequest} from '../actions/all_posts';
import { width } from '@material-ui/system';

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
   <div>
       <Helmet>
       <meta charSet="utf-8" />
       <link rel="canonical" href={ parse (props.v.url )}   />
       <meta name="description" content="A React.js application" />

       </Helmet>
       <div class="container px-4 md:px-0 max-w-6xl mx-auto p-10 -mt-12">



         <div className="w-auto  rounded  sm:flex">

             <div class="px-6 py-4 md:w-2/3">
             <h2 class="mb-2 font-black">{props.v.title}</h2>
             <p class="mb-4 text-grey-dark text-sm">
             {parse(props.v.excerpt)}
             </p>
               <div class="flex-none mt-auto bg-white rounded-b lg:mt-12 rounded-t-none overflow-hidden shadow-lg p-6">
               <div class="flex items-center justify-between">
                 <img class="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
                 <p class="text-gray-600 text-xs md:text-sm">
                 <TimeAgo date={parse (props.v.published_at )}>{({ value }) => <h2>{value}</h2>}</TimeAgo>

                 </p>
               </div>
             </div>

           </div>
           <div class="h-48 sm:h-auto sm:w-64 md:w-2/4 flex-none bg-cover bg-center rounded rounded-t sm:rounded sm:rounded-l text-center overflow-hidden">
           <img src={props.v.feature_image} class="h-full w-full shadow"  onClick={(v) => {handleExcerptClick(v)}}  />
           </div>
         </div>


     </div>
   </div>
   </div>
 )

}
