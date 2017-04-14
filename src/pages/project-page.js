import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import NavProject from '../components/nav-project'
import OverviewPage from './overview-page'
import ListGigs from './gigs-list'
import SongsPage from './songs-page'
import FormGig from '../components/form-gig.js'
import PromptGigForm from '../components/prompt-gig-form.js'
import DetailsGig from '../components/details-gig'
import DetailsSong from '../components/details-song'

import FormGigSmart from '../components/form-gig-smart.js'

var currentProject = (props) => {props.currentProject}

const ProjectPage = (props) => {
  return (
    <div>
      <NavProject />
      <Switch>
        <Route exact path="/project" component={OverviewPage} />
        <Route exact path="/project/gigs" component={ListGigs} />
        <Route exact path="/project/gigs/add" component={PromptGigForm} />
        <Route exact path="/project/gigs/add-form" component={FormGig} />
        <Route exact path="/project/gigs/add-form-smart" component={FormGigSmart} />
        <Route exact path="/project/gigs/:id" component={DetailsGig} />
        <Route exact path="/project/songs" component={SongsPage} />
        <Route exact path="/project/songs/:id" component={DetailsSong} />
      </Switch>
    </div>
  )
}

const connector = connect(state => state)

export default connector(ProjectPage)
