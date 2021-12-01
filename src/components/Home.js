import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        margin: 5,
        backgroundColor: "303030",
        padding: 30,
    },
    card: {
        borderRadius: 15,
        margin: 10,
        padding: 10,
    }
}));

function Home() {
    const classes = useStyles();
    return (
        <><Card className={classes.root}>
            <Typography variant="h5">
                About Me
            </Typography>

            <Card className={classes.card}>
                <Typography variant="h6">
                    Education
                </Typography>
                <Typography variant="body1">
                    I am currently learning full-stack web development at The University of Texas at Austin. Previous to this, I received my B.S. in Geology from Portland State University.
                </Typography>
            </Card><Card className={classes.card}>
                <Typography variant="h6">
                    Work Experience
                </Typography>
                <Typography variant="body1">
                    Before my journey in learning web development I worked for over a decade developing print and digital K-12 science programs. I have an in-depth knowledge of the NGSS, hands-on learning, interactive curriculum design, and effective pedagogical approaches.
                </Typography>
            </Card><Card className={classes.card}>
                <Typography variant="h6">
                    Interests
                </Typography>
                <Typography variant="body1">
                    When I'm not coding or studying, I'm likely out playing sand volleyball or hiking and photographing nature.
                </Typography>
            </Card>
        </Card>
        </>
    );
}

export default Home;