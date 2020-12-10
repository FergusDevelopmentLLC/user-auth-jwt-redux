import React, { Component, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/userActions'
import { useHistory } from "react-router";
import PropTypes from 'prop-types'

export const LoginForm = ({
  login,
  errorMessage
}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginButtonDisabled, setLoginButtonDisabled] = useState(true)
  const history = useHistory()

  useEffect(() => {
    setLoginButtonDisabled(!(email && password))
  }, [email, password])

  const handleChange = (event) => {
    
    if(event.target.name === 'email') {
      setEmail(event.target.value)
    }
    else if (event.target.name === 'password') {
      setPassword(event.target.value)
    }
  }

  const submit = (event) => {
    event.preventDefault()
    login(email, password, history)
  }

  return (
    <div>
      <h1>Log in</h1>
      <div className="error">{ errorMessage }</div>
      <form className='form'>
        <label htmlFor='email'>Email</label>
        <input type='text' name='email' value={ email } onChange={ handleChange } />

        <label htmlFor='password'>Password</label>
        <input type='password' name='password' value={ password } onChange={ handleChange } />

        <input type='submit' value="Log in" disabled={ loginButtonDisabled } onClick={ submit } />
      </form>
    </div>
  )
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.authenticationReducer.errorMessage
  }
}

export default connect(mapStateToProps, { login })(LoginForm)
