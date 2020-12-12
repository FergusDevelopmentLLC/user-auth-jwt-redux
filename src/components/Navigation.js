import React from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../actions/userActions'
import { useSelector, useDispatch} from 'react-redux'

const Navigation = () => {
  
  const loggedIn = useSelector(state => state.authenticationReducer.loggedIn)
  const user = useSelector(state => state.authenticationReducer.user)
  const dispatch = useDispatch()

  const getLinks = () => {
    if(loggedIn) {
      return (
        <>
        <div><Link to={"/pies"}>My pies</Link></div>
        <div><Link to={"/pies/new"}>New pie</Link></div>
        <div><Link to={'/'} onClick={() => dispatch(logout())}>Logout</Link></div>
        </>
      )
    }
    else {
      return (
        <>
        <div><Link to={"/login"}>Login</Link></div>
        <div><Link to={"/signup"}>Signup</Link></div>
        </>
      )
    }
  }

  const getWelcome = () => {
    if(loggedIn) {
      return (
        <div className="logged-in-name">Welcome back, {user.first_name}</div>
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

export default Navigation