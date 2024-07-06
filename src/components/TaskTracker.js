import React, { useState, useEffect } from 'react';
import { TextField, Button, List, ListItem, ListItemText } from '@material-ui/core';
import taskService from '../services/taskService';

const TaskTracker = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [timeSpent, setTimeSpent] = useState(0);

  useEffect(() => {
    taskService.getAll().then(initialTasks => setTasks(initialTasks));
  }, []);

  const addTask = () => {
    taskService.create({ name: taskName, timeSpent }).then(returnedTask => {
      setTasks(tasks.concat(returnedTask));
      setTaskName('');
      setTimeSpent(0);
    });
  };

  return (
    <div className="task-tracker">
      <h2>Task Tracker</h2>
      <TextField
        label="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <TextField
        type="number"
        label="Time Spent (minutes)"
        value={timeSpent}
        onChange={(e) => setTimeSpent(Number(e.target.value))}
      />
      <Button onClick={addTask}>Add Task</Button>
      <List>
        {tasks.map(task => (
          <ListItem key={task.id}>
            <ListItemText primary={`${task.name}: ${task.timeSpent} minutes`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TaskTracker;