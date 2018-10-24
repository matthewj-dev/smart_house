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
import WelcomePage from './pages/WelcomeTest';
import AdminPage from './pages/AdminPage';

class App extends Component {
  render() {
    return (
      <HashRouter>
            <div>
                <h1>Smart Home App</h1>
                <ul className="header">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to='/list'>List</NavLink></li>
                    <li><NavLink to='/roomList'>Room List</NavLink></li>
                    <li><NavLink to='/test'>Welcome Test</NavLink></li>
                    <li><NavLink to='/adminPage'>Admin Page</NavLink></li>
                </ul>
                <div className="content">
                    <Switch>
                        <Route exact path="/" component={Hello} />
                        <Route path='/list' component={List} />
                        <Route path='/roomList' component={RoomList} />
                        <Route path='/adminPage' component={AdminPage} />
                        <Route path='/test' component={WelcomePage} />
                    </Switch>
                </div>
            </div>
        </HashRouter>
    );
  }
}

export default App;