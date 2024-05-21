/* eslint-disable no-unused-vars */
import axios from "axios";
import Header from "../components/Header/Header";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Validation from "../components/Validations/AddTaskValidation";

function CreateNewPage() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    title: "",
    description: "",
    datetime: "",
  });

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = Validation(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      axios
        .post("http://localhost:8081/addTask", values)
        .then((res) => {
          navigate("/Main");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="contents-all">
      <Header />
      <div className="bg-white p-3 rounded w-25">
        <div className="container">
          <h1>Add new task</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                placeholder="Enter Title"
                name="title"
                onChange={handleInput}
                className="form-control rounded-0"
              />
              {errors.title && <p>{errors.title}</p>}
            </div>
            <div className="mb-3">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                placeholder="Enter description"
                name="description"
                onChange={handleInput}
                className="form-control rounded-0"
              />
              {errors.description && <p>{errors.description}</p>}
            </div>
            <div className="mb-3">
              <label htmlFor="datetime">Date and Time</label>
              <input
                type="datetime-local"
                placeholder="Enter Date and Time"
                name="datetime"
                onChange={handleInput}
                className="form-control rounded-0"
              />
              {errors.datetime && <p>{errors.datetime}</p>}
            </div>
            <button type="submit" className="btn btn-success w-100">
              Add task
            </button>
            <p>This will add the task to your current day</p>
            <button
              className="btn btn-default border w-100"
              onClick={() => {
                navigate("/Main");
              }}
            >
              Back to see all tasks
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateNewPage;
