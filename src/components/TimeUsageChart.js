import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import taskService from '../services/taskService';

const TimeUsageChart = () => {
  const [taskData, setTaskData] = useState([]);

  useEffect(() => {
    taskService.getAll().then(data => setTaskData(data));
  }, []);

  return (
    <div className="time-usage-chart">
      <h2>Time Usage Chart</h2>
      <BarChart width={600} height={300} data={taskData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Bar dataKey="timeSpent" barSize={30} fill="#413ea0" />
      </BarChart>
    </div>
  );
};

export default TimeUsageChart;