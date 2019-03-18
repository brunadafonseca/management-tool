import React from 'react'
import './Sidebar.scss'

const Sidebar = ({ open, children, projects, currentProjectId, currentProjectTitle, handleClick }) => (
  <div className={`sidebar ${open && 'sidebar--open'}`}>
    <span className="sidebar__project-title">
      {currentProjectTitle}
    </span>

    <ul className="sidebar__list">
      <span className="sidebar__list-title">Your projects:</span>
      {projects.map(project => (
        <li key={`sidebar-item-${project._id}`}>
          <button
            className={`button sidebar__button ${(currentProjectId === project._id) && 'sidebar__button--active'}`}
            key={project._id}
            onClick={() => handleClick(project._id)}
          >
            {project.title}
          </button>
        </li>
      ))}
    </ul>
    {children}
  </div>
)

export default Sidebar
