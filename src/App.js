import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Nav from './components/nav'
import ProjectsPage from './pages/projects-page'
import ProfilePage from './pages/profile-page'
import GigsPage from './pages/gigs-page'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Link to="/profile">Profile</Link>
          <Link to="/gigs">Gigs</Link>
          <Nav />
          <main>
            <Switch>
              <Route exact path="/" component={ProjectsPage} />
              <Route path="/profile" component={ProfilePage} />
              <Route path="/gigs" component={GigsPage}>
              </Route>
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
