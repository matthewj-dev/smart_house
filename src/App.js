import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom';
import './App.css';
import Hello from './Hello';

class App extends Component {
  render() {
    return (
      <HashRouter>
            <div>
                <h1>Simple SPA</h1>
                <ul className="header">
                    <li><NavLink exact to="/">Home</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={Hello}/>
                </div>
            </div>
        </HashRouter>
    );
  }
}

export default App;
