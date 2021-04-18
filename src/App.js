import './App.css';
import Home from './Components/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Components/Login/Login';
import Order from './Components/Order/Order';
import Admin from './Components/Admin/Admin/Admin';
import AddService from './Components/Admin/AddService/AddService';
import AddReview from './Components/Admin/AddReview/AddReview';
import { createContext, useState } from 'react';

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

          <Route path="/order">
          <Order></Order>
          </Route>

          <Route path="/admin">
          <Admin></Admin>
          </Route>

          <Route path="/addService">
          <AddService></AddService>
          </Route>

          <Route path="/addReview">
          <AddReview></AddReview>
          </Route>


        </Switch>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
