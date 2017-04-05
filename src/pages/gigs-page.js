import React from 'react'
import ProfileTabs from '../components/profile-tabs'
import ListGigs from './sub-gigs/list-gigs'
import AddGig from './sub-gigs/add-gig'
import DetailsGig from './sub-gigs/details-gig'

const GigsPage = () => {
  return (
    <div>
    <ProfileTabs />
    <ListGigs />
    <AddGig />
    <DetailsGig />
    </div>
  )
}

export default GigsPage
