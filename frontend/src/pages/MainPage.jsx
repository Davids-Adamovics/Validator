/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from "../components/Header/Header";
import NewTask from "../components/Model/NewTask";

function MainPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:8081/getAllTasks');
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
  
    fetchTasks();
  }, []);
  

  return (
    <>
      <Header />
      <h1>Main page</h1>
      <button type="button" className="btn btn-success" name="addTask">+</button>
      {tasks.map(task => (
        <NewTask key={task.id} task={task} /> // Pass each task to NewTask component
      ))}
    </>
  );
}

export default MainPage;
