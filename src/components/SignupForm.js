import React, { Component, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { signup } from '../actions/userActions'
import { useHistory } from "react-router";
import PropTypes from 'prop-types'

export const SignupForm = ({
  signup,
  errorMessage
}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [signupButtonDisabled, setSignupButtonDisabled] = useState(true)
  const history = useHistory()

  useEffect(() => {
    setSignupButtonDisabled(!(email && password && firstname))
  }, [email, password, firstname, lastname])

  const handleChange = (event) => {
    
    let theFunc

    if(event.target.name === 'email')           theFunc = setEmail
    else if (event.target.name === 'password')  theFunc = setPassword
    else if (event.target.name === 'firstname') theFunc = setFirstname
    else if (event.target.name === 'lastname')  theFunc = setLastname

    theFunc(event.target.value)
  }

  const submit = (event) => {
    event.preventDefault()
    signup(email, password, firstname, lastname, history)
  }

  return (
    <div>
      <h1>Sign up</h1>
      <div className="error">{ errorMessage }</div>
      <form className='form'>
        
        <label htmlFor='firstname'>First name (required)</label>
        <input type='text' name='firstname' value={ firstname } onChange={ handleChange } />

        <label htmlFor='lastname'>Last name</label>
        <input type='text' name='lastname' value={ lastname } onChange={ handleChange } />

        <label htmlFor='email'>Email (required)</label>
        <input type='text' name='email' value={ email } onChange={ handleChange } />

        <label htmlFor='password'>Password (required)</label>
        <input type='password' name='password' value={ password } onChange={ handleChange } />

        <input type='submit' value="Sign up" disabled={ signupButtonDisabled } onClick={ submit } />
      </form>
    </div>
  )
}

SignupForm.propTypes = {
  signup: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.authenticationReducer.errorMessage
  }
}

export default connect(mapStateToProps, { signup })(SignupForm)
