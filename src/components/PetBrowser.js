import React from "react";

import Pet from "./Pet";


function PetBrowser() {
  return (
  <div className="ui cards">
    {pets.map((pet) => (
    <Pet key={pet.id} pet={pet} />
  ))}
  </div>
  );
}

export default PetBrowser;