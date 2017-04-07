import React from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import NavProject from '../components/nav-project'
import OverviewPage from './overview-page'
import GigsPage from './gigs-page'
import SongsPage from './songs-page'
import FormGig from '../components/form-gig.js'

const testItem = () => <h1>Test</h1>

const ProjectPage = () => {
  return (
    <div>
      <NavProject />
      <Switch>
        <Route exact path="/project" component={OverviewPage} />
        <Route exact path="/project/gigs" component={GigsPage} />
        <Route exact path="/project/gigs/add" component={FormGig} />
        <Route exact path="/project/songs" component={SongsPage} />
      </Switch>
    </div>
  )
}

export default ProjectPage
