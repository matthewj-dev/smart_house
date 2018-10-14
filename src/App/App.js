import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter,
  Switch
} from 'react-router-dom';
import './App.css';
import Hello from './pages/Hello';
import List from './pages/List';
import RoomList from './pages/RoomList';

class App extends Component {
  render() {
    return (
      <HashRouter>
            <div>
                <h1>Simple SPA</h1>
                <ul className="header">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to='/list'>List</NavLink></li>
                    <li><NavLink to='/roomList'>Room List</NavLink></li>
                </ul>
                <div className="content">
                    <Switch>
                        <Route exact path="/" component={Hello}/>
                        <Route path='/list' component={List}/>
                        <Route path='/roomList' component={RoomList}/>
                    </Switch>
                </div>
            </div>
        </HashRouter>
    );
  }
}

export default App;