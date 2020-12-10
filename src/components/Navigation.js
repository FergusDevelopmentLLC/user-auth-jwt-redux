import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav>
      <div><Link to={"/"}>Home</Link></div>
      <div><Link to={"/login"}>Login</Link></div>
      <div><Link to={"/logout"}>Logout</Link></div>
      <div><Link to={"/signup"}>Signup</Link></div>
    </nav>
  )
}

export default Navigation