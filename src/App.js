import React, {Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'; 
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <Fragment>
      <Router>
        <Navigation/>
        <Switch>
          <Route path="/home">
            {<HomePage/>}
          </Route>
          <Route path="/about">
            {<AboutPage/>}
          </Route>
          <Route path="/projects">
            {<ProjectPage/>}
          </Route>
          <Route path="/contact">
            {<ContactPage/>}
          </Route>
        </Switch>
      </Router>
    </Fragment>
  )
}

export default App;
