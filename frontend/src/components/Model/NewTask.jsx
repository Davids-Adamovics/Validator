/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../Model/NewTask.scss";

function NewTask({ id }) {
  const [task, setTask] = useState({
    title: '',
    description: '',
    datetime: ''
  });

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/getTask/${id}`);
        console.log('Fetched task data:', response.data);
        console.log('Task ID:', id);

        if (response.data !== "Failed") {
          const datetime = response.data.datetime ? response.data.datetime.slice(0, 16) : '';
          setTask({
            title: response.data.title,
            description: response.data.description,
            datetime: datetime
          });
        } else {
          console.error("Task not found");
        }
      } catch (error) {
        console.error("Error fetching task data", error);
      }
    };

    fetchTask();
  }, [id]);

  return (
    <form className="task">
      <div>
        <input
          type="text"
          name="task-title"
          readOnly
          value={task.title}
        />
        <br />
        <textarea
          type="text"
          name="task-description"
          readOnly
          value={task.description}
        />
        <br />
        <input
          type="datetime-local"
          readOnly
          name="task-date-time"
          value={task.datetime}
        />
        <input type="checkbox" name="task-checkbox" />
      </div>
    </form>
  );
}

export default NewTask;
