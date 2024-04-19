
import React, { useState } from 'react';

function TaskForm({ addTask }) {


  
  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'Low',
    status:'pending',
    // email:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setTask({
      ...task,
      [name]: value,
      
    });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.title.trim() === '') {
      return; // Prevent adding empty tasks
    }
    addTask({ ...task, id: Date.now() }); // Assign a unique ID
    setTask({
      title: '',
      description: '',
      dueDate: '',
      priority: 'Low',
      status:'pending',
      email:''
    });
    // addingTask(task)
  };

//  const addingTask=(task)=>{
//   fetch('https://task-management-server-self.vercel.app/task',
//     {
//       method:"POST",
//       headers: { "Content-Type": "application/json" },
//       body:JSON.stringify(task)
//     }
    
//     )
//  }
  // if(task){
  //   fetch('https://task-management-server-self.vercel.app/task',
  //   {
  //     method:"POST",
  //     headers: { "Content-Type": "application/json" },
  //     body:JSON.stringify(task)
  //   }
    
    
  //   )
  // }

  return (
    <div className="bg-gray-100 p-4 rounded shadow">
      <h2 className="text-xl mb-4">Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Title:</label>
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Due Date:</label>
          <input
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Priority:</label>
          <select
            name="priority"
            value={task.priority}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
