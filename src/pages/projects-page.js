import React from 'react'
import {connect} from 'react-redux'
import {map, assoc} from 'ramda'
import ListItemProject from '../components/list-item-project'

//add an onClick function that will change the state of the current project

//const addProjectListItemClickEvent = assoc('onClick', (e) => dispatch({type: 'SET_PROJECT', payload: project}))

const addKey = assoc('test', 'this is a test')

const TestListItemThing = (props) => {
  return (
    <div>
      <div>{props.name}</div>
      <div>{props.test}</div>
    </div>
  )
}

const ProjectsPage = (props) => {
  return (
    <div>
      <div className="mw9 center ph4 pt4">
        {map(project => <TestListItemThing key={project.name} {...project} />, [addKey(props.project)])}
      </div>
      <section className="mw9 center ph4 pt5 pb1">
        <h1 className="fw1 dib ma0">My Projects</h1>
        <button className="f6 fr bg-white ba b--black dim pointer pv1 black" type="submit">Add Project</button>
      </section>

      <div className="mw9 center ph4 pt4">
        {map(project => <ListItemProject key={project.name} {...project} />, props.projects)}
      </div>
    </div>
  )
}

const connector = connect(state => state)

export default connector(ProjectsPage)
