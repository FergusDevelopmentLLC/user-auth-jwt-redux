import { Route, Switch, BrowserRouter as Router } from "react-router-dom"
import { Link } from 'react-router-dom'
import { Provider } from "react-redux"
import PieContainer from "./containers/PieContainer"
import PieForm from "./components/PieForm"
import store from "./store"
import PieGallery from "./components/PieGallery"
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import Home from './components/Home'
import MyPies from "./components/MyPies"
import PrivateRoute from './components/PrivateRoute'


const App = () => {
  return (
    <Provider store={ store }>
      <Router>
        <nav>
          <div><Link to={"/home"}>Home</Link></div>
          <div><Link to={"/login"}>Login</Link></div>
          <div><Link to={"/logout"}>Logout</Link></div>
          <div><Link to={"/signup"}>Signup</Link></div>
          <div><Link to={"/pies"}>Pies</Link></div>
        </nav>
        <Switch>
          <Route exact path="/" component={ PieGallery } />
          <Route exact path="/login" component={ LoginForm } />
          <Route exact path="/signup" component={ SignupForm } />
          <PrivateRoute exact path="/mypies" component={ MyPies } />
          <PrivateRoute exact path="/pies/new" render={(props) => (<PieForm {...props} />)} />
          <Route exact path="/pies/:id" render={(props) => (<PieContainer {...props} id={ parseInt(props.match.params.id) }/>)} />
        </Switch>
      </Router>
    </Provider>
  )
}
export default App;
