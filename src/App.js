import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/Navbar/Navbar.jsx';
import Login from './components/Login/Login.jsx';
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import PortfolioData from './components/Portfolio/PortfolioData.jsx';



import Contact from "./components/Contact/Contact";
import Admin from "./components/Admin/Admin";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <PortfolioData />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
};

export default App;