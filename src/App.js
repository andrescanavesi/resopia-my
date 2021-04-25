import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import modules from './modules';
import {useState} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Nav, Navbar, NavDropdown, Form, FormControl, Button} from "react-bootstrap";

function App() {
  const [currentTab, setCurrentTab] = useState('recipes');
  return (
      <Router>
          <div className="App">
            <header className="App-header">
                <Navbar bg="dark"  expand="lg" variant="dark">
                    <Navbar.Brand href="#home">My Resopia</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            {modules.map(module => ( // with a name, and routes
                                    <Nav.Link key={module.name} href={module.routeProps.path} onClick={() => setCurrentTab(module.name)}>{module.name}</Nav.Link>
                            ))}

                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>

            </header>
            <div className="App-content">
              {modules.map(module => (
                  <Route {...module.routeProps} key={module.name} />
              ))}
            </div>

              <footer className="App-footer mt-5 py-5 bg-secondary text-center" >
                  Footer
              </footer>


          </div>
        </Router>
  );
}

export default App;
