import { Switch, Route } from 'react-router-dom' 

// Components
import Join from "./components/Join"
import Landing from "./components/Landing"

// CSS imports
import "./css/App.css";


const App = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={Landing} />
      <Route exact path={"/join"} component={Join} />
    </Switch>
  );
}

export default App;
