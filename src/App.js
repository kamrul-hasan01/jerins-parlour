import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import MyBooking from './Pages/MyBooking/MyBooking/MyBooking';
import AdminHome from './Pages/Admin/AdminHome/AdminHome';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/home">
            <Home />
          </Route>
          <Route path="/myBooking">
            <MyBooking></MyBooking>
          </Route>
          <Route path="/admin">
            <AdminHome></AdminHome>
          </Route>

          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
