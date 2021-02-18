import { Switch, Route } from 'react-router-dom' 

// Components
import ThemeToggler from "./components/ThemeToggler"
import Join from "./components/Join"
import Landing from "./components/Landing"

// CSS imports
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset
} from '@chakra-ui/core'
import { ChakraProvider } from "@chakra-ui/react"
import "./css/App.css";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <ThemeToggler />
          <Switch>
            <Route exact path={"/"} component={Landing} />
            <Route exact path={"/join"} component={Join} />
          </Switch>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
