/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import "../Model/NewTask.scss";
import axios from 'axios';
import { useState } from 'react';

function NewTask({ task, deleteTask }) {
  const { title, description, datetime, id } = task;

  return (
    <div className="task">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{datetime}</p>
      <button
        type="button"
        className="btn btn-success"
        onClick={() => deleteTask(id)}>
        Done
      </button>
    </div>
  );
}

export default NewTask;
