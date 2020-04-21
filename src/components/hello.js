import React, {useState} from  'react';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {  makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    background: '#ff615E',
    height: 'auto',
    margin: '5em'
  },

}));

export default function Hello() {
  const classes = useStyles();
  const [num, setNum] = useState(1)

  const handleClick = () => {
    setNum(num + 1)
  }

  return (
    <div className="w-full  ">
    <Paper elevation={1} className={classes.root}>
      <div className="w-full bg-white flex justify-center h-8 m-4">
        {num}
      </div>
      <Button variant="contained" className="mt-12" color="primary" onClick={handleClick}>
        Primary
      </Button>
    </Paper>
    </div>
  );
}
