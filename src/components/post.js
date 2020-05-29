import React, {useState, useEffect} from  'react';
import {  makeStyles } from '@material-ui/core/styles';
import { useHistory, useRouteMatch, useLocation } from 'react-router';
import {Helmet} from "react-helmet";
import Footer from "./footer"
import Navbar from "./navpost"
import "../components/styles/post.css"

const useStyles = makeStyles(theme => ({
  root: {
    height: '500px',
    margin: '1em',
    opacity:'0.9',
    borderRadius: 20,
    backgroundSize: 'cover',
    [theme.breakpoints.down('sm')]: {
      height: '400px',
      // marginBottom:"3em"

    },
    [theme.breakpoints.up('md')]: {
      height: '600px',
      // marginBottom:"5em"
    },

    [theme.breakpoints.up('lg')]: {
      height: '600px',
      // marginBottom:"3em",
      marginTop:"3.5em"

    },

  },

}));

export default function Post(props) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();


  // useEffect(() => {
  // }, [])

  const handleBack = () => {
    history.goBack()
  }
  
  let postInfo = location.state.postData
  console.log(postInfo);

    return( 
      <div>
          <Helmet>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="title" content={postInfo.meta_title} />
            <meta property="og:title" content={postInfo.meta_title} />
            <meta name="theme-color" content="#000000" />
            <meta name="description" content={postInfo.meta_description} />  
            <meta name="og_image" content={postInfo.og_image}   />   
 
            <meta property="og:type" content="article" />
          
          </Helmet>
          <Navbar />
            <div className="w-full  h-screen mt-40 lg:mt-32 ">
            <div className="font-bold text-xl mb-2 text-center mx-auto lg:text-6xl text-3xl  md:text-5xl 	lg:mt-32 md:mt-4 md:leading-9">{postInfo.title}</div>
            <div className=" lg:w-10/12 mx-auto lg:text-center text-left p-4 lg:text-xl text-xl lg:mt-12 md:mt-8 md:mb-8 leading-7 text-black text-sm">
              {postInfo.meta_description}
            </div>
              <div className="lg:w-10/12 object-none object-center mx-auto">
                  <div className={classes.root} style={{backgroundImage: `url(${postInfo.feature_image})` }} ></div>
              </div>
                <div className="container mx-auto bg-white rounded-lg lg:z-50 lg:mb-24 ">
                  <div class="w-10/12 mx:auto p-4 leading-4  items-center " />
                    <section
                        className="content-body load-external-scripts"
                        dangerouslySetInnerHTML={{ __html: postInfo.html }}
                    />
                </div>
              <Footer />
            </div>    

      </div>
      
      
      )
  }

  // onClick={handleBack}
  
