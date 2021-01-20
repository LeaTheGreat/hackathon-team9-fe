import React, { useState, useEffect } from 'react'
import '../Styles/survey.css'
//import {} from './'
import axios from 'axios'

export default function SurveyForm() {
    const [state, setState] = useState({
        q1: '',
        q2: '',
        q3: '',
        q4: '',
        q5: '',
        q6: '',
    })

    useEffect(() => {
        const getUser = async () => {
            
        }
    },[])

    const onValuesChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        let state = {
            q1,
            q2,
            q3,
            q4,
            q5,
            q6,
        }

        const res = await axios.post(`${baseURL}/api/survey/child:childid/`, state)
        console.log(state)

        window.location = '/'
    }

    const { q1, q2, q3, q4, q5, q6 } = state
    
    return (
        <div className='wrapper'>
            <h4 className='header'>Generic Header</h4>
            <form className='form' onSubmit={(e) => { onSubmit(e) }}>
                <fieldset id='q1'>
                    <h5>Does your child look at you when you call his name?</h5>
                    <label htmlFor="q1"></label>
                    <input type="radio" value='1' name='q1' onClick={ onValuesChange }/>
                    <input type="radio" value='2' name='q1' onClick={ onValuesChange }/>
                    <input type="radio" value='3' name='q1' onClick={ onValuesChange }/>
                    <input type="radio" value='4' name='q1' onClick={ onValuesChange }/>
                    <input type="radio" value='5' name='q1' onClick={ onValuesChange }/>
                </fieldset>
                <fieldset id='q2'>
                    <h5>How easy is it for you to get eye contact with your child?</h5>
                    <input type="radio" value='1' name='q2' onClick={ onValuesChange }/>
                    <input type="radio" value='2' name='q2' onClick={ onValuesChange }/>
                    <input type="radio" value='3' name='q2' onClick={ onValuesChange }/>
                    <input type="radio" value='4' name='q2' onClick={ onValuesChange }/>
                    <input type="radio" value='5' name='q2' onClick={ onValuesChange }/>
                </fieldset>
                <fieldset id='q3'>
                    <h5>Does your child point to indicate that s/he wants something?</h5>
                    <input type="radio" value='1' name='q3' onClick={ onValuesChange }/>
                    <input type="radio" value='2' name='q3' onClick={ onValuesChange }/>
                    <input type="radio" value='3' name='q3' onClick={ onValuesChange }/>
                    <input type="radio" value='4' name='q3' onClick={ onValuesChange }/>
                    <input type="radio" value='5' name='q3' onClick={ onValuesChange }/>
                </fieldset>
                <button>Submit</button>
            </form>
        </div>
    )
}
