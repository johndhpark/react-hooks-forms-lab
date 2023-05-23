import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchTermChange(e) {
    const { value } = e.target;
    console.log(value);
    setSearchTerm(value);
  }

  const onItemFormSubmit = (newItem) => {
    // console.log(name.value + " " + category.value);
    setItems([...items, newItem]);
  };

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter
        search={searchTerm}
        onSearchChange={handleSearchTermChange}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {itemsToDisplay
          .filter((item) => {
            if (searchTerm === "") return true;

            return item.name.includes(searchTerm);
          })
          .map((item) => (
            <Item key={item.id} name={item.name} category={item.category} />
          ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
