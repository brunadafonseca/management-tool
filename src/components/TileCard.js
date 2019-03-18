import React from 'react'
import './TileCard.scss'
import CloseIcon from '../static/images/close--white.svg'

const TileCard = ({ id, title, description, handleClick, handleDrag, handleDrop }) => (
  <li
    className="tile-card"
    key={id}
    draggable="true"
    onDragStart={(e) => handleDrag(e, id)}
  >
    <div className="tile-card__header">
      <span>{title}</span>
      <button
        className="icon-button icon-button--primary"
        onClick={handleClick}
        style={{ backgroundImage: `url('${CloseIcon}')`}}
      />
    </div>
    <p className="tile-card__description">{description}</p>
  </li>
)

export default TileCard
