import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

//Import helper function to check if email is valid
import { validateEmail } from '../utils/helpers';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    border: 5,
    padding: 2,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  form: {
    fontSize: 14,
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: 20,
  },
  field: {
    fontSize: 14,
    margin: 5,
    width: "30%"
  },
  message: {
    minHeight: "10rem",
    width: "30%",
    fontSize: 14,
    margin: 5,
  },
  button: {
    maxWidth: "15%",
    justifyContent: "row",
  }
});

function Contact() {
  // Create state variables for form fields. Set initial values to empty strings.
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and message
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Prevent default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Check if email is invalid or if userName empty. If so set an error message.
    if (!validateEmail(email) || !userName) {
      setErrorMessage('Please double check your name and email are correctly formatted.');
      //Exit out of code block if something is wrong
      return;
    }
    alert(`Thanks for your submission, ${userName}`);

    //Clear input after successful completion by user.
    setUserName('');
    setMessage('');
    setEmail('');
  };

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Send me a message!
        </Typography>
        <form className={classes.form}>
          <input className={classes.field}
            value={userName}
            name="userName"
            onChange={handleInputChange}
            type="text"
            placeholder="Name"
          />
          <input className={classes.field}
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Email"
          />
          <input className={classes.message}
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="Message"
          />
          <Button className={classes.button} type="button" onClick={handleFormSubmit} color="danger" variant="contained">SUBMIT</Button>
        </form>
      </CardContent>
      <CardActions>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </CardActions>
    </Card>
  );
}

export default Contact;