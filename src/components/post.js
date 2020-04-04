import React, {useState, useEffect} from  'react';
import {  makeStyles } from '@material-ui/core/styles';
import { useHistory, useRouteMatch, useLocation } from 'react-router';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import parse from 'html-react-parser';


const useStyles = makeStyles(theme => ({
  root: {
    background: '#f9f9f9',
    height: '50vh',
    margin: '5em'
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

    return(  <div className="w-full sm:bg-yellow-500 md:bg-green-500 lg:bg-blue-500 h-screen ">
     <Button color="primary" onClick={handleBack}> Back </Button>;

      <Paper elevation={1} className={classes.root}>
          {postInfo.html}

      </Paper>
      </div>)
  }
