import React from 'react';

export default class mainPanel extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div id="mainPanel">
                <div id="mainContainer">
                    <div className="content"></div>
                </div>
            </div>
        )
    }
}