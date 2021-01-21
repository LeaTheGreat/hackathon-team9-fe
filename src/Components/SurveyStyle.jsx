import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import {
  Button,
  Container,
  Divider,
  makeStyles,
  Paper,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import { getQuestions } from "../lib/api";
import { postSurvey } from "../lib/api";
import NavbarFull from "./../Components/NavbarFull";
import TableContainer from "@material-ui/core/TableContainer";

const useStyles = makeStyles(() => ({
  container: {
    borderRadius: "20px",
    padding: "20px",
    width: "95%",
  },
  heading: {
    marginBottom: "20px",
  },
  title: {
    color: "#000",
    fontSize: "18px",
    fontWeight: "500",
    margin: "10px",
    paddingTop: "20px",
  },
  formGroup: {
    marginBottom: "10px",
  },
}));

function Option({ option, register, name }) {
  return (
    <>
      <FormControlLabel
        inputRef={register({ required: true })}
        value={option._id}
        id={name + "_" + option._id}
        control={
          <Radio inputRef={register({ required: true })} color="primary" />
        }
        label={option.option}
        labelPlacement="start"
      />
    </>
  );
}

function Question({ question, register }) {
  const classes = useStyles();

  return (
    <>
      <Divider />

      <FormControl component="fieldset">
        <FormLabel className={classes.title} component="legend">
          {question.question}
        </FormLabel>
        <RadioGroup
          inputRef={register({ required: true })}
          row
          aria-label="position"
          className={classes.formGroup}
          name={question._id}
        >
          {question.options &&
            question.options.map((option) => (
              <Option
                key={question._id + "_" + option._id}
                option={option}
                register={register}
                name={question._id}
              />
            ))}
        </RadioGroup>
      </FormControl>
    </>
  );
}

export default function FormControlLabelPlacement(props) {
  const { register, handleSubmit } = useForm();
  const [questions, setQuestions] = useState([]);
  let id = props.match.params.id;
  const history = useHistory();

  const onSubmit = (data) => {
    console.log(id);
    postSurvey(id, data).then((res) => {
      console.log(res);
      history.push(`/parent-dash`);
    });
  };
  useEffect(() => {
    getQuestions().then((res) => {
      setQuestions(res);
    });
  }, []);

  const classes = useStyles();

  return (
    <div className="dash">
      <NavbarFull />
      <Container className={classes.container} maxWidth="md">
        <Paper className={classes.root}>
          <TableContainer className={classes.container}>
            <Toolbar className={classes.toolbar}>
              <Typography variant="h3" id="tableTitle" component="h1">
                Survey
              </Typography>
            </Toolbar>
            <form onSubmit={handleSubmit(onSubmit)}>
              {questions &&
                questions.map((question) => (
                  <Question
                    key={question._id}
                    question={question}
                    register={register}
                  />
                ))}
              <Button type="submit" variant="contained" color="primary">
                SUBMIT
              </Button>
            </form>
          </TableContainer>
        </Paper>
      </Container>
    </div>
  );
}
