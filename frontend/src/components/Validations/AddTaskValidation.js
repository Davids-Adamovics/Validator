/* eslint-disable no-unused-vars */
function Validation(values) {
    let error = {};
    const title_pattern = /^[\w\s.,'-]{1,100}$/;
    const description_pattern = /^[\w\s.,'"\-!@#$%^&*()_+={}[\]:;<>/?\\|`~]{1,100}$/;
    const datetime_pattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
  
    if (values.title === "") {
      error.title = "Title should not be empty";
    } else if (!title_pattern.test(values.title)) {
      error.title = "Title didn't match";
    }
  
    if (values.description === "") {
      error.description = "Description should not be empty";
    } else if (!description_pattern.test(values.description)) {
      error.description = "Description didn't match";
    }
  
    if (values.datetime === "") {
      error.datetime = "Datetime should not be empty";
    } 
  
    return error;
  }
  
  export default Validation;
  