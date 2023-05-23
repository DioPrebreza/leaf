import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
