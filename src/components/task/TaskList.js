import React, { useState } from 'react';


const TaskList = ({ tasks, deleteTask, toggleTaskStatus }) => {
  const [statusFilter, setStatusFilter] = useState('all');


 
  const filteredTasks = tasks.filter((task) => {
    const isStatusMatch =statusFilter === 'all' || task.status === statusFilter;
   
    return isStatusMatch;
  });

  return (
    <div className="bg-gray-100 p-4 rounded shadow">
      <h2 className="text-xl mb-4">Task List</h2>
      <div className="mb-4">
        <label htmlFor="statusFilter">Filter by Status:</label>
        <select
          id="statusFilter"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="ml-2 p-2 border rounded"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="inProgress">In Progress</option>
          <option value="pending">Pending</option>
        </select>
      </div>
      {/* <div className="mb-4">
        <label htmlFor="dueDateFilter">Filter by Due Date:</label>
        <select
          id="dueDateFilter"
          value={dueDateFilter}
          onChange={(e) => setDueDateFilter(e.target.value)}
          className="ml-2 p-2 border rounded"
        >
          <option value="all">All</option>
          <option value="today">Today</option>
          <option value="tomorrow">Tomorrow</option>
          <option value="future">Future</option>
        </select>
      </div> */}
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id} className="mb-4 p-4 border rounded">
            <h3 className="text-lg font-semibold">{task.title}</h3>
            <p className="text-gray-700">{task.description}</p>
            <p className="text-gray-700">Due Date: {task.dueDate}</p>
            <p className="text-gray-700">Priority: {task.priority}</p>
            <p className="text-gray-700">
              Status: {task.status === 'completed'
                ? 'Completed'
                : task.status === 'inProgress'
                  ? 'In Progress'
                  : 'Pending'}
            </p>
            <button
              onClick={() => deleteTask(task.id)}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-2"
            >
              Delete
            </button>
            <button
              onClick={() => toggleTaskStatus(task.id)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-2 ml-2"
            >
              {task.status === 'completed'
                ? 'Set In Progress'
                : task.status === 'inProgress'
                  ? 'Mark Pending'
                  : 'Mark Completed'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
