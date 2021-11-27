import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../assets/style.css';

//Import helper function to check if email is valid
import { validateEmail } from '../utils/helpers';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    border: 5
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
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
  const bull = <span className={classes.bullet}>•</span>;
  
  return (
   
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Send me a message by filling in the form below!
        </Typography>
        <form className="form">
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
         <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
        />
        <Button type="button" onClick={handleFormSubmit} color="secondary" variant="outlined">SUBMIT</Button>
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
