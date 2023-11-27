import React, { useState, useEffect } from 'react';
import { httpCall } from "./Characters";


const url = 'https://swapi.dev/api/starships'

const Starships = () => {
  const [starships, setStarships] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try {
    const response = await httpCall(url, 'GET');
    let data = await response.data; // = object
    console.log(response)

    var arr = Object.keys(data) //declare array of keys of data

    var arrobj = arr.map(key => { //change object to array  // = await response.data (but in array)
      return {[key] : data[key]}
    });

    var final = arrobj.filter(((data,index) => { // "results" in array [{"results" : {name:...}}] // "results" is still an object
      if (index === 3) {
        return true;
      } else {
        return false;
      };
    }))

    var final2 = Object.values(final[0]) // "results" array inside an array
    var final3 = final2[0] //final array
    setStarships(final3)
    setIsLoading(false)

    

    
    } catch (error) {
      console.log("error -->", error)
      setIsError(true)
      
    }
  }  

  useEffect(() => {
    fetchData()
  },[])

  

  if (isLoading) {
    return <div>
      <h1>Loading...</h1>
      <h1>Please Wait</h1>
      </div> 
  } 
  if (isError) {
    return <div
    ><h1>Oops, Something Went Wrong :(</h1>
    </div>
  }


  


  return (
    <>
    <h1 className="header">Starwars Starships</h1>
    {starships.map((inf,index) => {
      

      return (
        <div key={index} className="all"> 
         <h1>{inf.name}</h1>
         <h2>Model : {inf.model}</h2>
         <h2>Manufacturer : {inf.manufacturer}</h2>
         <h2>Cost in Credits : {inf.cost_in_credits}</h2>
         <h2>Length : {inf.length}</h2>
         <h2>Max Atmosphering Speed : {inf.max_atmosphring_speed}</h2>
         <h2>Crew : {inf.crew}</h2>
         <h2>Passengers : {inf.passengers}</h2>
         <h2>Cargo Capacity : {inf.cargo_capacity}</h2>
         <h2>Consumables : {inf.consumables}</h2>
         <h2>Hyperdrive Rating : {inf.hyperdrive_rating}</h2>
         <h2>MGLT : {inf.MGLT}</h2>
         <h2>Starship Class : {inf.starship_class}</h2>
         <h2>Created : {inf.created}</h2>
         <h2>Edited : {inf.edited}</h2>
        </div>
      )
    })}
    

    </>
  );
};

export default Starships;