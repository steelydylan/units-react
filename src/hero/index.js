import React from 'react';
import 'unitscss/dist/partial/hero.css';

export default ({title, text, image, color = '#333'}) => (
    <div className="uc-hero _full" style={{backgroundColor:color}}>
        <div className="uc-hero-bg" style={{backgroundImage:`url(${image})`}}></div>
        <h1 className="uc-hero-title">{title}</h1>
        <p className="uc-hero-text">{text}</p>
    </div>
);