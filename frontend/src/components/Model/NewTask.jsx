/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import "../Model/NewTask.scss";

function NewTask({ task }) {
  const { title, description, datetime } = task;

  return (
    <div className="task">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{datetime}</p>
      <input type="checkbox" name="task-checkbox" />
    </div>
  );
}

export default NewTask;
