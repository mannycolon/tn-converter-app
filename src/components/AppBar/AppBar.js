import React, { useState, useContext } from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  ApplicationBar,
  FileContextProvider,
} from 'gitea-react-toolkit';
import Folder from '@material-ui/icons/Folder';
import ListIcon from '@material-ui/icons/List';
import { appName } from '../../common/constants';
import { TsvDataContext } from '../../state/contexts/TsvDataContextProvider';

export default function AppBar({
  toggleProjects,
}) {
  const [filepath, setFilepath] = useState();
  const { removeProject } = useContext(TsvDataContext);

  const onProjectPage = () => {
    removeProject();
    toggleProjects(true);
  }

  const drawerMenu = (
    <List>
      <ListItem
        button
        key='My Projects'
        onClick={onProjectPage}
      >
        <ListItemIcon style={{ margin: 0 }}>
          <ListIcon />
        </ListItemIcon>
        <ListItemText primary='My Projects' />
      </ListItem>
      <ListItem
        button
        key='New Project'
        onClick={() => {
          removeProject();
          toggleProjects(false);
        }}
      >
        <ListItemIcon style={{ margin: 0 }}>
          <Folder />
        </ListItemIcon>
        <ListItemText primary='New Project' />
      </ListItem>
    </List>
  );

  return (
    <FileContextProvider
      filepath={filepath}
      onFilepath={setFilepath}
    >
      <ApplicationBar
        title={<div style={{ cursor: 'pointer' }} onClick={onProjectPage}>{appName}</div>}
        drawerMenu={drawerMenu}
      />
    </FileContextProvider>
  );
};
