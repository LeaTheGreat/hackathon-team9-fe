// Add Child Modal
import React from 'react';
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  makeStyles,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';

const AddChildModal = ({ open, toggleModal }) => {
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
    },
    modalText: {
      fontSize: '15px',
      marginBottom: '1rem',
      textAlign: 'center',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    formHeading: {
      fontSize: '30px',
      marginBottom: '10px',
      textAlign: 'center',
    },
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

  const classes = useStyles();
  const [ethnicity, setEthnicity] = React.useState('');

  const handleChange = (event) => {
    setEthnicity(event.target.value);
  };

  const modalBody = (
    <div className={classes.modalPaper}>
      <Typography className={classes.formHeading} variant="h4" component="h2">
        Add Child
      </Typography>
      <FormControl style={{ display: 'flex' }} noValidate autoComplete="off">
        <TextField
          style={{ marginBottom: '10px' }}
          id="outlined-basic"
          label="Child's Full Name"
          variant="outlined"
        />
        <TextField
          style={{ marginBottom: '10px' }}
          id="outlined-number"
          label="Age"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <FormControl style={{ marginBottom: '10px' }} variant="outlined" className={classes.root}>
          <InputLabel id="demo-simple-select-outlined-label">Sex</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={ethnicity}
            onChange={handleChange}
            label="Ethnicity"
          >
            <MenuItem value={'Male'}>Male</MenuItem>
            <MenuItem value={'Female'}>Female</MenuItem>
            <MenuItem value={'Other'}>Other</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          style={{ marginBottom: '10px' }}
          component="fieldset"
          className={classes.formControl}
        >
          <FormLabel component="legend">Check any if true: </FormLabel>
          <FormGroup>
            <FormControlLabel control={<Checkbox name="jaundice" />} label="Child has jaundice" />
            <FormControlLabel
              control={
                <Checkbox
                  // checked={'family_mem_with_ASD'}

                  name="family_mem_with_ASD"
                />
              }
              label="Family member with ASD"
            />
          </FormGroup>
        </FormControl>
        <Button href="http://localhost:3000" variant="contained" color="primary">
          Enter
        </Button>
      </FormControl>
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
