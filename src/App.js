import { Switch, Route } from 'react-router-dom' 

// Components
import Layout from "./components/common/Layout"

// import ThemeToggler from "./components/common/ThemeToggler"
import Join from "./components/Join"
import Landing from "./components/Landing"
import Dashboard from "./components/Dashboard"
import EditForm from "./components/Forms/EditForm"
import Horoscope from "./components/Horoscope"

const App = () => {
    return (
      <>
        <Layout>
          <Switch>
              <Route exact path={"/"} component={Landing} />
              <Route exact path={"/join"} component={Join} />
              <Route exact path={"/home"} component={Dashboard} />
              <Route exact path={"/editNote"} component={EditForm} />
              <Route exact path={"/horoscope"} component={Horoscope} />
          </Switch>
        </Layout>
      </>
    );
}

export default App;
