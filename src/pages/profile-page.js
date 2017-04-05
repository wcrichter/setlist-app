import React from 'react'
import ProfileTabs from '../components/profile-tabs'

const ProfilePage = () => {
  return (
    <div>
      <ProfileTabs />
      <section>
        <article className="pa4 mt2 cf">
          <div className="dib v-mid fl w-25">
            <img src="http://mrmrs.io/photos/p/2.jpg" className="ba br-100 w-100" alt=""/>
          </div>
          <div className="dib v-mid fl w-75 w-50-ns pl4">
            <h1 className="f3 f2-ns fw1 mb0">Project Name</h1>
            <h2 className="f4 f3-ns fw1 mb0 mt2">Location</h2>
            <h2 className="f6 f5-ns fw1 mb0">Genre</h2>
          </div>
          <div className="dib v-mid fl w-100 w-25-ns">
            <button className="f6 fr bg-white ba b--black dim pointer pv1 black" type="submit">Edit Project</button>
          </div>
        </article>
      </section>
      <section>
        <div className="mw9 center ph3-ns">
          <div className="cf ph2-ns">
            <div className="fl w-100 pa2">
              <div className="bg-black-10 ba b--black-30 br2 pa3">
                <div className="mb3">Upcoming Gigs:</div>
                <div className="f6">10/14/2017 - Fundraiser Gig - Arts Bar and Grill</div>
              </div>
            </div>
            <div className="fl w-100 w-third-ns pa2">
              <div className="bg-black-10 ba b--black-30 br2 pa3">
                <div className="mb3">Total Songs:</div>
                <div className="f1 fw1">28</div>
              </div>
            </div>
            <div className="fl w-100 w-third-ns pa2">
              <div className="bg-black-10 ba b--black-30 br2 pa3">
                <div className="mb3">Total Gigs:</div>
                <div className="f1 fw1">8</div>
              </div>
            </div>
            <div className="fl w-100 w-third-ns pa2">
              <div className="bg-black-10 ba b--black-30 br2 pa3">
                <div className="mb3">Total Artists:</div>
                <div className="f1 fw1">12</div>
              </div>
            </div>
            <div className="fl w-50 pa2">
              <div className="bg-black-10 ba b--black-30 br2 pa3">
                <div className="mb3">Highest Rated Songs:</div>
                <ol>
                  <li className="pv1"><span className="f5">Shakedown Street</span><br /><span className="f6">The Grateful Dead</span></li>
                  <li className="pv1"><span className="f5">Shakedown Street</span><br /><span className="f6">The Grateful Dead</span></li>
                  <li className="pv1"><span className="f5">Shakedown Street</span><br /><span className="f6">The Grateful Dead</span></li>
                </ol>
              </div>
            </div>
            <div className="fl w-50 pa2">
            <div className="bg-black-10 ba b--black-30 br2 pa3">
              <div className="mb3">Highest Rated Songs:</div>
                <ol>
                  <li className="pv1"><span className="f5">Shakedown Street</span><br /><span className="f6">The Grateful Dead</span></li>
                  <li className="pv1"><span className="f5">Shakedown Street</span><br /><span className="f6">The Grateful Dead</span></li>
                  <li className="pv1"><span className="f5">Shakedown Street</span><br /><span className="f6">The Grateful Dead</span></li>
                </ol>
              </div>
            </div>
            <div className="fl w-100 pa2">
              <div className="bg-black-10 ba b--black-30 br2 pa3">
                <div className="mb3">Gig Frequency:</div>
              </div>
            </div>
            <div className="fl w-100 pa2">
              <div className="bg-black-10 ba b--black-30 br2 pa3">
                <div className="mb3">Project Contributors:</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}

export default ProfilePage
