import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAllProjects, fetchProject, createProject } from '../actions/projects'
import { addTile, updateTile, deleteTile } from '../actions/tiles'
import { AddTileForm, CreateProjectForm, TileCard, Sidebar } from '../components'
import './Project.scss'
import CloseIcon from '../static/images/close--white.svg'
import AddIcon from '../static/images/add--white.svg'

class Project extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showSidebar: false,
    }
  }

  componentDidMount() {
    this.props.fetchAllProjects()

    if (!this.props.projects.length) {
      this.setState({ showSidebar: true })
    }
  }

  createProject = newProject => {
    this.props.createProject(newProject)
    this.setState({ showSidebar: false })
  }

  addTile = (newTile) => {
    const id = this.props.currentProject._id

    this.props.addTile(id, newTile)
  }

  deleteTile = tileId => {
    const id = this.props.currentProject._id

    this.props.deleteTile(id, tileId)
  }

  tilesByPhaseId = (id) => {
    if (!this.props.currentProject.tiles) return []

    if (!id) return this.props.currentProject.tiles.filter(tile => !tile.phaseId)

    return this.props.currentProject.tiles.filter(tile => tile.phaseId === id)
  }

  handleDrag = (e, id) => {
    e.currentTarget.style.opacity = .5
    e.dataTransfer.setData("text/plain", `${id}`)
  }

  onDragOver = e => {
    e.preventDefault()
  }

  handleDrop = (e, id) => {
    e.preventDefault()
    const tileId = e.dataTransfer.getData("text")
    console.log('dropped')

    this.updateTile(tileId, id)
  }

  updateTile(tileId, phaseId) {
    const id = this.props.currentProject._id
    const tile = this.props.currentProject.tiles.find(tile => tile._id === tileId)
    const updatedTile = { ...tile, phaseId }

    this.props.updateTile(id, tileId, updatedTile)
  }

  render() {
    const { projects, currentProject, projectPhases } = this.props
    const menuIcon = this.state.showSidebar ? CloseIcon : AddIcon

    return (
      <div className="project">
        <button
          className="button icon-button icon-button--primary project__menu-button"
          onClick={() => this.setState({ showSidebar: !this.state.showSidebar })}
          style={{ backgroundImage: `url(${menuIcon})`}}
        />
        <Sidebar
          open={this.state.showSidebar}
          handleClick={(id) => this.props.fetchProject(id)}
          projects={projects}
          currentProjectId={currentProject._id}
          currentProjectTitle={currentProject.title}
        >
          <CreateProjectForm createProject={this.createProject} />
        </Sidebar>

        <div className="project__phase">
          <ul className="project__phase-list">
            {this.tilesByPhaseId().map(tile => (
              <TileCard
                id={tile._id}
                title={tile.title}
                description={tile.description}
                handleClick={() => this.deleteTile(tile._id)}
                handleDrag={this.handleDrag}
              />
            ))}
          </ul>
        </div>

        {projectPhases.map(phase => (
          <div
            className="project__phase"
            key={phase.id}
            onDragOver={(e) => this.onDragOver(e)}
            onDrop={(e) => this.handleDrop(e, phase.id)}
          >
            <span className="project__phase-title">{phase.title}</span>

            <ul className="project__phase-list">
              {this.tilesByPhaseId(phase.id).map(tile => (
                <TileCard
                  id={tile._id}
                  title={tile.title}
                  description={tile.description}
                  handleClick={() => this.deleteTile(tile._id)}
                  handleDrag={this.handleDrag}
                  handleDrop={this.handleDrop}
                />
              ))}
            </ul>
          </div>
        ))}
        <AddTileForm addTile={this.addTile} visible={!this.state.showSidebar} />
      </div>
    )
  }
}

const mapStateToProps = ({ projects, projectPhases, currentProject }) => ({ projects, projectPhases, currentProject })

export default connect(mapStateToProps, {
  fetchAllProjects,
  createProject,
  fetchProject,
  addTile,
  updateTile,
  deleteTile
})(Project)
