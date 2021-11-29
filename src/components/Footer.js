import React from "react";
import Button from '@material-ui/core/Button';
import resume from '../assets/resume.pdf'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  footer: {
    
  },
    button: {
    alignItems: "center",
    backgroundColor: "gray",
    borderRadius: 50,
    margin: 5
    },
  });

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
    <Button className={classes.button}>
    <a href = {resume} target = "_blank">Resume</a>
    </Button>
    <Button className={classes.button}>
    <a href = "https://www.linkedin.com/in/brookejones406/">LinkedIn</a>
    </Button>
    <Button className={classes.button}>
    <a href = "https://github.com/jones406">GitHub</a>
    </Button>
    </div>
  );
}

export default Footer;