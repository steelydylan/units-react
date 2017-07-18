import React, { Component } from 'react';
import 'unitscss/dist/partial/grid.css';

export default class DocumentTheme extends Component {
    render () {

        return (
        <div>
            {this.props.header}
            <div className="uc-grid _small-col-full _nowrap">
                <div className="uc-sidebar _slide uc-grid-cell">
                    {this.props.sidebar}
                </div>
                <div className="uc-grid-cell _col-fit">
                    <main className="uc-content">
                        {this.props.main}
                    </main>
                </div>
            </div>
            {this.props.footer}
        </div>);
    }
}