import React, {useState, useEffect} from  'react';
import {  makeStyles } from '@material-ui/core/styles';
import { useHistory, useRouteMatch, useLocation } from 'react-router';

// import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
// import CircularProgress from '@material-ui/core/CircularProgress';

// import parse from 'html-react-parser';
import bgimage from '../images/images.jpeg'
// import { width } from '@material-ui/system';
import Footer from "./footer"
import Navbar from "./navpost"

const useStyles = makeStyles(theme => ({
  root: {
    // background: '#f9f9f9',
    height: '50vh',
    margin: '3em',
    opacity:'0.9',
    repeat: 'no-repeat',
    // top:'2em',
    cursor: 'pointer',
    borderRadius: 20,


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

    return(  <div className="w-full  h-screen ">
          <Navbar className="" />
    
      <div className={classes.root} style={{backgroundImage: `url(${postInfo.feature_image})` }} onClick={handleBack}></div>

      <div className="font-bold text-xl mb-2 text-center text-6xl	">{postInfo.title}</div>


      <div class="text-gray-900 leading-none lg:m-24 text-center object-none object-center lg:items-center lg:p-24 lg:px-64 lg:ml-48 md:mb-32 ld:justify-center leading-snug"
      dangerouslySetInnerHTML={{ __html: postInfo.html }} />

     
      <Footer />
      </div>
      
      
      )
  }
  // <Button color="primary" onClick={handleBack}> Back </Button>

  // function createMarkup() { return {__html: 'First &middot; Second'}; };
  // <div dangerouslySetInnerHTML={createMarkup()} />
