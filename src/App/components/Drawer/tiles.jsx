// This file is shared across the demos.

import React from 'react';
import {
    NavLink,
    HashRouter,
  } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ReportIcon from '@material-ui/icons/Report';

export const UserItems = (
  <div>
      <HashRouter>
          <div>
              <NavLink exact to="/" style={{ textDecoration: 'none' }}>
            <ListItem button>
            <ListItemIcon>
                <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
            </ListItem>
        </NavLink>
        
        <NavLink to='/financial' style={{ textDecoration: 'none' }}>
            <ListItem button>
                <ListItemIcon>
                    <ReportIcon/>
                </ListItemIcon>
                <ListItemText primary='Financial'/>
            </ListItem>
        </NavLink>
        
          </div>
          
      </HashRouter>
    
  </div>
);

export const TechnicalItems = (
  <div>
      <HashRouter>
          <NavLink to='adminPage' style={{ textDecoration: 'none' }}>
        <ListItem button>
        <ListItemIcon>
            <MailIcon />
        </ListItemIcon>
        <ListItemText primary="Admin" />
        </ListItem>
      </NavLink>
      </HashRouter>

  </div>
);