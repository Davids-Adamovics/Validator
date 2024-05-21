/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import "../Model/NewTask.scss";

function NewTask({ task, deleteTask }) {
  const { title, description, datetime, id } = task;

  return (
    <div className="task">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{datetime}</p>
      <button
        type="button"
        className="btn-b1"
        onClick={() => deleteTask(id)}>
        Done
      </button>
    </div>
  );
}

export default NewTask;
