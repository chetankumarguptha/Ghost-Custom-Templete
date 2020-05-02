import React, {useState, useEffect} from  'react';
import {useSelector, useDispatch} from 'react-redux';
import {  makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import CircularProgress from '@material-ui/core/CircularProgress';
import Footer from '../components/footer'
import {fetchAllPostsFromGhostAPIRequest} from '../actions/all_posts';
import CardPost from './card_post';
import CardFeaturePost from './card_feature_post';
import Subscribe from './subscribe'
import Header from './header'
import Navbar from "./navbar"
const useStyles = makeStyles(theme => ({
  root: {
    background: '#f9f9f9',
    height: 'auto',
    margin: '5em',
    width:'auto'
  },
  imge:{
    height:'30em',
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
      <div>
      <Navbar />
        <div className="w-full  h-screen  leading-normal tracking-normal ">
          <Header />
            <div className="container mx-auto bg-gray-100 rounded-lg lg:z-50 lg:mb-24 lg:shadow-lg  ">
              <div  className="  w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t   ">
                  <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-48  "></div>
                  {allPosts.posts.map((v,i) =>
                    <div key={i} >
                      {handlePostTypeFeature(v)}
                    </div>
                  )}
                  {allPosts.posts.map((v,i) =>
                    <div key={i} className="mt-12">
                      {handlePostType(v)}
                    </div>
                  )}
                <Subscribe />
              </div>
            </div>
          <Footer />
        </div>
      </div>
      )
  } else {
    return (
    <div className="flex justify-center m-12"> <CircularProgress /> </div>
    );
  }

}
