import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';
import ClipboardManager from './ClipboardManager';
import NoteManager from './NoteManager';
import TaskTracker from './TaskTracker';
import TimeUsageChart from './TimeUsageChart';
import CountdownTimer from './CountdownTimer';
import MyCalendar from './MyCalendar';
import './styles/App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  mainContent: {
    display: 'flex',
    marginTop: theme.spacing(2),
  },
  leftPanel: {
    width: 200,
    borderRight: '1px solid #ddd',
    padding: theme.spacing(2),
  },
  rightPanel: {
    flex: 1,
    padding: theme.spacing(2),
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            TaskMaster
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <div className={classes.mainContent}>
          <div className={classes.leftPanel}>
            <ClipboardManager />
          </div>
          <div className={classes.rightPanel}>
            <NoteManager />
            <TaskTracker />
            <TimeUsageChart />
            <CountdownTimer />
            <MyCalendar />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default App;