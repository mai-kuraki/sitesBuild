import React from 'react';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import SubtitlesIcon from '@material-ui/icons/Subtitles';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import VisibilityIcon from '@material-ui/icons/Visibility';
import LinkIcon from '@material-ui/icons/Link';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import MainPanel from './MainPanel';

export default class Main extends React.Component {
    constructor(props) {
        super();
        this.state = {
            siteName: '未命名网站',
            anchorEl: null,
            options: [
                '网站分析',
                '复制网站',
                '添加网站图标',
                '自定义网址'
            ]
        }
    }

    siteNameChange(e) {
        this.setState({
            siteName: e.target.value,
        })
    }

    moreOpen(e) {
        this.setState({anchorEl: e.currentTarget});
    };

    moreClose(e) {
        this.setState({anchorEl: null});
    };


    render() {
        const {anchorEl, options} = this.state;
        const open = Boolean(anchorEl);
        return (
            <div id="main">
                <div className="paper-header">
                    <div className="left">
                    <a href="" className="logo">
                        <IconButton aria-label="site">
                            <SubtitlesIcon style={{color: '#3f51b5', fontSize: '32px'}}/>
                        </IconButton>
                    </a>
                    <div className="site-name">
                        <TextField
                            id="siteName"
                            value={this.state.siteName}
                            fullWidth={true}
                            onChange={this.siteNameChange.bind(this)}
                        />
                    </div>
                    </div>
                    <div className="actions">
                        <Tooltip title="撤销上一个操作">
                            <div>
                                <IconButton aria-label="undo" disabled>
                                    <UndoIcon/>
                                </IconButton>
                            </div>
                        </Tooltip>
                        <Tooltip title="重新执行上一个操作">
                            <div>
                                <IconButton aria-label="redo" disabled>
                                    <RedoIcon/>
                                </IconButton>
                            </div>
                        </Tooltip>
                        <Tooltip title="预览">
                            <div>
                                <IconButton aria-label="preview">
                                    <VisibilityIcon/>
                                </IconButton>
                            </div>
                        </Tooltip>
                        <Tooltip title="复制网站链接">
                            <div>
                                <IconButton aria-label="link" disabled>
                                    <LinkIcon/>
                                </IconButton>
                            </div>
                        </Tooltip>
                        <Tooltip title="与他人共享">
                            <div>
                                <IconButton aria-label="add person">
                                    <PersonAddIcon/>
                                </IconButton>
                            </div>
                        </Tooltip>
                        <div className="more">
                            <Tooltip title="更多">
                                <IconButton
                                    aria-label="More"
                                    aria-owns={open ? 'long-menu' : null}
                                    aria-haspopup="true"
                                    onClick={this.moreOpen.bind(this)}
                                >
                                    <MoreVertIcon/>
                                </IconButton>
                            </Tooltip>
                            <Menu
                                id="long-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={this.moreClose.bind(this)}
                                PaperProps={{
                                    style: {
                                        width: 192,
                                    },
                                }}
                            >
                                {options.map(option => (
                                    <MenuItem key={option} style={{fontSize: '14px'}}
                                              onClick={this.moreClose.bind(this)}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </div>
                        <Button variant="contained" color="primary" className="publish">
                            发布
                        </Button>
                    </div>
                </div>
                <MainPanel/>
            </div>
        )
    }
}