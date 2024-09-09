import React, { useState } from "react";

const Form = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    const numRegex=/[0-9]/
    const mailRegex= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    //!/\S+@\S+\.\S+/

    if (!formData.name) {
      newErrors.name = "Name required";
    } else if (formData.name.length < 3) {
      newErrors.name = "Name can't be shorter than 3 characters";
    } else if(numRegex.test(formData.name)) {
      newErrors.name = "Name cannot contain numbers";
    }
  
    if (!formData.email) {
      newErrors.email = "Email required";
    } else if (!mailRegex.test(formData.email)) {
      newErrors.email = "Please give a valid email";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form data submitted:", formData);
    }
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} />
          <button>Send</button>
      </form>
      <div className="errors-container">
        {errors.name && <span style={{color: "red"}}>{errors.name}</span>}
        {errors.email && <span style={{color: "red"}}>{errors.email}</span>}
      </div>
    </div>
  );
};

export default Form;
