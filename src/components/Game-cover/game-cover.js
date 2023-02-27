import React from 'react';
import './game-cover.css'

const GameCover = ({image = ''}) => {
  console.log(image)
  return (
    <div className="game-cover" style={{backgroundImage: `url(${image})`}}>
      
    </div>
  );
};

export default GameCover;