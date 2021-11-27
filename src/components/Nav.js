import React from 'react';
import { Link } from 'react-router-dom';
import headshot from '../assets/images/headshot.png'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import WorkTwoToneIcon from '@material-ui/icons/WorkTwoTone';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import MailTwoToneIcon from '@material-ui/icons/MailTwoTone';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "white"
    },
    title: {
        flexGrow: 1,
        color: "black",
        font: "sans"
    },
    headshot: {
        width: 100,
        paddingTop: 25,
        paddingBottom: 25,
        paddingRight: 20,
    },
}));

export default function Nav() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <div>
                        <img className={classes.headshot} src={headshot} alt="headshot" />
                    </div>
                    <Typography variant="h4" className={classes.title}>
                        Brooke Jones
                    </Typography>
                    <List component="nav">
                        <ListItem button>
                            <ListItemIcon>
                                <HomeTwoToneIcon />
                            </ListItemIcon>
                            <Link to="/">Home</Link>
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon>
                                <WorkTwoToneIcon />
                            </ListItemIcon>
                            <Link to="/portfolio">Portfolio</Link>
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon>
                                <MailTwoToneIcon />
                            </ListItemIcon>
                            <Link to="/contact">Contact</Link>
                        </ListItem>
                    </List>
                </Toolbar>

            </AppBar>
        </div>
    );
}


// function Nav() {
//     return (
//         <nav> Brooke Jones
//             <div>
//             <img className = "headshot" src={headshot} alt = "headshot of Brooke Jones" />
//             </div>
//             <ul>
//                 <li>
//                     <Link to="/">Home</Link>
//                 </li>
//                 <li>
//                     <Link to="/portfolio">Portfolio</Link>
//                 </li>
//                 <li>
//                     <Link to="/contact">Contact</Link>
//                 </li>
//             </ul>
//         </nav>
//     );
// }

// export default Nav;