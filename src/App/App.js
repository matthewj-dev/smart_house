import React, { Component } from 'react';
import 'typeface-roboto';
import './App.css';
import Drawer from './components/Drawer/Drawer';

class App extends Component {
  render() {
    return (
        <Drawer/>

    //   <HashRouter>
    //         <div>
    //             <h1>Smart Home App</h1>
    //             <ul className="header">
    //                 <li><NavLink exact to="/">Home</NavLink></li>
    //                 <li><NavLink to='/list'>List</NavLink></li>
    //                 <li><NavLink to='/roomList'>Room List</NavLink></li>
    //                 <li><NavLink to='/test'>Welcome Test</NavLink></li>
    //                 <li><NavLink to='/adminPage'>Admin Page</NavLink></li>
    //             </ul>
    //             <div className="content">
    //                 <Switch>
    //                     <Route exact path="/" component={Hello} />
    //                     <Route path='/list' component={List} />
    //                     <Route path='/roomList' component={RoomList} />
    //                     <Route path='/adminPage' component={AdminPage} />
    //                     <Route path='/test' component={WelcomePage} />
    //                 </Switch>
    //             </div>
    //         </div>
    //     </HashRouter>
    );
  }
}

export default App;
