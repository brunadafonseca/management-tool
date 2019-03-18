import React, { Component } from 'react'
import './AddTileForm.scss'

class AddTileForm extends Component {
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
    const { phaseId, addTile } = this.props
    const { title, description } = this.state

    const data = {
      phaseId,
      title,
      description,
    }
    addTile(data)
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
      <form onSubmit={this.handleSubmit} className={`card form add-tile-form ${this.props.visible && 'add-tile-form--visible'}`}>
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
          Add tile
        </button>
      </form>
    )
  }
}

export default AddTileForm
