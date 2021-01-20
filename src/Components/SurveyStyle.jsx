import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Button, Container, makeStyles, Typography } from '@material-ui/core';
import { useForm } from 'react-hook-form';
const useStyles = makeStyles(() => ({
  container: {
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  heading: {
    marginBottom: '20px',
  },
  title: {
    color: '#000',
    fontSize: '18px',
    fontWeight: '500',
  },
  formGroup: {
    marginBottom: '10px',
  },
}));

export default function FormControlLabelPlacement() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="md">
      <Typography className={classes.heading} variant="h2">
        Survey
      </Typography>
      <FormControl component="fieldset" onSubmit={handleSubmit(onSubmit)}>
        <FormLabel className={classes.title} component="legend">
          Does your child look at you when you call his name?
        </FormLabel>
        <RadioGroup
          row
          aria-label="position"
          className={classes.formGroup}
          name="q1"
          defaultValue="top"
        >
          <FormControlLabel
            value="1"
            control={<Radio inputRef={register({ required: true })} color="primary" />}
            label="Always"
            labelPlacement="start"
          />
          <FormControlLabel
            value="2"
            control={<Radio inputRef={register({ required: true })} color="primary" />}
            label="Usually"
            labelPlacement="start"
          />
          <FormControlLabel
            value="3"
            control={<Radio inputRef={register({ required: true })} color="primary" />}
            label="Sometimes"
            labelPlacement="start"
          />
          <FormControlLabel
            value="4"
            control={<Radio inputRef={register({ required: true })} color="primary" />}
            label="Rarely"
            labelPlacement="start"
          />
          <FormControlLabel
            value="5"
            control={<Radio inputRef={register({ required: true })} color="primary" />}
            label="Never"
            labelPlacement="start"
          />
        </RadioGroup>

        <FormLabel className={classes.title} component="legend">
          How easy is it for you to get eye contact with your child?
        </FormLabel>
        <RadioGroup
          row
          aria-label="position"
          className={classes.formGroup}
          name="q2"
          defaultValue="top"
        >
          <FormControlLabel
            value="1"
            control={<Radio inputRef={register({ required: true })} color="primary" />}
            label="Very Easy"
            labelPlacement="start"
          />
          <FormControlLabel
            value="2"
            control={<Radio inputRef={register({ required: true })} color="primary" />}
            label="Quite Easy"
            labelPlacement="start"
          />
          <FormControlLabel
            value="3"
            control={<Radio inputRef={register({ required: true })} color="primary" />}
            label="Quite Difficult"
            labelPlacement="start"
          />
          <FormControlLabel
            value="4"
            control={<Radio inputRef={register({ required: true })} color="primary" />}
            label="Very Difficult"
            labelPlacement="start"
          />
          <FormControlLabel
            value="5"
            control={<Radio inputRef={register({ required: true })} color="primary" />}
            label="Never"
            labelPlacement="start"
          />
        </RadioGroup>

        <FormLabel className={classes.title} component="legend">
          Does your child point to indicate that s/he wants something? (e.g. toy that is out of
          reach)
        </FormLabel>
        <RadioGroup
          row
          aria-label="position"
          className={classes.formGroup}
          name="q3"
          defaultValue="top"
        >
          <FormControlLabel
            value="1"
            control={<Radio inputRef={register({ required: true })} color="primary" />}
            label="Many Times a day"
            labelPlacement="start"
          />
          <FormControlLabel
            value="2"
            control={<Radio inputRef={register({ required: true })} color="primary" />}
            label="A few times a day"
            labelPlacement="start"
          />
          <FormControlLabel
            value="3"
            control={<Radio inputRef={register({ required: true })} color="primary" />}
            label="A few times a week"
            labelPlacement="start"
          />
          <FormControlLabel
            value="4"
            control={<Radio inputRef={register({ required: true })} color="primary" />}
            label="Less than once a week"
            labelPlacement="start"
          />
          <FormControlLabel
            value="5"
            control={<Radio inputRef={register({ required: true })} color="primary" />}
            label="Never"
            labelPlacement="start"
          />
        </RadioGroup>

        <FormLabel className={classes.title} component="legend">
          Does your child point to share interest with you? (e.g. pointing at an interesting sight)
        </FormLabel>
        <RadioGroup
          row
          aria-label="position"
          className={classes.formGroup}
          name="q4"
          defaultValue="top"
        >
          <FormControlLabel
            value="1"
            control={<Radio inputRef={register({ required: true })} color="primary" />}
            label="Many Times a day"
            labelPlacement="start"
          />
          <FormControlLabel
            value="2"
            control={<Radio inputRef={register({ required: true })} color="primary" />}
            label="A few times a day"
            labelPlacement="start"
          />
          <FormControlLabel
            value="3"
            control={<Radio inputRef={register({ required: true })} color="primary" />}
            label="A few times a week"
            labelPlacement="start"
          />
          <FormControlLabel
            value="4"
            control={<Radio inputRef={register({ required: true })} color="primary" />}
            label="Less than once a week"
            labelPlacement="start"
          />
          <FormControlLabel
            value="5"
            control={<Radio inputRef={register({ required: true })} color="primary" />}
            label="Never"
            labelPlacement="start"
          />
        </RadioGroup>

        <FormLabel className={classes.title} component="legend">
          Does your child pretend? (e.g care for dolls, talk on a toy phone)
        </FormLabel>
        <RadioGroup
          row
          aria-label="position"
          className={classes.formGroup}
          name="q5"
          defaultValue="top"
        >
          <FormControlLabel
            value="1"
            control={<Radio inputRef={register({ required: true })} color="primary" />}
            label="Many Times a day"
            labelPlacement="start"
          />
          <FormControlLabel
            value="2"
            control={<Radio inputRef={register({ required: true })} color="primary" />}
            label="A few times a day"
            labelPlacement="start"
          />
          <FormControlLabel
            value="3"
            control={<Radio inputRef={register({ required: true })} color="primary" />}
            label="A few times a week"
            labelPlacement="start"
          />
          <FormControlLabel
            value="4"
            control={<Radio inputRef={register({ required: true })} color="primary" />}
            label="Less than once a week"
            labelPlacement="start"
          />
          <FormControlLabel
            value="5"
            control={<Radio inputRef={register({ required: true })} color="primary" />}
            label="Never"
            labelPlacement="start"
          />
        </RadioGroup>

        <FormLabel className={classes.title} component="legend">
          Does your child follow where you're looking?
        </FormLabel>
        <RadioGroup
          row
          aria-label="position"
          className={classes.formGroup}
          name="q6"
          defaultValue="top"
        >
          <FormControlLabel
            value="1"
            control={<Radio inputRef={register({ required: true })} color="primary" />}
            label="Many Times a day"
            labelPlacement="start"
          />
          <FormControlLabel
            value="2"
            control={<Radio inputRef={register({ required: true })} color="primary" />}
            label="A few times a day"
            labelPlacement="start"
          />
          <FormControlLabel
            value="3"
            control={<Radio inputRef={register({ required: true })} color="primary" />}
            label="A few times a week"
            labelPlacement="start"
          />
          <FormControlLabel
            value="4"
            control={<Radio inputRef={register({ required: true })} color="primary" />}
            label="Less than once a week"
            labelPlacement="start"
          />
          <FormControlLabel
            value="5"
            control={<Radio inputRef={register({ required: true })} color="primary" />}
            label="Never"
            labelPlacement="start"
          />
        </RadioGroup>

        <FormLabel className={classes.title} component="legend">
          If you or someone else in the family is visibly upset, does your child show signs of
          wanting to comfort them? (e.g. stroking hair, hugging them)
        </FormLabel>
        <RadioGroup
          row
          aria-label="position"
          className={classes.formGroup}
          name="q7"
          defaultValue="top"
        >
          <FormControlLabel
            value="1"
            control={<Radio inputRef={register({ required: true })} color="primary" />}
            label="Always"
            labelPlacement="start"
          />
          <FormControlLabel
            value="2"
            control={<Radio inputRef={register({ required: true })} color="primary" />}
            label="Sometimes"
            labelPlacement="start"
          />
          <FormControlLabel
            value="3"
            control={<Radio inputRef={register({ required: true })} color="primary" />}
            label="Usually"
            labelPlacement="start"
          />
          <FormControlLabel
            value="4"
            control={<Radio inputRef={register({ required: true })} color="primary" />}
            label="Rarely"
            labelPlacement="start"
          />
          <FormControlLabel
            value="5"
            control={<Radio inputRef={register({ required: true })} color="primary" />}
            label="Never"
            labelPlacement="start"
          />
        </RadioGroup>

        <FormLabel className={classes.title} component="legend">
          Would you describe your child's first words as:
        </FormLabel>
        <RadioGroup
          row
          aria-label="position"
          className={classes.formGroup}
          name="q8"
          defaultValue="top"
        >
          <FormControlLabel
            value="1"
            control={<Radio inputRef={register({ required: true })} color="primary" />}
            label="Very Typical"
            labelPlacement="start"
          />
          <FormControlLabel
            value="2"
            control={<Radio inputRef={register({ required: true })} color="primary" />}
            label="Quite Typical"
            labelPlacement="start"
          />
          <FormControlLabel
            value="3"
            control={<Radio inputRef={register({ required: true })} color="primary" />}
            label="Slightly Typical"
            labelPlacement="start"
          />
          <FormControlLabel
            value="4"
            control={<Radio inputRef={register({ required: true })} color="primary" />}
            label="Very Unusual"
            labelPlacement="start"
          />
          <FormControlLabel
            value="5"
            control={<Radio inputRef={register({ required: true })} color="primary" />}
            label="My child doesn't speak"
            labelPlacement="start"
          />
        </RadioGroup>

        <FormLabel className={classes.title} component="legend">
          Does your child use simple gestures? (e.g. wave goodbye)
        </FormLabel>
        <RadioGroup
          row
          aria-label="position"
          className={classes.formGroup}
          name="q9"
          defaultValue="top"
        >
          <FormControlLabel
            value="1"
            control={<Radio inputRef={register({ required: true })} color="primary" />}
            label="Many Times a day"
            labelPlacement="start"
          />
          <FormControlLabel
            value="2"
            control={<Radio inputRef={register({ required: true })} color="primary" />}
            label="A few times a day"
            labelPlacement="start"
          />
          <FormControlLabel
            value="3"
            control={<Radio inputRef={register({ required: true })} color="primary" />}
            label="A few times a week"
            labelPlacement="start"
          />
          <FormControlLabel
            value="4"
            control={<Radio inputRef={register({ required: true })} color="primary" />}
            label="Less than once a week"
            labelPlacement="start"
          />
          <FormControlLabel
            value="5"
            control={<Radio inputRef={register({ required: true })} color="primary" />}
            label="Never"
            labelPlacement="start"
          />
        </RadioGroup>

        <FormLabel className={classes.title} component="legend">
          Does your child stare at nothing with no apparent purpose?
        </FormLabel>
        <RadioGroup
          row
          aria-label="position"
          className={classes.formGroup}
          name="q10"
          defaultValue="top"
        >
          <FormControlLabel
            value="1"
            control={<Radio inputRef={register({ required: true })} color="primary" />}
            label="Many Times a day"
            labelPlacement="start"
          />
          <FormControlLabel
            value="2"
            control={<Radio inputRef={register({ required: true })} color="primary" />}
            label="A few times a day"
            labelPlacement="start"
          />
          <FormControlLabel
            value="3"
            control={<Radio inputRef={register({ required: true })} color="primary" />}
            label="A few times a week"
            labelPlacement="start"
          />
          <FormControlLabel
            value="4"
            control={<Radio inputRef={register({ required: true })} color="primary" />}
            label="Less than once a week"
            labelPlacement="start"
          />
          <FormControlLabel
            value="5"
            control={<Radio inputRef={register({ required: true })} color="primary" />}
            label="Never"
            labelPlacement="start"
          />
        </RadioGroup>
        <Button type="submit" variant="contained" color="primary">
          SUBMIT
        </Button>
      </FormControl>
    </Container>
  );
}
