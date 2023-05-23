import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    category: "Produce",
  });

  // Fires when the form submit event happens
  const onSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      ...formData,
      id: uuid(),
    };

    onItemFormSubmit(newItem);

    setFormData({
      name: "",
      category: "Produce",
    });
  };

  const handleFormChange = (e) => {
    const { name: key, value } = e.target;

    setFormData({
      ...formData,
      [key]: value,
    });
  };

  return (
    <form className="NewItem" onSubmit={onSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleFormChange} />
      </label>

      <label>
        Category:
        <select
          name="category"
          defaultValue="Produce"
          onChange={handleFormChange}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
