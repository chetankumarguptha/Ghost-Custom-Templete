import React  from  'react';
import {  makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {
    // background: '#f9f9f9',
    // height: '50vh',
    // margin: '5em'
  },
  imge:{
    height:'22em',
    width: '100%',
    background: '#0a5bff',
    zIndex: '100',
  },

}));

export default function Home() {
  const classes = useStyles();


  

    return(
        <div className={classes.imge}>
            <div class="container max-w-4xl mx-auto pt-16 md:pt-32  text-center md:w-auto sm:w-auto break-normal">
                    <p class="text-white font-extrabold text-6xl md:text-5xl">
                      
                    </p>
                    <p class="text-xl md:text-2xl text-gray-500"> </p>
            </div>
        </div>
    )
      
}
