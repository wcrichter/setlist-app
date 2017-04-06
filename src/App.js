import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import NavMain from './components/nav-main'
import ProjectPage from './pages/project-page'
import ProjectsPage from './pages/projects-page'
import ProfilePage from './pages/profile-page'
import GigsPage from './pages/gigs-page'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavMain />
          <main>
            <Switch>
              <Route exact path="/" component={ProjectsPage} />
              <Route path="/project" component={ProjectPage} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
