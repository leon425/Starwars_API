import React, { useState, useEffect } from 'react';
import { httpCall } from "./Characters";


const url = 'https://swapi.dev/api/planets'





const Planets = () => {
  const [planets, setPlanets] = useState([]);
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
    setPlanets(final3)
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
    <h1 className="header">Starwars Planets</h1>
    {planets.map((inf,index) => {
 
    // let count = [];
    // let namePlanets = [];

    // for (var i=0; i<planets.length; i++) {
    //   count.push(Object.values(planets[i])) // values of every planets
    //   namePlanets.push(count[i][0]) // name (index 0) of every planets
    // }
    
      
      return (
        <div key={index} className="all"> 
          <h1>{inf.name} </h1>
          <h2>Rotation Period : {inf.rotation_period}</h2>
          <h2>Orbital Period : {inf.orbital_period}</h2>
          <h2>Diameter : {inf.diameter}</h2>
          <h2>Climate : {inf.climate}</h2>
          <h2>Gravity : {inf.gravity}</h2>
          <h2>Terrain : {inf.terrain}</h2>
          <h2>Surface Water : {inf.surface_water}</h2>
          <h2>Population : {inf.population}</h2>
          <h2>Created : {inf.created}</h2>
          <h2>Edited : {inf.edited}</h2>
        </div>
      )
    })}
    </>
  );
};


export default Planets;
