import React from 'react';
import ReactDOM from 'react-dom';

import Main from './main';
import Drawer from './drawer';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="paper-drawer-panel">
                <Main/>
                <Drawer/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('page'));