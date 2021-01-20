import React from 'react';
import '../Styles/survey.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function SurveyForm(props) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  try {
    //const res = await axios.post(`${baseURL}/api/survey/child:${childId}`,state)
  } catch (err) {
    console.error(err.response);
  }

  return (
    <div className="wrapper">
      <h4 className="header">Generic Header</h4>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <fieldset id="q1">
          <h5>Does your child look at you when you call his name?</h5>
          <div className="answer-wrapper">
            <input
              required
              type="radio"
              value="0"
              id="q1-0"
              name="q1"
              ref={register({ required: true })}
            />
            <label htmlFor="q1-0">Always</label>
            <input
              required
              type="radio"
              value="1"
              id="q1-1"
              name="q1"
              ref={register({ required: true })}
            />
            <label htmlFor="q1-01">Usually</label>
            <input
              required
              type="radio"
              value="2"
              id="q1-2"
              name="q1"
              ref={register({ required: true })}
            />
            <label htmlFor="q1-2">Sometimes</label>
            <input
              required
              type="radio"
              value="3"
              id="q1-3"
              name="q1"
              ref={register({ required: true })}
            />
            <label htmlFor="q1-3">Rarely</label>
            <input
              required
              type="radio"
              value="4"
              id="q1-4"
              name="q1"
              ref={register({ required: true })}
            />
            <label htmlFor="q1-4">Never</label>
          </div>
        </fieldset>
        <fieldset id="q2">
          <h5>How easy is it for you to get eye contact with your child?</h5>
          <div className="answer-wrapper">
            <input
              required
              type="radio"
              value="0"
              id="q2-0"
              name="q2"
              ref={register({ required: true })}
            />
            <label htmlFor="q2-0">Very easy</label>
            <input
              required
              type="radio"
              value="1"
              id="q2-1"
              name="q2"
              ref={register({ required: true })}
            />
            <label htmlFor="q2-1">Quite east</label>
            <input
              required
              type="radio"
              value="2"
              id="q2-2"
              name="q2"
              ref={register({ required: true })}
            />
            <label htmlFor="q2-2">Quite difficult</label>
            <input
              required
              type="radio"
              value="3"
              id="q2-3"
              name="q2"
              ref={register({ required: true })}
            />
            <label htmlFor="q2-3">Very difficult</label>
            <input
              required
              type="radio"
              value="4"
              id="q2-4"
              name="q2"
              ref={register({ required: true })}
            />
            <label htmlFor="q2-4">Never</label>
          </div>
        </fieldset>
        <fieldset id="q3">
          <h5>
            Does your child point to indicate that s/he wants something? (e.g. toy that is out of
            reach)
          </h5>
          <div className="answer-wrapper">
            <input
              required
              type="radio"
              value="0"
              id="q3-0"
              name="q3"
              ref={register({ required: true })}
            />
            <label htmlFor="q3-0">Many times a day</label>
            <input
              required
              type="radio"
              value="1"
              id="q3-1"
              name="q3"
              ref={register({ required: true })}
            />
            <label htmlFor="q3-1">A few times a day</label>
            <input
              required
              type="radio"
              value="2"
              id="q3-2"
              name="q3"
              ref={register({ required: true })}
            />
            <label htmlFor="q3-2">A few times a week</label>
            <input
              required
              type="radio"
              value="3"
              id="q3-3"
              name="q3"
              ref={register({ required: true })}
            />
            <label htmlFor="q3-3">Less then once a week</label>
            <input
              required
              type="radio"
              value="4"
              id="q3-4"
              name="q3"
              ref={register({ required: true })}
            />
            <label htmlFor="q3-4">Never</label>
          </div>
        </fieldset>
        <fieldset id="q4">
          <h5>
            Does your child point to share interest with you? (e.g. pointing at an interesting
            sight)
          </h5>
          <div className="answer-wrapper">
            <input
              required
              type="radio"
              value="0"
              id="q4-0"
              name="q4"
              ref={register({ required: true })}
            />
            <label htmlFor="q4-0">Many times a day</label>
            <input
              required
              type="radio"
              value="1"
              id="q4-1"
              name="q4"
              ref={register({ required: true })}
            />
            <label htmlFor="q4-1">A few times a day</label>
            <input
              required
              type="radio"
              value="2"
              id="q4-2"
              name="q4"
              ref={register({ required: true })}
            />
            <label htmlFor="q4-2">A few times a week</label>
            <input
              required
              type="radio"
              value="3"
              id="q4-3"
              name="q4"
              ref={register({ required: true })}
            />
            <label htmlFor="q4-3">Less then once a week</label>
            <input
              required
              type="radio"
              value="4"
              id="q4-4"
              name="q4"
              ref={register({ required: true })}
            />
            <label htmlFor="q4-4">Never</label>
          </div>
        </fieldset>
        <fieldset id="q5">
          <h5>Does your child pretend? (e.g care for dolls, talk on a toy phone)</h5>
          <div className="answer-wrapper">
            <input
              required
              type="radio"
              value="0"
              id="q5-0"
              name="q5"
              ref={register({ required: true })}
            />
            <label htmlFor="q5-0">Many times a day</label>
            <input
              required
              type="radio"
              value="1"
              id="q5-1"
              name="q5"
              ref={register({ required: true })}
            />
            <label htmlFor="q5-1">A few times a day</label>
            <input
              required
              type="radio"
              value="2"
              id="q5-2"
              name="q5"
              ref={register({ required: true })}
            />
            <label htmlFor="q5-2">A few times a week</label>
            <input
              required
              type="radio"
              value="3"
              id="q5-3"
              name="q5"
              ref={register({ required: true })}
            />
            <label htmlFor="q5-3">Less then once a week</label>
            <input
              required
              type="radio"
              value="4"
              id="q5-4"
              name="q5"
              ref={register({ required: true })}
            />
            <label htmlFor="q5-4">Never</label>
          </div>
        </fieldset>
        <fieldset id="q6">
          <h5>Does your child follow where you're looking?</h5>
          <div className="answer-wrapper">
            <input
              required
              type="radio"
              value="0"
              id="q6-0"
              name="q6"
              ref={register({ required: true })}
            />
            <label htmlFor="q6-0">Many times a day</label>
            <input
              required
              type="radio"
              value="1"
              id="q6-1"
              name="q6"
              ref={register({ required: true })}
            />
            <label htmlFor="q6-1">A few times a day</label>
            <input
              required
              type="radio"
              value="2"
              id="q6-2"
              name="q6"
              ref={register({ required: true })}
            />
            <label htmlFor="q6-2">A few times a week</label>
            <input
              required
              type="radio"
              value="3"
              id="q6-3"
              name="q6"
              ref={register({ required: true })}
            />
            <label htmlFor="q6-3">Less then once a week</label>
            <input
              required
              type="radio"
              value="4"
              id="q6-4"
              name="q6"
              ref={register({ required: true })}
            />
            <label htmlFor="q6-4">Never</label>
          </div>
        </fieldset>
        <fieldset id="q7">
          <h5>
            If you or someone else in the family is visibly upset, does your child show signs of
            wanting to comfort them? (e.g. stroking hair, hugging them)
          </h5>
          <div className="answer-wrapper">
            <input
              required
              type="radio"
              value="0"
              id="q7-0"
              name="q7"
              ref={register({ required: true })}
            />
            <label htmlFor="q7-0">Always</label>
            <input
              required
              type="radio"
              value="1"
              id="q7-1"
              name="q7"
              ref={register({ required: true })}
            />
            <label htmlFor="q7-1">Usually</label>
            <input
              required
              type="radio"
              value="2"
              id="q7-2"
              name="q7"
              ref={register({ required: true })}
            />
            <label htmlFor="q7-2">Sometimes</label>
            <input
              required
              type="radio"
              value="3"
              id="q7-3"
              name="q7"
              ref={register({ required: true })}
            />
            <label htmlFor="q7-3">Rarely</label>
            <input
              required
              type="radio"
              value="4"
              id="q7-4"
              name="q7"
              ref={register({ required: true })}
            />
            <label htmlFor="q7-4">Never</label>
          </div>
        </fieldset>
        <fieldset id="q8">
          <h5>Would you describe your child's first words as:</h5>
          <div className="answer-wrapper">
            <input
              required
              type="radio"
              value="0"
              id="q8-0"
              name="q8"
              ref={register({ required: true })}
            />
            <label htmlFor="q8-0">Very typical</label>
            <input
              required
              type="radio"
              value="1"
              id="q8-1"
              name="q8"
              ref={register({ required: true })}
            />
            <label htmlFor="q8-1">Quite typical</label>
            <input
              required
              type="radio"
              value="2"
              id="q8-2"
              name="q8"
              ref={register({ required: true })}
            />
            <label htmlFor="q8-2">Slightly typical</label>
            <input
              required
              type="radio"
              value="3"
              id="q8-3"
              name="q8"
              ref={register({ required: true })}
            />
            <label htmlFor="q8-3">Very unusual</label>
            <input
              required
              type="radio"
              value="4"
              id="q8-4"
              name="q8"
              ref={register({ required: true })}
            />
            <label htmlFor="q8-4">My child doesn't speak</label>
          </div>
        </fieldset>
        <fieldset id="q9">
          <h5>Does your child use simple gestures? (e.g. wave goodbye)</h5>
          <div className="answer-wrapper">
            <input
              required
              type="radio"
              value="0"
              id="q9-0"
              name="q9"
              ref={register({ required: true })}
            />
            <label htmlFor="q9-0">Many times a day</label>
            <input
              required
              type="radio"
              value="1"
              id="q9-1"
              name="q9"
              ref={register({ required: true })}
            />
            <label htmlFor="q9-1">A few times a day</label>
            <input
              required
              type="radio"
              value="2"
              id="q9-2"
              name="q9"
              ref={register({ required: true })}
            />
            <label htmlFor="q9-2">A few times a week</label>
            <input
              required
              type="radio"
              value="3"
              id="q9-3"
              name="q9"
              ref={register({ required: true })}
            />
            <label htmlFor="q9-3">Less then once a week</label>
            <input
              required
              type="radio"
              value="4"
              id="q9-4"
              name="q9"
              ref={register({ required: true })}
            />
            <label htmlFor="q9-4">Never</label>
          </div>
        </fieldset>
        <fieldset id="q10">
          <h5>Does your child stare at nothing with no apparent purpose?</h5>
          <div className="answer-wrapper">
            <input
              required
              type="radio"
              value="0"
              id="q10-0"
              name="q10"
              ref={register({ required: true })}
            />
            <label htmlFor="q10-0">Many times a day</label>
            <input
              required
              type="radio"
              value="1"
              id="q10-1"
              name="q10"
              ref={register({ required: true })}
            />
            <label htmlFor="q10-1">A few times a day</label>
            <input
              required
              type="radio"
              value="2"
              id="q10-2"
              name="q10"
              ref={register({ required: true })}
            />
            <label htmlFor="q10-2">A few times a week</label>
            <input
              required
              type="radio"
              value="3"
              id="q10-3"
              name="q10"
              ref={register({ required: true })}
            />
            <label htmlFor="q10-3">Less then once a week</label>
            <input
              required
              type="radio"
              value="4"
              id="q10-4"
              name="q10"
              ref={register({ required: true })}
            />
            <label htmlFor="q10-4">Never</label>
          </div>
        </fieldset>
        <button className="submit">Submit</button>
      </form>
    </div>
  );
}
