import { Route, Switch, BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store"
import Navigation from './components/Navigation'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import PieForm from "./components/PieForm"
import PieGallery from "./components/PieGallery"
import MyPies from "./components/MyPies"
import PrivateRoute from './components/PrivateRoute'
import PieController from './components/PieController'


const App = () => {
  return (
    <Provider store={ store }>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={ PieGallery } />
          <Route exact path="/login" component={ LoginForm } />
          <Route exact path="/signup" component={ SignupForm } />
          <PrivateRoute exact path="/mypies" component={ MyPies } />
          <PrivateRoute exact path="/pies/new" render={(props) => (<PieForm {...props} />)} />
          <Route exact path="/pies/:id" render={(props) => (<PieController {...props} id={ parseInt(props.match.params.id) }/>)} />
        </Switch>
      </Router>
    </Provider>
  )
}
export default App;
