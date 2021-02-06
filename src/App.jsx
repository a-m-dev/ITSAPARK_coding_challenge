import { Route, Switch } from "react-router-dom";
import { Header, Footer } from "./components";
import {
  Home,
  BruteForceSolution,
  WorkerSolution,
  AdvanceSolution,
} from "./containers";
import PublicRoutes from "./utils/PublicRoutes";

function App() {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route exact path={PublicRoutes.Home} component={Home} />
          <Route
            path={PublicRoutes.BruteForceWay}
            component={BruteForceSolution}
          />
          <Route path={PublicRoutes.WorkerWay} component={WorkerSolution} />
          <Route path={PublicRoutes.AdvanceWay} component={AdvanceSolution} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;
