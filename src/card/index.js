import React from 'react';
import 'unitscss/dist/partial/card.css';

export default ({image, title, link, text, tag}) => (
  <article className="uc-card _banner">
    <a href={link} target="_blank">
      <div className="uc-card-image" style={{backgroundImage: `url(${image})`}}></div>
      <h3 className="uc-card-title">{title}</h3>
      <p>{text}</p>
      <p className="works-dev-tag">{tag}</p>
    </a>
  </article>
);