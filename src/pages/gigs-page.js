import React from 'react'
import NavProject from '../components/nav-project'
import ListGigs from './sub-gigs/list-gigs'
import AddGig from './sub-gigs/add-gig'
import DetailsGig from './sub-gigs/details-gig'

const GigsPage = () => {
  return (
    <div>
    <NavProject />
    <ListGigs />
    <AddGig />
    <DetailsGig />
    </div>
  )
}

export default GigsPage
