import React from "react";
import { Route, Link } from "react-router-dom";
import Auth from "../auth/Auth";

const App = () => (
  <div>
    <ul className="nav nav-tabs mt-3">
      <li className="nav-item">
        <Link className="nav-link" to="/auth">
          Auth
        </Link>
      </li>
    </ul>

    <main>
      <Route exact path="/auth" component={Auth} />
    </main>
  </div>
);

export default App;
