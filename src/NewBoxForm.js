import React, { useState } from 'react';
import './NewBoxForm.css';

const NewBoxForm = ({ addBox }) => {
  const initialState = {
    backgroundColor: '',
    width: '',
    height: '',
  };
  const [formData, setFormData] = useState(initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ ...formData });
    setFormData(initialState);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="backgroundColor">Color: </label>
        <input
          id="backgroundColor"
          type="text"
          name="backgroundColor"
          placeholder="New Box Color"
          value={formData.backgroundColor}
          onChange={handleChange}
        />
        <label htmlFor="width">Width: </label>
        <input
          id="width"
          type="number"
          name="width"
          placeholder="New Box Width"
          value={formData.width}
          onChange={handleChange}
        />
        <label htmlFor="height">Height: </label>
        <input
          id="height"
          type="number"
          name="height"
          placeholder="New Box height"
          value={formData.height}
          onChange={handleChange}
        />
        <button>Add Box</button>
      </form>
    </>
  );
};

export default NewBoxForm;
