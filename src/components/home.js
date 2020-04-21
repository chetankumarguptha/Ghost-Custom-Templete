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


import CardPost from './card_post';
import CardFeaturePost from './card_feature_post';

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

export default function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const allPosts = useSelector(state => state.allPosts.allPosts)
  // console.log(allPosts);

  useEffect(() => {
    handleLoad()
  }, [ ])




  const handleLoad = () => {
    dispatch(fetchAllPostsFromGhostAPIRequest())
  }

 const handleExcerptClick = (v) => {

   history.push(`/${v.slug}`, {postData: v})
 }


 const handlePostTypeFeature = (post) => {
  if(post.featured === true){
   return  <CardFeaturePost v={post}/>
  }
 }

 const handlePostType = (post) => {
   console.log(post.featured);
  if(post.featured === false){
   return  <CardPost v={post}/>
  }
 }

  if(allPosts.posts){
    return(
  <div className="w-full  h-screen  bg-gray-200 font-sans leading-normal tracking-normal ">
    <div className={classes.imge}>
			<div class="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal">
					<p class="text-white font-extrabold text-6xl md:text-5xl">
						AdvisorApp
					</p>
					<p class="text-xl md:text-2xl text-gray-500"> </p>
			</div>
		</div>

      <div  className=" bg-gray-200 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t p-10 mt-8  ">
          <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-56">

          </div>
          {allPosts.posts.map((v,i) =>
            <div key={i}>
              {handlePostTypeFeature(v)}
            </div>
          )}
          {allPosts.posts.map((v,i) =>
            <div key={i}>
              {handlePostType(v)}
            </div>
          )}
          <div className="container font-sans bg-teal-100 rounded mt-8 p-4 md:p-24 text-center  px-4 md:px-0 max-w-6xl mx-auto mt-32"  >
          <h2 class="font-bold break-normal text-2xl md:text-4xl">Subscribe</h2>
          <h3 class="font-bold break-normal font-normal text-gray-600 text-base md:text-xl">Get the latest posts delivered right to your inbox</h3>
          <div class="w-full text-center pt-4">
            <form action="#">
              <div class="max-w-xl mx-auto p-1 pr-0 flex flex-wrap items-center">
                <input type="email" placeholder="youremail@example.com" class="flex-1 appearance-none rounded shadow p-3 text-gray-600 mr-2 focus:outline-none" />
                <button type="submit" class="flex-1 mt-4 md:mt-0 block md:inline-block appearance-none bg-teal-500 text-white text-base font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-teal-400">Subscribe</button>
              </div>
            </form>
          </div>
        </div>

      </div>
      </div>)
  } else {
    return (
    <div className="flex justify-center m-12"> <CircularProgress /> </div>
    );
  }

}
