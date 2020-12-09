import React, { Component, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { login } from '../actions/userActions'
import { useHistory } from "react-router";

export const LoginForm = ({
  login
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

  const submitForm = (event) => {
    event.preventDefault()
    console.log('email', email)
    console.log('password', password)

    
    login(email, password, history)

    //dispatch(userActions.login(email, password));

    // if(pie.title.isEmpty() || pie.pieces[0].isEmpty() || pie.pieces[1].isEmpty() || pie.pieces[2].isEmpty() || pie.pieces[3].isEmpty() || pie.pieces[4].isEmpty() || pie.pieces[5].isEmpty() || pie.pieces[6].isEmpty() || pie.pieces[7].isEmpty()) {
    //   alert('All fields are required')
    // }
    // else {
    //   createPie(pie, history)
    // }
  }

  return (
    <div>
      <h1>Log in</h1>
      <form className='form'>
        <label htmlFor='email'>Email</label>
        <input type='text' name='email' value={ email } onChange={ handleChange } />

        <label htmlFor='password'>Password</label>
        <input type='password' name='password' value={ password } onChange={ handleChange } />

        <input type='submit' value="Log in" disabled={ loginButtonDisabled } onClick={ submitForm } />
      </form>
    </div>
  )
}

LoginForm.propTypes = {
  // prop: PropTypes
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, { login })(LoginForm)
