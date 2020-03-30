import React from 'react';

import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import {blueGrey, green, blue, yellow} from '@material-ui/core/colors';

import Home from './components/home'

const theme = createMuiTheme({
  palette: {
     primary: {
       main: yellow[500]
     },
     secondary: green,
     accent: blueGrey['50'],
     loading: blue[900],
   },
});



function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="w-full sm:bg-yellow-500 md:bg-green-500 lg:bg-blue-500 h-screen ">
      <Home />
    </div>
    </ThemeProvider>
  );
}

export default App;
