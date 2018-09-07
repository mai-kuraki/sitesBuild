import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Insert from './Insert';
import Pages from './Pages';
import Theme from './Theme';

export default class Drawer extends React.Component{
    constructor(props) {
        super();
        this.state = {
            activeTab: 2,
        }
    }

    tabChange(e, value) {
        this.setState({ activeTab: value });
    }

    render() {
        const {activeTab} = this.state;
        return (
            <div id="drawer">
                <Tabs
                    value={this.state.activeTab}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={this.tabChange.bind(this)}
                    fullWidth={true}
                    className="drawer-tabs"
                >
                    <Tab label="插入" />
                    <Tab label="页面" />
                    <Tab label="主题背景" />
                </Tabs>
                {activeTab === 0 && <Insert/>}
                {activeTab === 1 && <Pages/>}
                {activeTab === 2 && <Theme/>}
            </div>
        )
    }
}