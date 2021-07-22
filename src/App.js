import React from 'react';
//import './App.css';
//import PropTypes from 'prop-types';
//import { withStyles } from '@material-ui/core/styles';
//import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
//import Toolbar from '@material-ui/core/Toolbar';
//import MenuIcon from '@material-ui/icons/Menu';
//import IconButton from '@material-ui/core/IconButton';
//import ExitToApp from '@material-ui/icons/ExitToApp';
//import Drawer from '@material-ui/core/Drawer';
//import Forms from './Forms';
//import HomeIcon from '@material-ui/icons/Home';
import Typography from '@material-ui/core/Typography';
import MusicList from './MusicList';
import music_list from './data';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            music_list : music_list
        }
    }
    render () {
        return (
            <div>
            <AppBar position="fixed">
                <Typography align="center" variant="h3" color="inherit">Your Favorite Musics</Typography>
            </AppBar>
            <div style={{height: 60, width: '100%'}}></div>
            <MusicList list={this.state.music_list}>

            </MusicList>
            </div>
        );
    }
}
