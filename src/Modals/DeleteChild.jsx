// Add Child Modal
import React from 'react';
import { deleteChild } from '../lib/api';
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  makeStyles,
  Modal,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';

const AddChildModal = ({ open, toggleModal }) => {
  const { register, handleSubmit } = useForm();

  // Send form data to API
  const onSubmit = (data) => deleteChild(data);

  const useStyles = makeStyles((theme) => ({
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
      outline: 'none',
    },
    modalText: {
      fontSize: '15px',
      marginBottom: '1rem',
      textAlign: 'center',
    },
    formHeading: {
      fontSize: '24px',
      color: 'red',
      fontWeight: '500',
    },
  }));

  const classes = useStyles();

  // const { auth } = useAuth();
  // const handleClick = () => {
  //   deleteChild(auth.userId)
  // }

  const modalBody = (
    <div className={classes.modalPaper}>
      <Typography className={classes.formHeading} variant="h4" component="h2">
        Delete Child
      </Typography>
      <p className={classes.modalText}>Are you sure you want to delete??</p>
      <Button type="submit" variant="contained" color="secondary">
        Delete Child
      </Button>
    </div>
  );

  return (
    <Modal
      open={open}
      onClose={toggleModal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {modalBody}
    </Modal>
  );
};

export default AddChildModal;
