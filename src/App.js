import React from 'react';

import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import  Register  from "./components/register/Register";
import Adminlogin from './components/admin/Adminlogin';
import Userlogin from './components/user/Userlogin';
import Home from './components/home/Home';
import Admindashboard from './components/admin/Admindashboard';
import Seeallusers from './components/Seeallusers/Seeallusers'
import Userdashboard from "./components/user/Userdashboard";
function App() {
  return (
    <div className="App">
    <Router>
   
   <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/userlogin" component={Userlogin} />
     <Route exact path="/adminlogin" component={Adminlogin} />
     <Route exact path="/adduser" component={Register} />
     <Route exact path="/admindashboard" component={Admindashboard} />
     <Route exact path="/seeallusers" component={Seeallusers} />
     <Route exact path="/userdashboard" component={Userdashboard} />
   </Switch>


</Router>
    </div>
  );
}

export default App;
