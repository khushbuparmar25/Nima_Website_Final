import logo from "./logo.svg";
import "./App.css";
import {
  Switch,
  Route,
  withRouter,
  Link,
  NavLink,
  BrowserRouter,
  Router,
} from "react-router-dom";
import StateBranchOfficials from "./StateBranchOfficial/StateBranchOfficial";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={StateBranchOfficials} exact />
          <Route
            path="/StateBranchOfficials"
            component={StateBranchOfficials}
            exact
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
