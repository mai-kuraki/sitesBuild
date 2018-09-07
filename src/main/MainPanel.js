import React from 'react';
import $ from 'jquery';

export default class mainPanel extends React.Component {
    constructor(props) {
        super();
    }

    handleScroll() {
        let top = document.getElementById('mainContainer').scrollTop;
        if(top > 0) {
            $('.paper-header').addClass('paper-header-shadow');
        }else {
            $('.paper-header').removeClass('paper-header-shadow');
        }
    }

    render() {
        return (
            <div id="mainPanel">
                <div id="mainContainer" onScroll={this.handleScroll.bind(this)}>
                    <div className="content" style={{height: '2000px'}}></div>
                </div>
            </div>
        )
    }
}