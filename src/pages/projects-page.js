import React from 'react'
import {connect} from 'react-redux'
import {map, assoc, path, sortBy, prop} from 'ramda'
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

class ProjectsPage extends React.Component {
  componentDidMount() {
    fetch('http://localhost:8080/projects')
      .then(res => res.json())
      .then(projects => this.props.dispatch({type: 'SET_PROJECTS', payload: projects}))
    fetch('http://localhost:8080/gigs')
      .then(res => res.json())
      .then(gigs => this.props.dispatch({type: 'SET_GIGS', payload: gigs}))
  }
  render() {
    console.log('projects -',this.props.projects)
    const props = this.props
    const projectSort = sortBy(prop('name'))
    if(!path(['projects'], props)) {
      return(
        <div><h1>Loading</h1></div>
      )
    } else {
      return (
        <div>
          {/*
          <div className="mw9 center ph4 pt4">
            {map(project => <TestListItemThing key={project.name} {...project} />, [addKey(props.project)])}
          </div>
          */}
          <section className="mw9 center ph4 pv4 pb1 bb b--black-30 header-shadow">
            <h1 className="fw1 f3 dib ma0">My Projects</h1>
            <button className="f6 fr bg-white ba b--black dim pointer pv1 black" type="submit">Add Project</button>
          </section>

          <div className="mw9 center ph4">

            {map(project => <ListItemProject key={project._id} {...project} />, projectSort(props.projects))}

          </div>
        </div>
      )
    }
  }
}

const connector = connect(state => state)

export default connector(ProjectsPage)
