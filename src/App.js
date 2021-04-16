import './App.css';
import Home from './Components/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Order from './Components/Order/Order';
import Admin from './Components/Admin/Admin/Admin';
import AddService from './Components/Admin/AddService/AddService';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>

          <Route path="/login">
          <Login></Login>
          </Route>

          <Route path="/dashboard">
          <Dashboard></Dashboard>
          </Route>

          <Route path="/order">
          <Order></Order>
          </Route>

          <Route path="/admin">
          <Admin></Admin>
          </Route>

          <Route path="/addService">
          <AddService></AddService>
          </Route>


        </Switch>
      </Router>
    </div>
  );
}

export default App;
