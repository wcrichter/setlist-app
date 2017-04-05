import React from 'react'

const ProjectsPage = () => {
  return (
    <div>
      <section className="mw9 center ph4 pt5 pb1">
        <h1 className="fw1 dib ma0">My Projects</h1>
        <button className="f6 fr bg-white ba b--black dim pointer pv1 black" type="submit">Add Project</button>
      </section>
      <section className="mw9 center ph4 pt4">
        <a href="">
          <div className="pa4 mv3 cf ba br3">
            <div className="dib fl w-20">
              <img src="http://mrmrs.io/photos/p/2.jpg" className="ba br-100 w-100" alt="" />
            </div>
            <div className="dib fl w-80 pl4">
              <h1 className="f3 fw1 mt2 mb4">Project Name</h1>
              <p className="f5 fw1 mv0">Next Gig:</p>
              <p className="f4 fw1 mt2">10/14/2017 - Fundraiser Gig - Arts Bar and Grill</p>
            </div>
          </div>
        </a>
        <a href="">
          <div className="pa4 mv3 cf ba br3">
            <div className="dib fl w-20">
              <img src="http://mrmrs.io/photos/p/2.jpg" className="ba br-100 w-100" alt="" />
            </div>
            <div className="dib fl w-80 pl4">
              <h1 className="f3 fw1 mt2 mb4">Project Name</h1>
              <p className="f5 fw1 mv0">Next Gig:</p>
              <p className="f4 fw1 mt2">10/14/2017 - Fundraiser Gig - Arts Bar and Grill</p>
            </div>
          </div>
        </a>
      </section>
    </div>
  )
}

export default ProjectsPage
