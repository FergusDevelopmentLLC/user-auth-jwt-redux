import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

{/* */}
const PrivateRoute = ({ 
  component: Component,
  user,
  ...rest
}) => (
  <Route {...rest} render={props => {
    if(user) {
      return <Component {...props} />
    }
    else {
      return <Redirect to={{ pathname: '/login', state: { from: props.location } }} /> 
    }
  }} />
)

const mapStateToProps = (state) => {
  return {
    user: state.authenticationReducer.user
  }
}

export default connect(mapStateToProps, null)(PrivateRoute)