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
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';

export const mailFolderListItems = (
  <div>
      <HashRouter>
          <div>
              <NavLink exact to="/">
            <ListItem button>
            <ListItemIcon>
                <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
            </ListItem>
        </NavLink>
        <NavLink to="/List">
            <ListItem button>
            <ListItemIcon>
                <StarIcon />
            </ListItemIcon>
            <ListItemText primary="List" />
            </ListItem>
        </NavLink>
        <NavLink to='/roomList'>
        <ListItem button>
        <ListItemIcon>
            <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Room List" />
        </ListItem>
        </NavLink>
        <NavLink to='/test'>
        <ListItem button>
        <ListItemIcon>
            <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Welcome Test" />
        </ListItem>
        </NavLink>
        
          </div>
          
      </HashRouter>
    
  </div>
);

export const otherMailFolderListItems = (
  <div>
      <HashRouter>
          <NavLink to='adminPage'>
        <ListItem button>
        <ListItemIcon>
            <MailIcon />
        </ListItemIcon>
        <ListItemText primary="Admin" />
        </ListItem>
      </NavLink>
      </HashRouter>
      
    
    {/* <ListItem button>
      <ListItemIcon>
        <DeleteIcon />
      </ListItemIcon>
      <ListItemText primary="Trash" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ReportIcon />
      </ListItemIcon>
      <ListItemText primary="Spam" />
    </ListItem> */}
  </div>
);