import React, {useState, useEffect} from  'react';
import {  makeStyles } from '@material-ui/core/styles';
import { useHistory, useRouteMatch, useLocation } from 'react-router';

import Footer from "./footer"
import Navbar from "./navpost"
import "../components/styles/post.css"

const useStyles = makeStyles(theme => ({
  root: {
    height: '60vh',
    margin: '3em',
    opacity:'0.9',
    cursor: 'pointer',
    borderRadius: 20,
    resizeMode: 'cover'



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
          <Navbar />
            <div className="w-full  h-screen mt-40 lg:mt-32 ">
          
              <div className={classes.root} style={{backgroundImage: `url(${postInfo.feature_image})` }} onClick={handleBack}></div>

              <div className="font-bold text-xl mb-2 text-center text-6xl	 md:leading-9">{postInfo.title}</div>
                <div className="container mx-auto bg-white rounded-lg lg:z-50 lg:mb-24 ">
                  <div class="w-10/12 mx:auto p-10 leading-4 items-center " />
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
  
