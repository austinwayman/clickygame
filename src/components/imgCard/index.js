import React from 'react';
import './style.css';

const ImgCard = props => (
  <div
      id={props.name}
      onClick={() => props.handleClick(props.name)}
    >
    <div className="img-thumbnail">
      <img alt={props.name} src={props.img_url} />
  </div>
  </div>
);

export default ImgCard;