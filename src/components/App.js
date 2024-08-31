import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";
import pets from "./db.json";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  const handleFilterChange = (type) => {
    setFilters({ type });
  };

  const fetchPets = () => {
    let url = "http://localhost:3001/pets";
    if (filters.type !== "all") {
      url += `?type=${filters.type}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((pets) => setPets(pets));
  };

  const handleAdoptPet = (id) => {
    setPets((prevPets) =>
      prevPets.map((pet) =>
        pet.id === id ? { ...pet, isAdopted: true } : pet
      )
    );
  };

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={handleFilterChange} onFindPetsClick={fetchPets} />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={handleAdoptPet} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;