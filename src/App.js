import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NavMain from './components/nav-main'
import ProjectPage from './pages/project-page'
import ProjectsPage from './pages/projects-page'
import './index.css'

class App extends Component {
  render() {
    var currentProject = "Fowler's Mustache"
    return (
      <BrowserRouter>
        <div>
          <NavMain currentProject={currentProject} />
          <main>
            <Switch>
              <Route exact path="/" component={ProjectsPage} />
              <Route path="/project" component={ProjectPage} currentProject={currentProject} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
