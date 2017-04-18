import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NavMain from './components/nav-main'
import ProjectPage from './pages/project-page'
import ProjectsPage from './pages/projects-page'
import Splash from './pages/splash'
import './index.css'

class App extends Component {
  render() {
    var currentProject = "Fowler's Mustache"
    return (
      <BrowserRouter>
        <div>
          <NavMain />
          <main className="full-height">
            <Switch>
              <Route exact path="/" component={ProjectsPage} />
              <Route path="/project" component={ProjectPage} currentProject={currentProject} />
              <Route path="/splash" component={Splash} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
