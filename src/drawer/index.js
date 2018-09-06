import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
export default class Drawer extends React.Component{
    constructor(props) {
        super();
        this.state = {
            activeTab: 0,
        }
    }

    tabChange(e, value) {
        this.setState({ activeTab: value });
    }

    render() {
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
            </div>
        )
    }
}