import { Route, Switch, BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store"
import Navigation from './components/Navigation'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import PieForm from "./components/PieForm"
import PieGallery from "./components/PieGallery"
import PrivateRoute from './components/PrivateRoute'
import PieController from './components/PieController'

{/* <PrivateRoute exact path="/pies/new" render={(props) => (<PieForm {...props} />)} /> */}
{/* <PrivateRoute exact path="/pies/:id" render={(props) => {
            props = {
              ...props,
              id: parseInt(props.match.params.id)
            }
            return <PieController {...props} />
          }} /> */}

const App = () => {

  //https://stackoverflow.com/questions/49186183/reactjs-privateroute-that-accesses-url-parameter
  const PieControllerWrapper = props => {
    if(props.match.params.id) return <PieController {...{...props, id: parseInt(props.match.params.id)}} />
    return null
  }

  return (
    <Provider store={ store }>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={ PieGallery } />
          <Route exact path="/login" component={ LoginForm } />
          <Route exact path="/signup" component={ SignupForm } />
          <PrivateRoute exact path="/pies" component={ PieGallery } />
          <PrivateRoute exact path="/pies/new" component={ PieForm } />
          <PrivateRoute exact path="/pies/:id" component={ PieControllerWrapper } />
          

        </Switch>
      </Router>
    </Provider>
  )
}
export default App;
