import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Card, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import {Favorite, FavoriteBorder} from '@material-ui/icons';

import firebase from './firebase';

const styles = theme => ({
    content : {},
    layout : {
        display : 'flex',
        justifyContent : 'center'
    },
    card: {
        minWidth: 275,
        maxWidth: 600,
        marginBottom : 20,
        marginLeft : 'auto',
        marginRight : 'auto',
    },
});



class MusicList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            likes : {}
        };
    }

    toggleFavorite = (id) => () => {
        let {likes} = this.state;
        console.log(id, likes[id]);
        if(likes[id] == undefined) {
            likes[id] = true;
        }
        else {
            likes[id] = (likes[id]) ? false : true;
        }

        let db = firebase.firestore();
        db.collection('likes').doc(String(id)).set({like : likes[id]});
        
        /*
        try {
            let ref = db.collection('likes').doc(String(id));
            ref.get().then((doc) => {
                if (doc.exists) {
                    console.log('document data : ', doc.data());    
                }
                else {
                    console.log('No Such Document')
                }
            }).catch((e) => {
                console.log('Error while accessing Firestore : ' + e);
            });
        }
        catch (e) {
            console.log('Error Occurred : '+ e);
        } */


        this.setState({likes});
    }

    render () {
        const {classes} = this.props;
        return (
            <div>
                {this.props.list.results.map(item => {
                    return (
                    <Card key={item.collectionId} className={classes.card}>
                        <CardContent>
                            <Typography variant="subtitle1"> {item.artistName}</Typography>
                            <Typography variant="subtitle2"> {item.collectionCensoredName}</Typography>
                        </CardContent>
                        <CardActions>
                            <IconButton onClick={this.toggleFavorite(item.collectionId)}>
                            {this.state.likes[item.collectionId] ? <Favorite /> : <FavoriteBorder />}
                            </IconButton>
                        </CardActions>
                    </Card>)
                })}
            </div>
        );
    }
}

export default withStyles(styles)(MusicList);
