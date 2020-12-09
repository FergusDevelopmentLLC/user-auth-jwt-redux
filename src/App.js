import { Route, Switch, BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import PieContainer from "./containers/PieContainer"
import PieForm from "./components/PieForm"
import store from "./store"
import PieGalleryContainer from "./containers/PieGalleryContainer"
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import MyPies from "./components/MyPies"
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Provider store={ store }>
      <Router>
        <Switch>
          <PrivateRoute exact path="/mypies" component={ MyPies } />
          <Route exact path="/" component={ Home } />
          <Route path="/login" component={ LoginForm } />
          <Route path="/pies" exact render={(props) => (<PieGalleryContainer {...props} />)} />
          <PrivateRoute path="/pies/new" exact render={(props) => (<PieForm {...props} />)} />
          <Route path="/pies/:id" exact render={(props) => (<PieContainer {...props} id={ parseInt(props.match.params.id) }/>)} />
        </Switch>
      </Router>
    </Provider>
  )
}
export default App;
