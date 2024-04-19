import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const Task = () => {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

    // Function to add tasks
    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    // Load tasks from local storage when the component mounts
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

        // fetch('https://task-management-server-self.vercel.app/tasks')
        // .then(res=>res.json())
        // .then(data=>{
        //     console.log(data)
        //     // setTasks(storedTasks);
        // })
        setTasks(storedTasks);

    }, []);

    // Save tasks to local storage whenever tasks change
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);



    // Function to delete tasks
    const deleteTask = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);

    };

    // Function to toggle task status
    const toggleTaskStatus = (taskId) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === taskId) {
                // Toggle the status among 'completed', 'inProgress', and 'pending'
                let newStatus = 'completed';

                if (task.status === 'completed') {
                    newStatus = 'inProgress';
                } else if (task.status === 'inProgress') {
                    newStatus = 'pending';
                }

                return {
                    ...task,
                    status: newStatus,
                };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    const priorityOrder = { High: 0, Medium: 1, Low: 2 };

    // Sort the tasks array by priority
    const priorityTask = tasks.sort((a, b) => {
        const priorityA = a.priority;
        const priorityB = b.priority;

        // Compare the priorities based on the custom order
        return priorityOrder[priorityA] - priorityOrder[priorityB];
    });



    return (
        <div className="App">
            <div className="flex">
                <div className="w-1/2 pr-4 ">
                    <TaskForm addTask={addTask} />
                </div>
                <div className="w-1/2 pl-4">
                    <TaskList tasks={priorityTask} deleteTask={deleteTask} toggleTaskStatus={toggleTaskStatus} />
                </div>
            </div>
        </div>
    );
};

export default Task;
