/**
 * Created by zhengliuyang on 2018/9/7.
 */
import React from 'react';

export default class Theme extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="drawer-content">
                <div className="theme-item">
                    <div className="block block-active">
                        <div className="layout">
                            <span>简单</span>
                        </div>
                    </div>
                    <div className="block">
                        <div className="layout">
                            <span>wind</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}