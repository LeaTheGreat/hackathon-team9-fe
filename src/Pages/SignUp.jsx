import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useForm } from 'react-hook-form';
import { Radio, RadioGroup } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import { singup } from '../lib/api';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © 2021 '}
      <Link color="inherit" href="https://material-ui.com/">
        Spectrum Screen+
      </Link>
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  modalPaper: {
    position: 'absolute',
    width: 400,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modalHeading: {
    textAlign: 'center',
    marginBottom: '10px',
  },
  modalText: {
    fontSize: '15px',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  errorText: {
    textAlign: 'center',
    fontWeight: 600,
    color: 'red',
    marginBottom: '15px',
  },
}));

export default function SignUp() {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const response = await singup(data);
    if (response.error) {
      setModalBody(errorText(response.error));
      toggleModal();
    } else {
      console.log('secuess');
      setModalBody(successModal);
      toggleModal();
    }
  };

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!open);
  };

  const errorText = (msg) => {
    return (
      <div className={classes.modalPaper}>
        <Typography variant="h4" component="h2" className={classes.modalHeading}>
          Error
        </Typography>
        <p className={classes.modalText}>There was an error creating your account 😭💔</p>
        {msg.map((e, index) => (
          <p key={index} className={classes.errorText}>
            {e}
          </p>
        ))}
        <Button onClick={toggleModal} variant="contained" color="secondary">
          Close Modal
        </Button>
      </div>
    );
  };

  const successModal = (
    <div className={classes.modalPaper}>
      <Typography variant="h4" component="h2">
        Heading
      </Typography>
      <p className={classes.modalText}>Account successfully created!</p>
      <Button href="http://localhost:3000" variant="contained" color="primary">
        Enter
      </Button>
    </div>
  );

  const [modalBody, setModalBody] = useState();
  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  inputRef={register}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  inputRef={register}
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  type="number"
                  id="phoneNumber"
                  label="Phone Number"
                  name="phoneNumber"
                  inputRef={register}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  inputRef={register}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  inputRef={register}
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <RadioGroup
                  style={{ justifyContent: 'space-around' }}
                  row
                  aria-label="role"
                  name="role"
                  defaultValue="top"
                >
                  <FormControlLabel
                    value="Parent"
                    control={<Radio color="primary" />}
                    label="I am a parent"
                    labelPlacement="start"
                    inputRef={register}
                  />
                  <FormControlLabel
                    value="Doctor"
                    control={<Radio color="primary" />}
                    label="I am a doctor"
                    labelPlacement="start"
                    inputRef={register}
                  />
                </RadioGroup>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      <Modal
        open={open}
        onClose={toggleModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {modalBody}
      </Modal>
    </>
  );
}
