import './App.css';
import Home from './Components/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Components/Login/Login';
import Order from './Components/Order/Order';
import Admin from './Components/Admin/Admin/Admin';
import AddService from './Components/Admin/AddService/AddService';
import AddReview from './Components/Admin/AddReview/AddReview';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import CustomersOrders from './Components/CustomersOrders/CustomersOrders';
import AllService from './Components/Admin/Allservice/AllService';

export const UserContext = createContext();

function App() {

  const [ loggedInUser, setLoggedInUser ] = useState({});

  return (
    <div className="App Container">
      <UserContext.Provider value ={[ loggedInUser, setLoggedInUser]} >
      <Router>
        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>

          <Route path="/login">
          <Login></Login>
          </Route>

          <PrivateRoute exact path="/order/:id">
          <Order></Order>
          </PrivateRoute>

          <PrivateRoute path="/admin">
          <Admin></Admin>
          </PrivateRoute>

          <Route path="/addService">
          <AddService></AddService>
          </Route>

          <Route path="/addReview">
          <AddReview></AddReview>
          </Route>

          <Route path="/customersOrders">
          <CustomersOrders></CustomersOrders>
          </Route>

          <Route path="/services">
          <AllService></AllService>
          </Route>

        </Switch>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
