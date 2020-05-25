import React, {useState, useEffect} from  'react';
import {  makeStyles } from '@material-ui/core/styles';
import { useHistory, useRouteMatch, useLocation } from 'react-router';
import {Helmet} from "react-helmet";
import Footer from "./footer"
import Navbar from "./navpost"
import "../components/styles/post.css"

const useStyles = makeStyles(theme => ({
  root: {
    height: '800px',
    margin: '1em',
    opacity:'0.9',
    cursor: 'pointer',
    borderRadius: 20,
    backgroundSize: 'cover',
    [theme.breakpoints.down('sm')]: {
      height: '400px',
    },
    [theme.breakpoints.up('md')]: {
      height: '600px',    },

    [theme.breakpoints.up('lg')]: {
      height: '800px',
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
            <meta name="title" content={postInfo.title} />
            <meta property="og:title" content="title" />
            <meta name="theme-color" content="#000000" />
            <meta name="description" content={postInfo.excerpt}   />   
            <meta property="og:type" content="article" />
          
          </Helmet>
          <Navbar />
            <div className="w-full  h-screen mt-40 lg:mt-32 ">
          
              <div className={classes.root} style={{backgroundImage: `url(${postInfo.feature_image})` }} ></div>

              <div className="font-bold text-xl mb-2 text-center text-6xl	lg:mt-4 md:mt-4 md:leading-9">{postInfo.title}</div>
                <div className="container mx-auto bg-white rounded-lg lg:z-50 lg:mb-24 ">
                  <div class="w-10/12 mx:auto p-10 leading-4  items-center " />
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
  
