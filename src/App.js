import { Switch, Route } from 'react-router-dom' 

// Components
import ThemeToggler from "./components/common/ThemeToggler"
import Join from "./components/Join"
import Landing from "./components/Landing"
import Layout from "./components/common/Layout"

// CSS imports
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from '@chakra-ui/core'
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
