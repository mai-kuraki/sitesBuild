/**
 * Created by zhengliuyang on 2018/9/7.
 */
import React from 'react';
import FilterListIcon from '@material-ui/icons/FilterList';

export default class Pages extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="drawer-content">
                <div className="page-filter">
                    <FilterListIcon style={{color: 'rgba(0,0,0,0.54)'}}/>
                    <input type="text" placeholder="过滤页面"/>
                </div>
            </div>
        )
    }
}