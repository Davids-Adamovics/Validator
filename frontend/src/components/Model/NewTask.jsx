/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import "../Model/NewTask.scss";
import { format } from 'date-fns';

function NewTask({ task, deleteTask }) {
  const { title, description, datetime, id } = task;
  const formattedDatetime = format(new Date(datetime), 'yyyy-MM-dd HH:mm:ss');
  return (
    <div className="task">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{formattedDatetime}</p>
      <button
        type="button"
        className="btn btn-outline-light"
        onClick={() => deleteTask(id)}>
        Done
      </button>
    </div>
  );
}

export default NewTask;
