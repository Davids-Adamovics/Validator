/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header/Header";
import NewTask from "../components/Model/NewTask";

function MainPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:8081/getAllTasks");
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/deleteTask/${id}`);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="contents-all">
      <Header />
      <div className="container">
        <h1>All Tasks</h1>
        <button type="button" className="btn btn-success" name="addTask">+</button><br />
        <div className="task-container">
          {tasks.map((task) => (
            <NewTask key={task.id} task={task} deleteTask={deleteTask} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
