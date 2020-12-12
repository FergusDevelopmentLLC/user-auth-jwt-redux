import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../actions/userActions'

const Navigation = ({
  loggedIn = false,
  user = {},
  logout
}) => {

  const getLinks = () => {
    if(loggedIn) {
      return (
        <>
        <div><Link to={"/"}>Home</Link></div>
        <div><Link to={"/pies"}>My pies</Link></div>
        <div><Link to={"/pies/new"}>New pie</Link></div>
        <div><Link to={'/'} onClick={() => logout()}>Logout</Link></div>
        </>
      )
    }
    else {
      return (
        <>
        <div><Link to={"/"}>Home</Link></div>
        <div><Link to={"/login"}>Login</Link></div>
        <div><Link to={"/signup"}>Signup</Link></div>
        </>
      )
    }
  }

  const getWelcome = () => {
    if(loggedIn) {
      return (
        <div className="logged-in-name">Welcome back, {user.firstName}</div>
      )
    }
    else {
      return (
        null
      )
    }
  }

  return (
    <nav>
      { getLinks() }
      { getWelcome() }
    </nav>
  )
}

Navigation.propTypes = {
  loggedIn: PropTypes.bool,
  user: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.authenticationReducer.loggedIn,
    user: state.authenticationReducer.user
  }
}

export default connect(mapStateToProps, { logout })(Navigation)