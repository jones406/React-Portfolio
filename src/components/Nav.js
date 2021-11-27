import React from 'react';
import { Link } from 'react-router-dom';
import headshot from '../assets/images/headshot.png'
import '../assets/style.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { StarTwoTone } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(3, .5),
        borderRadius: 25,
    },
    title: {
        flexGrow: 1,
    }
}));

export default function Nav() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <div>
                        <img className="headshot" src={headshot} alt="headshot" />
                    </div>
                    <Typography variant="h3" className={classes.title}>
                        Brooke Jones
                    </Typography>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/portfolio">Portfolio</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
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