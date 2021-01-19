import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MessengerCustomerChat from 'react-messenger-customer-chat';
import './App.css';
import Login from './components/Pages/Login/Login.jsx';
import About from "./components/Pages/About/About.jsx";
import Home from "./components/Home/Home.jsx";
import PortfolioData from './components/Pages/Portfolio/PortfolioData.jsx';
import Contact from "./components/Pages/Contact/Contact.jsx";
import AdminHome from './components/Pages/Admin_Panel/Admin_Home/AdminHome';
import SocialAdd from './components/Pages/Admin_Panel/Admin_Data/Social/SocialAdd.jsx';
import SocialVisit from './components/Pages/Admin_Panel/Admin_Data/Social/SocialVisit.jsx';
import ProjectAdd from './components/Pages/Admin_Panel/Admin_Data/Project/ProjectAdd.jsx';
import ProjectVisit from './components/Pages/Admin_Panel/Admin_Data/Project/ProjectVisit.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { AdminRoute } from './components/ExportedData';
import EditSocial from './components/Pages/Admin_Panel/Admin_Data/Social/EditSocial';
import EditProject from './components/Pages/Admin_Panel/Admin_Data/Project/EditProject';
import SocialData from './components/Pages/Admin_Panel/Admin_Data/Social/SocialData';
import ProjectData from './components/Pages/Admin_Panel/Admin_Data/Project/ProjectData';
import ProjectDetails from './components/Pages/Portfolio/ProjectDetails/ProjectDetails';
import ScrollToTop from './components/ScrollPage/ScrollToTop';
import ScrollToTopIcon from './components/ScrollPage/ScrollToTopIcon';
import { AnimatePresence } from 'framer-motion';

export const UserContext = createContext();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <ScrollToTop />
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/about"><About /></Route>
            <Route exact path="/portfolio"><PortfolioData /></Route>
            <Route exact path="/contact"><Contact /></Route>
            <Route exact path="/login"><Login /></Route>
            <Route exact path="/project/details/:id"><ProjectDetails /></Route>

            <PrivateRoute exact path="/admin/home"><AdminRoute data={<AdminHome />} /></PrivateRoute>
            <PrivateRoute exact path="/admin/socialadd"><AdminRoute data={<SocialAdd />} /></PrivateRoute>
            <PrivateRoute exact path="/admin/social"><AdminRoute data={<SocialVisit />} /></PrivateRoute>
            <PrivateRoute exact path="/admin/projectadd"><AdminRoute data={<ProjectAdd />} /></PrivateRoute>
            <PrivateRoute exact path="/admin/project"><AdminRoute data={<ProjectVisit />} /></PrivateRoute>
            <PrivateRoute exact path="/admin/edit/social/:id"><AdminRoute data={<EditSocial />} /></PrivateRoute>
            <PrivateRoute exact path="/admin/edit/project/:id"><AdminRoute data={<EditProject />} /></PrivateRoute>
            <PrivateRoute exact path="/admin/social/:id"><AdminRoute data={<SocialData />} /></PrivateRoute>
            <PrivateRoute exact path="/admin/project/:id"><AdminRoute data={<ProjectData />} /></PrivateRoute>
          </Switch>
        </AnimatePresence>
      </Router>
      <ScrollToTopIcon />
      <MessengerCustomerChat pageId="104265471638945" appId="2741222122799470" />
    </UserContext.Provider>
  );
};

export default App;