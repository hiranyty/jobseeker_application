import React, { Component } from 'react';
//import logo from './logo.svg';
import {Route} from 'react-router-dom'
import JobseekerHomePage from './components/pages/JobseekerHomePage'
import LoginPage  from  './components/pages/LoginPage' 
//import './App.css';

class App extends Component {
  render() {
    return (
      <div className="ui container">
      <Route path="/login" exact component= {LoginPage} /> 
      <Route path="/jobseeker" exact component= {JobseekerHomePage} />     
      </div>      
    );
  }
}

export default App;
