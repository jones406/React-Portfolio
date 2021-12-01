import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import pr1Image from '../assets/images/Prj1.png'
import pr2Image from '../assets/images/Prj2.1.png'
import hw5Image from '../assets/images/HW5.png'
import hw6Image from '../assets/images/HW6.png'
import empImage from '../assets/images/employee.png'
import comingSoonImage from '../assets/images/comingsoon.png'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(5, 0),
    flexGrow: 1,
    display: "flex",
    alignItems: "center"
  },
  card: {
    maxWidth: 500,
    height: 600,
    flexGrow: 1,
    borderRadius: 25,
  },
  media: {
    minHeight: 325,
    maxHeight: 325,
    maxWidth: 400,
    overflow: "hidden",
    padding: 10,
    borderRadius: 25,
  },
  button: {
    backgroundColor: "gray",
    borderRadius: 50,
    margin: 3,
    paddingLeft: 10,
    paddingRight: 10,
  }
}));

export default function Portfolio() {
  const classes = useStyles();
  return (
    <Grid container spacing={1} className={classes.root}>
      <Grid item xs={12} sm={4} md={3}>
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
                Plan your travels by getting the weather forecast and popular events for your destination. This app is a product of my first group project from coding bootcamp.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button className={classes.button} href="https://nicoledodge.github.io/TravelBuddyApp/" size="small" color="primary">
              Check it out!
            </Button>
            <Button className={classes.button} href="https://github.com/nicoledodge/TravelBuddyApp" size="small" color="primary">
              Github
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={12} sm={4} md={3}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              component="img" src={pr2Image}
              title="Feed Your Lifestyle App image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Feed Your Lifestyle
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Find great recipes given your lifestyle goals and health concerns! This app was created for my second group project in coding bootcamp.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button className={classes.button} href="https://feed-your-lifestyle.herokuapp.com/" size="small" color="primary">
              Check it out!
            </Button>
            <Button  className={classes.button} href="https://github.com/Delmanat3/Feed-Your-Lifesyle" size="small" color="primary">
              Github
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={12} sm={4} md={3}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              component="img" src={hw6Image}
              title="Weather App image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Weather Forecast App
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Get the current weather and a 5-day forecast for your location. Creating this app allowed me to practice retrieving and displaying data from an API.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button className={classes.button} href="https://jones406.github.io/Homework-6-WeatherDashboard/" size="small" color="primary">
              Check it out!
            </Button>
            <Button className={classes.button} href="https://github.com/jones406/Homework-6-WeatherDashboard" size="small" color="primary">
              Github
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={12} sm={4} md={3}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              component="img" src={hw5Image}
              title="Workday App image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                WorkDay Scheduler
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                This simple app allows a user to plan their workday. I used js and local storage to allow users to add, edit, and delete notes and reminders.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button className={classes.button} href="https://jones406.github.io/Homework-5-WorkdayScheduler/" size="small" color="primary">
              Check it out!
            </Button>
            <Button className={classes.button} href="https://github.com/jones406/Homework-5-WorkdayScheduler" size="small" color="primary">
              Github
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={12} sm={4} md={3}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              component="img" src={empImage}
              title="Employee Tracker App image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Employee Tracker 
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                I created this CLI using node.js, inquirer, and SQL to explore how to create and maintain an employee database.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button className={classes.button} href="https://github.com/jones406/Homework-12-EmployeeTracker" size="small" color="primary">
              Github
            </Button>
          </CardActions>
        </Card>
      </Grid>


      <Grid item xs={12} sm={4} md={3}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              component="img" src={comingSoonImage}
              title="TK App image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                It's a Secret
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Project 3: React App. This project is currently in the works and will be ready to share soon!
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button className={classes.button} href="https://github.com/jones406?tab=repositories" size="small" color="primary">
              Check it out!
            </Button>
            <Button className={classes.button} href="https://github.com/jones406?tab=repositories" size="small" color="primary">
              Github
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
