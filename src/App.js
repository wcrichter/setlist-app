import React, { Component } from 'react'
import Nav from './components/nav'
import ProjectsPage from './pages/projects-page'
import ProfilePage from './pages/profile-page'
import GigsPage from './pages/gigs-page'

class App extends Component {
  render() {
    return (
      <div>

        <div>
          <Nav />
          <ProjectsPage />
        </div>

        <hr className="mt5" />

        <div>
          <Nav />
          <ProfilePage />
        </div>

        <hr className="mt5" />

        <div>
          <Nav />
          <GigsPage />
        </div>

        <hr className="mt5" />

      </div>
    );
  }
}

export default App;
