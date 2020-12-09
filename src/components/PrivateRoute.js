import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

const PrivateRoute = ({ 
  component: Component,
  loggedIn,
  ...rest
}) => (
  <Route {...rest} render={props => {
    if(loggedIn) {
      return <Component {...props} />
    }
    else {
      return <Redirect to={{ pathname: '/login', state: { from: props.location } }} /> 
    }
  }} />
)

const mapStateToProps = (state) => {
  return {
    loggedIn: state.authenticationReducer.loggedIn
  }
}

export default connect(mapStateToProps, null)(PrivateRoute)