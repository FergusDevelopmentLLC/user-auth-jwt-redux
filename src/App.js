import { Route, Switch, BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import PieContainer from "./containers/PieContainer"
import PieForm from "./components/PieForm"
import store from "./store"
import PieGalleryContainer from "./containers/PieGalleryContainer"
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import Home from './components/Home'
import MyPies from "./components/MyPies"
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Provider store={ store }>
      <Router>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/login" component={ LoginForm } />
          <Route exact path="/signup" component={ SignupForm } />
          <Route exact path="/pies" exact render={(props) => (<PieGalleryContainer {...props} />)} />
          <PrivateRoute exact path="/mypies" component={ MyPies } />
          <PrivateRoute exact path="/pies/new" render={(props) => (<PieForm {...props} />)} />
          <Route exact path="/pies/:id" render={(props) => (<PieContainer {...props} id={ parseInt(props.match.params.id) }/>)} />
        </Switch>
      </Router>
    </Provider>
  )
}
export default App;
