import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import pr1Image from '../assets/images/Prj1.png'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4, 1),
  },card: {
    maxWidth: 345,
    flexGrow: 1,
  },
  media: {
    maxWidth: 300,
    padding: 10,
  }
}));

export default function Portfolio() {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item  xs={6} sm={3}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            component="img" src={pr1Image}
            title="TravelBuddy App image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              TravelBuddy
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              TravelBuddy can help you plan your travels. first time creating a web app.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button href="https://nicoledodge.github.io/TravelBuddyApp/" size="small" color="primary">
            Check it out!
          </Button>
          <Button href="https://github.com/nicoledodge/TravelBuddyApp" size="small" color="primary">
            Github
          </Button>
        </CardActions>
      </Card>
      </Grid>

      <Grid item  xs={6} sm={3}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            component="img" src={pr1Image}
            title="TravelBuddy App image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              TravelBuddy
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              TravelBuddy can help you plan your travels. first time creating a web app.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button href="https://nicoledodge.github.io/TravelBuddyApp/" size="small" color="primary">
            Check it out!
          </Button>
          <Button href="https://github.com/nicoledodge/TravelBuddyApp" size="small" color="primary">
            Github
          </Button>
        </CardActions>
      </Card>
      </Grid>


      <Grid item  xs={6} sm={3}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            component="img" src={pr1Image}
            title="TravelBuddy App image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              TravelBuddy
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              TravelBuddy can help you plan your travels. first time creating a web app.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button href="https://nicoledodge.github.io/TravelBuddyApp/" size="small" color="primary">
            Check it out!
          </Button>
          <Button href="https://github.com/nicoledodge/TravelBuddyApp" size="small" color="primary">
            Github
          </Button>
        </CardActions>
      </Card>
      </Grid>

      <Grid item  xs={6} sm={3}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            component="img" src={pr1Image}
            title="TravelBuddy App image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              TravelBuddy
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              TravelBuddy can help you plan your travels. first time creating a web app.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button href="https://nicoledodge.github.io/TravelBuddyApp/" size="small" color="primary">
            Check it out!
          </Button>
          <Button href="https://github.com/nicoledodge/TravelBuddyApp" size="small" color="primary">
            Github
          </Button>
        </CardActions>
      </Card>
      </Grid>

      <Grid item  xs={6} sm={3}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            component="img" src={pr1Image}
            title="TravelBuddy App image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              TravelBuddy
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              TravelBuddy can help you plan your travels. first time creating a web app.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button href="https://nicoledodge.github.io/TravelBuddyApp/" size="small" color="primary">
            Check it out!
          </Button>
          <Button href="https://github.com/nicoledodge/TravelBuddyApp" size="small" color="primary">
            Github
          </Button>
        </CardActions>
      </Card>
      </Grid>


      <Grid item  xs={6} sm={3}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            component="img" src={pr1Image}
            title="TravelBuddy App image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              TravelBuddy
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              TravelBuddy can help you plan your travels. first time creating a web app.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button href="https://nicoledodge.github.io/TravelBuddyApp/" size="small" color="primary">
            Check it out!
          </Button>
          <Button href="https://github.com/nicoledodge/TravelBuddyApp" size="small" color="primary">
            Github
          </Button>
        </CardActions>
      </Card>
      </Grid>

      
    </Grid>
  );
}
