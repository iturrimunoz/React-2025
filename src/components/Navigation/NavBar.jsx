import React, { useState } from 'react';

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
  };

  const clearForm = () => {
    setValues(initialValues);
  };

  return {
    values,
    handleChange,
    handleSubmit,
    clearForm,
  };
};

// Usage in your component
const Navbar = () => {
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const { values, handleChange, handleSubmit, clearForm } = useForm(initialValues);

  return (
    <nav className="navbar">
      <ul>
        {/* Render form fields here */}
        <li>
          <button type="button" onClick={clearForm}>Clear Form</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;