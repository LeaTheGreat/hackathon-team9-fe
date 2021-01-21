import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { Button, Container, makeStyles, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { getQuestions } from "../lib/api";
import { postSurvey } from "../lib/api";

const useStyles = makeStyles(() => ({
  container: {
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  heading: {
    marginBottom: "20px",
  },
  title: {
    color: "#000",
    fontSize: "18px",
    fontWeight: "500",
    marginBottom: "10px",
  },
  formGroup: {
    marginBottom: "20px",
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
    <Container className={classes.container} maxWidth="md">
      <Typography className={classes.heading} variant="h2">
        Survey
      </Typography>
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
    </Container>
  );
}
