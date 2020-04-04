import React, {useState, useEffect} from  'react';
import {useSelector, useDispatch} from 'react-redux';
import {  makeStyles } from '@material-ui/core/styles';

import { useHistory } from 'react-router';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import parse from 'html-react-parser';
// import { Markup } from 'interweave';


import {fetchAllPostsFromGhostAPIRequest} from '../actions/all_posts';

const useStyles = makeStyles(theme => ({
  root: {
    background: '#f9f9f9',
    height: '50vh',
    margin: '5em'
  },

}));

export default function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const allPosts = useSelector(state => state.allPosts.allPosts)
  console.log(allPosts);

  useEffect(() => {
    handleLoad()
  }, [])


  const handleLoad = () => {
    dispatch(fetchAllPostsFromGhostAPIRequest())
  }

 const handleExcerptClick = (v) => {

   history.push(`/${v.slug}`, {postData: v})
 }

  if(allPosts.posts){
    return(  <div className="w-full sm:bg-yellow-500 md:bg-green-500 lg:bg-blue-500 h-screen ">
      <Paper elevation={1} className={classes.root}>
          {allPosts.posts.map((v,i) =>
            <div key={i}>

              <div className="p-6 bg-gray-200 m-10" onClick={() => {handleExcerptClick(v)}}>

                  {parse(v.excerpt)}
              </div>

            </div>
          )}

      </Paper>
      </div>)
  } else {
    return (
    <div className="flex justify-center m-12"> <CircularProgress /> </div>
    );
  }




}
