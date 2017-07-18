import React from 'react';
import 'unitscss/dist/partial/header.css';

export default ({title, items, modifier = ''}) => (
    <header className={`uc-header _${modifier}`}>
        <h1 className="uc-header-logo"><a href="/.">{title}</a></h1>
        <div className="uc-header-menu _hide-small">
            {items.map(item => <a href={item.url}>{item.label}</a>)}
        </div>
        <div className="uc-menu-btn _hide-medium _hide-large">
            <button><i className="uc-menu-btn-icon"></i></button>
        </div>
    </header>
);