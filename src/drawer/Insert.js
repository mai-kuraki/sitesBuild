/**
 * Created by zhengliuyang on 2018/9/7.
 */
import React from 'react';
import Button from '@material-ui/core/Button';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import RemoveIcon from '@material-ui/icons/Remove';
import VideocamIcon from '@material-ui/icons/Videocam';
import UnfoldLessIcon from '@material-ui/icons/UnfoldLess';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import Collapse from '@material-ui/core/Collapse';

export default class Insert extends React.Component {
    constructor(props) {
        super();
        this.state = {
            layoutToggle: true,
        }
    }

    render() {
        const {layoutToggle} = this.state;
        return (
            <div className="drawer-content">
                <div className="base-insert">
                    <div className="i-wrap">
                        <Button className="insert">
                            <TextFieldsIcon style={{color: '#4285f4'}}/>
                            <span>文本框</span>
                        </Button>
                    </div>
                    <div className="i-wrap">
                        <Button className="insert">
                            <InsertPhotoIcon style={{color: '#db4437'}}/>
                            <span>图片</span>
                        </Button>
                    </div>
                    <div className="i-wrap">
                        <Button className="insert">
                            <RemoveIcon style={{color: '#f4b400'}}/>
                            <span>分割线</span>
                        </Button>
                    </div>
                    <div className="i-wrap">
                        <Button className="insert">
                            <VideocamIcon style={{color: '#4caf50'}}/>
                            <span>视频</span>
                        </Button>
                    </div>
                </div>
                <div className="toggle-panel">
                    <Button className="toggle-head" onClick={() => {
                        this.setState({
                            layoutToggle: !layoutToggle,
                        })
                    }}>
                        <span className="label">布局</span>
                        {
                            layoutToggle?<UnfoldLessIcon/>:<UnfoldMoreIcon/>
                        }
                    </Button>
                    <Collapse in={layoutToggle}>
                    <div className="layout-item">
                        <div className="block">
                            <Button>
                                <i className="iconfont icon-complex-a"></i>
                            </Button>
                        </div>
                        <div className="block">
                            <Button>
                                <i className="iconfont icon-complex-b"></i>
                            </Button>
                        </div>
                        <div className="block">
                            <Button>
                                <i className="iconfont icon-complex-c"></i>
                            </Button>
                        </div>
                        <div className="block">
                            <Button>
                                <i className="iconfont icon-complex-d"></i>
                            </Button>
                        </div>
                        <div className="block">
                            <Button>
                                <i className="iconfont icon-complex-e"></i>
                            </Button>
                        </div>
                        <div className="block">
                            <Button>
                                <i className="iconfont icon-complex-f"></i>
                            </Button>
                        </div>
                        <div className="block">
                            <Button>
                                <i className="iconfont icon-complex-g"></i>
                            </Button>
                        </div>
                    </div>
                    </Collapse>
                </div>
            </div>
        )
    }
}