import { Switch, Route } from 'react-router-dom' 

// Components
import Layout from "./components/common/Layout"
// import ThemeToggler from "./components/common/ThemeToggler"
import Join from "./components/Join"
import Landing from "./components/Landing"
import Dashboard from "./components/Dashboard"

const App = () => {
    return (
      <>
        <Layout>
          <Switch>
              <Route exact path={"/"} component={Landing} />
              <Route exact path={"/join"} component={Join} />
              <Route exact path={"/home"} component={Dashboard} />
          </Switch>
        </Layout>
      </>
    );
}

export default App;
