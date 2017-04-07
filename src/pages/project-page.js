import React from 'react'
import {Route, Switch} from 'react-router-dom'
import NavProject from '../components/nav-project'
import OverviewPage from './overview-page'
import GigsPage from './gigs-page'
import SongsPage from './songs-page'
import FormGig from '../components/form-gig.js'
import PromptGigForm from '../components/prompt-gig-form.js'
import DetailsGig from '../components/details-gig'
import DetailsSong from '../components/details-song'


const ProjectPage = () => {
  return (
    <div>
      <NavProject />
      <Switch>
        <Route exact path="/project" component={OverviewPage} />
        <Route exact path="/project/gigs" component={GigsPage} />
        <Route exact path="/project/gigs/add" component={PromptGigForm} />
        <Route exact path="/project/gigs/gig-details" component={DetailsGig} />
        <Route exact path="/project/songs" component={SongsPage} />
        <Route exact path="/project/songs/song-details" component={DetailsSong} />
      </Switch>
    </div>
  )
}

export default ProjectPage
