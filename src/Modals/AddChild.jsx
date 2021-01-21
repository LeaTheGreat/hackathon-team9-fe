// Add Child Modal
import React from "react";
import { addNewChild } from "../lib/api";
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
} from "@material-ui/core";
import { useForm } from "react-hook-form";

const AddChildModal = ({ open, toggleModal }) => {
  const { register, handleSubmit } = useForm();

  // Send form data to API
  const onSubmit = (data) => addNewChild(data);

  const useStyles = makeStyles((theme) => ({
    modalPaper: {
      position: "absolute",
      width: 400,
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      outline: "none",
    },
    modalText: {
      fontSize: "15px",
      marginBottom: "1rem",
      textAlign: "center",
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    formHeading: {
      fontSize: "30px",
      marginBottom: "10px",
      textAlign: "center",
    },
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));

  const classes = useStyles();

  const modalBody = (
    <div className={classes.modalPaper}>
      <Typography className={classes.formHeading} variant="h4" component="h2">
        Add Child
      </Typography>
      <FormControl style={{ display: "flex" }} noValidate autoComplete="off">
        <TextField
          style={{ marginBottom: "10px" }}
          inputRef={register}
          name="name"
          label="Child's Full Name"
          variant="outlined"
        />
        <TextField
          style={{ marginBottom: "10px" }}
          inputRef={register}
          label="Age in month"
          name="age_month"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <FormLabel component="legend">Sex</FormLabel>
        <RadioGroup aria-label="sex" name="sex">
          <FormControlLabel
            inputRef={register}
            value="female"
            control={<Radio />}
            label="Female"
          />
          <FormControlLabel
            inputRef={register}
            value="male"
            control={<Radio />}
            label="Male"
          />
          <FormControlLabel
            inputRef={register}
            value="other"
            control={<Radio />}
            label="Other"
          />
        </RadioGroup>
        <FormControl
          style={{ marginBottom: "10px" }}
          component="fieldset"
          className={classes.formControl}
        >
          <FormLabel component="legend">Check any if true: </FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox name="jaundice" />}
              label="Born with jaundice"
              inputRef={register}
            />
            <FormControlLabel
              control={<Checkbox name="family_mem_with_ASD" />}
              label="1st degree family member has ASD"
              inputRef={register}
            />
          </FormGroup>
        </FormControl>
        <Button
          onClick={handleSubmit(onSubmit)}
          type="submit"
          variant="contained"
          color="primary"
        >
          Add Child
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
