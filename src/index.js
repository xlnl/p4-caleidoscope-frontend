import * as React from "react"
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';

// Components imports
import App from "./App";

// CSS imports
import {
  ThemeProvider,
  theme,
  CSSReset,
  ColorModeProvider
} from '@chakra-ui/core'


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ColorModeProvider>  
      <CSSReset />
        <BrowserRouter>
            <div>
              <App />
            </div>
        </BrowserRouter>
    </ColorModeProvider>  
  </ThemeProvider>, 
  document.getElementById("root")
);
