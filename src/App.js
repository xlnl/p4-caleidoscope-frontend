import { Switch, Route } from 'react-router-dom' 

// Components
import Layout from "./components/common/Layout"

// import ThemeToggler from "./components/common/ThemeToggler"
import Join from "./components/Join"
import Landing from "./components/Landing"
import Dashboard from "./components/Dashboard"
import EditForm from "./components/Forms/EditForm"

const App = () => {
    return (
      <>
        <Layout>
          <Switch>
              <Route exact path={"/"} component={Landing} />
              <Route exact path={"/join"} component={Join} />
              <Route exact path={"/home"} component={Dashboard} />
              <Route exact path={"/editNote"} component={EditForm} />
          </Switch>
        </Layout>
      </>
    );
}

export default App;
