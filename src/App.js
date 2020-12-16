import React, {Fragment} from 'react';
import {BrowserRouter as 
       Router, 
       Switch, 
       Route, 
       Redirect} from 'react-router-dom'; 
import Navigation from './components/Navigation';
import {HomePage,
       AboutPage,
       ProjectPage, 
       ContactPage,
       ExperiencePage,
       SkillsPage} from './pages';
import {Project, ThemeToggle} from './components';
import {capstoneImages, 
        climbItImages, 
        recallTrackerImages, 
        spaceHuntImages,
        capstoneDescription, 
        climbItDescription, 
        recallTrackerDescription, 
        spaceHuntDescription,
        capstoneCaption, 
        climbItCaption, 
        recallTrackerCaption, 
        spaceHuntCaption,
        capstoneRole, 
        climbItRole, 
        recallTrackerRole, 
        spaceHuntRole} 
from '../src/data';


const App = () => {
  return (
    <Fragment>
      <Router>
        <Navigation/>

        <Switch>

          <Route exact path="/">
            <Redirect to="/home" />
          </Route> 

          <Route exact path="/home" component={HomePage} />

          <Route exact path="/about" component={AboutPage} />

          <Route exact path="/experience" component={ExperiencePage} />

          <Route exact path="/skills" component={SkillsPage} />

          <Route exact path="/projects" component={ProjectPage} />

          <Route exact path="/projects/jama-jira-plugin" render={(props) => (
            <Project
              {...props}
              title="Jama-Jira link plugin"
              images={capstoneImages}
              size="60%"
              caption={capstoneCaption}
              description={capstoneDescription}
              role={capstoneRole}
              repo="https://github.com/CapstoneBitsPlease"
            ></Project>)} 
          />

          <Route exact path="/projects/climbit" render={(props) => (
            <Project
              {...props}
              title="ClimbIt"
              images={climbItImages}
              size="60%"
              caption={climbItCaption}
              description={climbItDescription}
              role={climbItRole}
              repo="https://github.com/xbhouse/ClimbIt"
            />)}
          />

          <Route exact path="/projects/recall-tracker" render={(props) => (
            <Project
              {...props}
              title="Recall Tracker"
              images={recallTrackerImages}
              size="20%"
              caption={recallTrackerCaption}
              description={recallTrackerDescription}
              role={recallTrackerRole}
              repo="https://github.com/xbhouse/RecallTracker-Android"
            ></Project>)} 
          />

          <Route exact path="/projects/spacehunt" render={(props) => (
            <Project
              {...props}
              title="SpaceHunt"
              images={spaceHuntImages}
              size="30%"
              caption={spaceHuntCaption}
              description={spaceHuntDescription}
              role={spaceHuntRole}
              repo="https://github.com/xbhouse/spacehunt-best-team"
            ></Project> )} 
          />
          
          <Route exact path="/contact" component={ContactPage} />
      
        </Switch>
        
      </Router>
      <ThemeToggle />
    </Fragment>
  )
}

export default App;
