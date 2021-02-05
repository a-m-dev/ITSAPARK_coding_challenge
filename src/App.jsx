import { Route, Switch } from "react-router-dom";
import { Header, Footer } from "./components";
import { Home, JuniorWay, MidLevelWay, SeniorWay } from "./containers";
import PublicRoutes from "./utils/PublicRoutes";

function App() {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route exact path={PublicRoutes.Home} component={Home} />
          <Route path={PublicRoutes.JuniorWay} component={JuniorWay} />
          <Route path={PublicRoutes.MidLevelWay} component={MidLevelWay} />
          <Route path={PublicRoutes.SeniorWay} component={SeniorWay} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;
