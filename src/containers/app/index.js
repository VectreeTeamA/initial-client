import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "../home";
import About from "../about";
import Auth from "../../Auth";

const App = () => (
  <div>
    <ul className="nav nav-tabs mt-3">
      <li className="nav-item">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/auth">
          Auth
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about-us">
          About
        </Link>
      </li>
    </ul>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/auth" component={Auth} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
);

export default App;
