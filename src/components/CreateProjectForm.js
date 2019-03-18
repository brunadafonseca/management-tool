import React, { Component } from 'react'

class CreateProjectForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      description: '',
    }
  }

  handleChange = (value, key) => {
    this.setState({ [key]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { createProject } = this.props

    createProject({ ...this.state })
    this.clearState()
  }

  clearState = () => {
    this.setState({
      title: '',
      description: '',
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="card form">
        <span className="form__title">Add new project:</span>
        <input
          type="text"
          className="form__input"
          value={this.state.title}
          placeholder="Title"
          onChange={({ target }) => this.handleChange(target.value, 'title')}
        />
        <textarea
          type="text"
          className="form__input"
          value={this.state.description}
          rows="4"
          placeholder="Description"
          onChange={({ target }) => this.handleChange(target.value, 'description')}
        />
        <button type="submit" className="button button--primary form__submit-button" onSubmit={this.handleSubmit} >
          Create new project
        </button>
      </form>
    )
  }
}

export default CreateProjectForm
