import React, { useState } from "react";

function Filters() {
  const[type, setType] = useState("all");
  const handleTypeChange = (event) => {
    setType(event.target.value);
  };
  
  const handleFindPetsClick = () => {
    console.log(`Finding pets of type ${type}`);
  };
  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field">
        <select name="type" id="type" aria-label="type">
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>

      <div className="field">
        <button className="ui secondary button">Find pets</button>
      </div>
    </div>
  );
}

export default Filters;