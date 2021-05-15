import React from "react";
import Logo from "../images/Logo.png"
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import Home from "../pages/Home";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <Router>
              <Navbar bg="success" variant="dark" expand="lg" sticky="top">
                <Navbar.Brand href="/"><img className="logo" src={Logo} alt=""/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                  </Nav>
                  <Form inline>
                    <FormControl
                      type="text"
                      placeholder="Search"
                      className="mr-sm-2"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                </Navbar.Collapse>
              </Navbar>
              <br />
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/about">
                  <About />
                </Route>
                <Route exact path="/portfolio">
                  <Portfolio />
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
