import React, { Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import Loginform from "./components/Login/Login";
import { Dashboard } from "./components/Sidebar/Dashboard"
import DatatablePage from './components/Sidebar/Datatable';
import LoginBtn from "./components/Login/Loginbutton";

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <div className="powerOff">
            <LoginBtn/>
          </div>
          <Switch>
          <Route path="/" exact component={Loginform}/>
          <Route path='/sidebar' component={Sidebar} />
          <Route path="/sidebar/main"  component={Dashboard}/>
          <Route path='/sidebar/table'  component={DatatablePage} />
          </Switch>
        </div>
      </Router>
      // <Appsec/>
    );
  }
}

export default App;
