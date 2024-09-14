import React, { useState } from "react";

const Form = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    const numRegex = /[0-9]/
    const mailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    //!/\S+@\S+\.\S+/

    if (!formData.name) {
      newErrors.name = "Name required";
    } else if (formData.name.length < 5) {
      newErrors.name = "Name can't be shorter than 5 characters";
    } else if (numRegex.test(formData.name)) {
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
      console.log("Form data submitted:", formData);
      setSuccessMessage(`Thank you ${formData.name}, we will contact you as soon as possible via email`);
    }
  };

  return (
    <div className="form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} />
        <button className="formButton">Send</button>
      </form>
      <div className="messages-container"  style={{ marginTop: "120px" }}>
        {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
        {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        {successMessage && <div style={{ color: "green" }}>{successMessage}</div>}
      </div>
    </div>
  );
};

export default Form;
