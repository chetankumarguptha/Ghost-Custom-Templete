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

export default function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  // const date = Date(document.data.date);
  // const formattedDate = Intl.DateTimeFormat('en-US',{
  //   year: 'numeric',
  //   month: 'short',
  //   day: '2-digit' }).format();



  
    


  const allPosts = useSelector(state => state.allPosts.allPosts)
  console.log(allPosts);

  useEffect(() => {
    handleLoad()
  }, [ ])


  

  const handleLoad = () => {
    dispatch(fetchAllPostsFromGhostAPIRequest())
  }

 const handleExcerptClick = (v) => {

   history.push(`/${v.slug}`, {postData: v})
 }

  if(allPosts.posts){
    return(  <div className="w-full  h-screen  bg-gray-200 font-sans leading-normal tracking-normal ">
    <div className={classes.imge}>
			<div class="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal">
					<p class="text-white font-extrabold text-6xl md:text-5xl">
						Advisord's App
					</p>
					<p class="text-xl md:text-2xl text-gray-500"> </p>
			</div>
		</div>

      <div  className=" bg-gray-200 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t p-10 mt-8  ">
          <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-56">
           
          </div>
          {allPosts.posts.map((v,i) =>
            <div key={i}>
                <Helmet>
                <meta charSet="utf-8" />
                <link rel="canonical" href={ parse (v.url )}   />
                <meta name="description" content="A React.js application" />
          
                </Helmet>
                <div class="container px-4 md:px-0 max-w-6xl mx-auto p-10 -mt-12">



                  <div class="w-auto  rounded  sm:flex">                
                    
                      <div class="px-6 py-4 md:w-2/3">
                      <h2 class="mb-2 font-black">Hello Tailwind!</h2>
                      <p class="mb-4 text-grey-dark text-sm">
                      {parse(v.excerpt)}
                      </p>
                        <div class="flex-none mt-auto bg-white rounded-b lg:mt-12 rounded-t-none overflow-hidden shadow-lg p-6">
                        <div class="flex items-center justify-between">
                          <img class="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
                          <p class="text-gray-600 text-xs md:text-sm">
                          <TimeAgo date={parse (v.published_at )}>{({ value }) => <h2>{value}</h2>}</TimeAgo>

                          </p>
                        </div>
                      </div>                  
                        
                    </div>
                    <div class="h-48 sm:h-auto sm:w-64 md:w-2/4 flex-none bg-cover bg-center rounded rounded-t sm:rounded sm:rounded-l text-center overflow-hidden">
                    <img src={v.feature_image} class="h-full w-full shadow"  onClick={() => {handleExcerptClick(v)}}  />
                    </div>
                  </div>            


              </div>
            </div>
          )}
          <div class="container font-sans bg-teal-100 rounded mt-8 p-4 md:p-24 text-center  px-4 md:px-0 max-w-6xl mx-auto mt-32"  >
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



