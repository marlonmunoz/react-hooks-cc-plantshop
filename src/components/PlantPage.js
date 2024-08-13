import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useState, useEffect } from "react";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(response => response.json())
      .then(plantsData => setPlants(plantsData))
  }, [])


  const filteredPlants = plants.filter(plant => {
    return plant.name.toUpperCase().includes(search.toUpperCase())
  })

  function updateSearch(event){
    setSearch(event.target.value)
  }

  function deletePlant(id) {
    setPlants((plnats) => plants.filter(plant => {
      return plant.id !== id
    }))
  }

  function addPlant(newPlant){
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON"
      },
      body: JSON.stringify(newPlant)
    })
    .then(response => response.json())
    .then(newPlantData => setPlants([...plants, newPlantData]))
  }


  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search updateSearch={updateSearch} />
      <PlantList plants={filteredPlants} deletePlant={deletePlant}/>
    </main>
  );
}

export default PlantPage;
