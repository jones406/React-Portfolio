import React from "react";
import Button from '@material-ui/core/Button';
import resume from '../assets/resume.pdf'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  button: {
    backgroundColor: "gray",
    borderRadius: 50,
    marginTop: 50
    },
});

function Footer() {
  const classes = useStyles();

  return (
    <Button className={classes.button}>
    <a href = {resume} target = "_blank">Resume</a>
    </Button>
  );
}

export default Footer;