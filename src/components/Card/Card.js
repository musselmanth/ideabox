import React from 'react';
import './Card.css';

const Card = ({idea, deleteIdea}) => {

  return (
    <div className='card'>
      <h3>{idea.title}</h3>
      <p>{idea.description}</p>
      <button onClick={() => deleteIdea(idea.id)}>🗑</button>
    </div>
  )
}

export default Card;
