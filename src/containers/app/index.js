import React from "react";
import { Route } from "react-router-dom";
import Home from "../home";
import About from "../about";
import Auth from "../auth";
import { Container, Nav, NavItem, NavLink } from "reactstrap";

const App = () => (
  <Container>
    <hr />
    <Nav>
      <NavItem>
        <NavLink href="/">Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/about-us">About</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/auth">Auth</NavLink>
      </NavItem>
    </Nav>

    <hr />

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/auth" component={Auth} />
    </main>
  </Container>
);

export default App;
