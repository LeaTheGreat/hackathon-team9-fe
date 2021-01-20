import React, { useState, useEffect } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { Button, Container, makeStyles, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import axios from "axios";

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
    </>
  );
}

//TODO Move it to api.js
const getQuestions = async () => {
  try {
    // const baseUrl = "https://hackaton-team9.herokuapp.com"; //remove it
    // const response = await axios.get(baseUrl + `/api/question/`, {
    //   headers: {
    //     Cookie: `token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMDgwN2FjYWZjYWZmNmM4OGY0MGQwMCIsImlhdCI6MTYxMTE3NDU2M30.lO85KkYR7ZKXCUY24yPIdT6ewOlJXIC9JRhsigz7jIQ`,
    //   },
    // });
    // return response.data;
    return [
      {
        options: [
          {
            _id: "always",
            option: "Always",
            weight: 0,
            __v: 0,
          },
          {
            _id: "usually",
            option: "Usually",
            weight: 1,
            __v: 0,
          },
          {
            _id: "sometimes",
            option: "Sometimes",
            weight: 2,
            __v: 0,
          },
          {
            _id: "rarely",
            option: "Rarely",
            weight: 3,
            __v: 0,
          },
          {
            _id: "never",
            option: "Never",
            weight: 4,
            __v: 0,
          },
        ],
        use: true,
        _id: "A1",
        question: "Does your child look at you when you call his/her name?",
        createdAt: "2021-01-20T12:19:40.384Z",
        updatedAt: "2021-01-20T12:19:40.384Z",
        __v: 0,
      },
      {
        options: [
          {
            _id: "veryeasy",
            option: "Very easy",
            weight: 0,
            __v: 0,
          },
          {
            _id: "quiteeasy",
            option: "Quite easy",
            weight: 1,
            __v: 0,
          },
          {
            _id: "quitedifficult",
            option: "Quite difficult",
            weight: 2,
            __v: 0,
          },
          {
            _id: "verydifficult",
            option: "Very difficult",
            weight: 3,
            __v: 0,
          },
          {
            _id: "impossible",
            option: "Impossible",
            weight: 4,
            __v: 0,
          },
        ],
        use: true,
        _id: "A2",
        question: "How easy is it for you to get eye contact with your child?",
        createdAt: "2021-01-20T12:19:40.550Z",
        updatedAt: "2021-01-20T12:19:40.550Z",
        __v: 0,
      },
      {
        options: [
          {
            _id: "manytimesaday",
            option: "Many times a day",
            weight: 0,
            __v: 0,
          },
          {
            _id: "afewtimesaday",
            option: "A few times a day",
            weight: 1,
            __v: 0,
          },
          {
            _id: "afewtimesaweek",
            option: "A few times a week",
            weight: 2,
            __v: 0,
          },
          {
            _id: "lessthanonceaweek",
            option: "Less than once a week",
            weight: 3,
            __v: 0,
          },
          {
            _id: "never",
            option: "Never",
            weight: 4,
            __v: 0,
          },
        ],
        use: true,
        _id: "A3",
        question:
          "Does your child point to indicate that s/he wants something? (e.g. a toy that is out of reach)",
        createdAt: "2021-01-20T12:19:40.707Z",
        updatedAt: "2021-01-20T12:19:40.707Z",
        __v: 0,
      },
      {
        options: [
          {
            _id: "manytimesaday",
            option: "Many times a day",
            weight: 0,
            __v: 0,
          },
          {
            _id: "afewtimesaday",
            option: "A few times a day",
            weight: 1,
            __v: 0,
          },
          {
            _id: "afewtimesaweek",
            option: "A few times a week",
            weight: 2,
            __v: 0,
          },
          {
            _id: "lessthanonceaweek",
            option: "Less than once a week",
            weight: 3,
            __v: 0,
          },
          {
            _id: "never",
            option: "Never",
            weight: 4,
            __v: 0,
          },
        ],
        use: true,
        _id: "A4",
        question:
          "Does your child point to share interest with you? (e.g. pointing at an interesting sight)",
        createdAt: "2021-01-20T12:19:40.864Z",
        updatedAt: "2021-01-20T12:19:40.864Z",
        __v: 0,
      },
      {
        options: [
          {
            _id: "manytimesaday",
            option: "Many times a day",
            weight: 0,
            __v: 0,
          },
          {
            _id: "afewtimesaday",
            option: "A few times a day",
            weight: 1,
            __v: 0,
          },
          {
            _id: "afewtimesaweek",
            option: "A few times a week",
            weight: 2,
            __v: 0,
          },
          {
            _id: "lessthanonceaweek",
            option: "Less than once a week",
            weight: 3,
            __v: 0,
          },
          {
            _id: "never",
            option: "Never",
            weight: 4,
            __v: 0,
          },
        ],
        use: true,
        _id: "A5",
        question:
          "Does your child pretend? (e.g. care for dolls, talk on a toy phone)",
        createdAt: "2021-01-20T12:19:41.023Z",
        updatedAt: "2021-01-20T12:19:41.023Z",
        __v: 0,
      },
      {
        options: [
          {
            _id: "manytimesaday",
            option: "Many times a day",
            weight: 0,
            __v: 0,
          },
          {
            _id: "afewtimesaday",
            option: "A few times a day",
            weight: 1,
            __v: 0,
          },
          {
            _id: "afewtimesaweek",
            option: "A few times a week",
            weight: 2,
            __v: 0,
          },
          {
            _id: "lessthanonceaweek",
            option: "Less than once a week",
            weight: 3,
            __v: 0,
          },
          {
            _id: "never",
            option: "Never",
            weight: 4,
            __v: 0,
          },
        ],
        use: true,
        _id: "A6",
        question: "Does your child follow where you’re looking?",
        createdAt: "2021-01-20T12:19:41.177Z",
        updatedAt: "2021-01-20T12:19:41.177Z",
        __v: 0,
      },
      {
        options: [
          {
            _id: "always",
            option: "Always",
            weight: 0,
            __v: 0,
          },
          {
            _id: "usually",
            option: "Usually",
            weight: 1,
            __v: 0,
          },
          {
            _id: "sometimes",
            option: "Sometimes",
            weight: 2,
            __v: 0,
          },
          {
            _id: "rarely",
            option: "Rarely",
            weight: 3,
            __v: 0,
          },
          {
            _id: "never",
            option: "Never",
            weight: 4,
            __v: 0,
          },
        ],
        use: true,
        _id: "A7",
        question:
          "If you or someone else in the family is visibly upset, does your child show signs of wanting to comfort them? (e.g. stroking hair, hugging them)",
        createdAt: "2021-01-20T12:19:41.330Z",
        updatedAt: "2021-01-20T12:19:41.330Z",
        __v: 0,
      },
      {
        options: [
          {
            _id: "verytypical",
            option: "Very typical",
            weight: 0,
            __v: 0,
          },
          {
            _id: "quitetypical",
            option: "Quite typical",
            weight: 1,
            __v: 0,
          },
          {
            _id: "slightlyunusualy",
            option: "Slightly unusual",
            weight: 2,
            __v: 0,
          },
          {
            _id: "veryunusual",
            option: "Very unusual",
            weight: 3,
            __v: 0,
          },
          {
            _id: "mychilddoesntspeak",
            option: "My child doesn’t speak",
            weight: 4,
            __v: 0,
          },
        ],
        use: true,
        _id: "A8",
        question: "Would you describe your child’s first words as:",
        createdAt: "2021-01-20T12:19:41.487Z",
        updatedAt: "2021-01-20T12:19:41.487Z",
        __v: 0,
      },
      {
        options: [
          {
            _id: "manytimesaday",
            option: "Many times a day",
            weight: 0,
            __v: 0,
          },
          {
            _id: "afewtimesaday",
            option: "A few times a day",
            weight: 1,
            __v: 0,
          },
          {
            _id: "afewtimesaweek",
            option: "A few times a week",
            weight: 2,
            __v: 0,
          },
          {
            _id: "lessthanonceaweek",
            option: "Less than once a week",
            weight: 3,
            __v: 0,
          },
          {
            _id: "never",
            option: "Never",
            weight: 4,
            __v: 0,
          },
        ],
        use: true,
        _id: "A9",
        question: "Does your child use simple gestures? (e.g. wave goodbye)",
        createdAt: "2021-01-20T12:19:41.641Z",
        updatedAt: "2021-01-20T12:19:41.641Z",
        __v: 0,
      },
      {
        options: [
          {
            _id: "manytimesaday",
            option: "Many times a day",
            weight: 0,
            __v: 0,
          },
          {
            _id: "afewtimesaday",
            option: "A few times a day",
            weight: 1,
            __v: 0,
          },
          {
            _id: "afewtimesaweek",
            option: "A few times a week",
            weight: 2,
            __v: 0,
          },
          {
            _id: "lessthanonceaweek",
            option: "Less than once a week",
            weight: 3,
            __v: 0,
          },
          {
            _id: "never",
            option: "Never",
            weight: 4,
            __v: 0,
          },
        ],
        use: true,
        _id: "A10",
        question: "Does your child stare at nothing with no apparent purpose?",
        createdAt: "2021-01-20T12:19:41.794Z",
        updatedAt: "2021-01-20T12:19:41.794Z",
        __v: 0,
      },
    ];
  } catch (err) {
    console.log(err);
  }
};

export default function FormControlLabelPlacement() {
  const { register, handleSubmit } = useForm();
  const [questions, setQuestions] = useState([]);
  const onSubmit = (data) => {
    console.log(data);
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
      <FormControl component="fieldset" onSubmit={handleSubmit(onSubmit)}>
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
      </FormControl>
    </Container>
  );
}
