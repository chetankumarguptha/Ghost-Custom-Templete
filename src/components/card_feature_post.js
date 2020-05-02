import React, {useState, useEffect} from  'react';
import {  makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';



import parse from 'html-react-parser';

const useStyles = makeStyles(theme => ({
  root: {
    // background: '#f9f9f9',
    // height: '50vh',
    // margin: '5em'
  },
  imge:{
    height:'20em',
    width: '100%',
    zIndex: '100',
    padding:"10px",
    borderRadius:"25px"
  },
  bg:{
    
  },
}));

export default function CardFeaturePost(props) {
  const classes = useStyles();
  const history = useHistory();
  const handleExcerptClick = (v) => {

   history.push(`/${v.slug}`, {postData: v})
 }

 return(
   <div className="" >
      <div className="container cursor-pointer px-4 md:px-0 max-w-6xl mx-auto p-10 md:p-4 lg:p-10 -mt-12">
        <img className={classes.imge} src={props.v.feature_image}  onClick={()=>handleExcerptClick(props.v)} />
        <div className="px-12 py-8 z-50 lg:-mt-64 md:-mt-64 -pt-64 lg:text-left" onClick={()=>handleExcerptClick(props.v)}>
            <h2 className="mb-2 font-black lg:text-white md:text-white text-black md:text-black">{props.v.title}</h2>
            <p className="mb-4 lg:text-white  md:text-white text-black text-sm">
              {parse(props.v.excerpt)}
            </p>
            <button class="bg-transparent hover:border-white md:hover:border-white text-gray-800 font-semibold rounded-full hover:text-white lg:mt-4 
              py-2 px-4 border border-gray-800 hover:border-transparent rounded" onClick={()=>handleExcerptClick(props.v)}>
              Read More...
            </button>        
          </div>
      </div>
   </div>
 )

}
