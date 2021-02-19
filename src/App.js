import { Switch, Route } from 'react-router-dom' 

// Components
import Header from "./components/common/Header"
import Join from "./components/Join"
import Landing from "./components/Landing"
import Dashboard from "./components/Dashboard"


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
            <Header />
            <Switch>
                <Route exact path={"/"} component={Landing} />
                <Route exact path={"/join"} component={Join} />
                <Route exact path={"/home"} component={Dashboard} />
            </Switch>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
