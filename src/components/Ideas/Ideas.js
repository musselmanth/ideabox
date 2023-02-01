import React from 'react';
import Card from "../Card/Card";
import './Ideas.css';


const Ideas = ({ideas, deleteIdea}) => {

  const ideaCards = ideas.map(idea => {
    return (
      <Card idea={idea} deleteIdea={deleteIdea}/>
    )
  })
  return (
    <div className='ideas-container'>
      {ideaCards}
    </div>
  )
}

export default Ideas;