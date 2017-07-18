import React from 'react';
import 'unitscss/dist/partial/sidebar.css';

export default ({items}) => (
    <div className="uc-sidebar-wrap">
        <div className="uc-sidebar-list">
            {items.map((item) => item.url ? <a href={item.url} className={item.current ? '_is-current' : ''}>{item.label}</a> : <p><strong>{item.label}</strong></p>)}
        </div>
    </div>
);