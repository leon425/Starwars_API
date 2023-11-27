import React, { useState, useEffect } from 'react';
import { httpCall } from "./Characters";


const url = 'https://swapi.dev/api/species'





const Species = () => {
  const [species, setSpecies] = useState([]);
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
    setSpecies(final3)
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
    <h1 className="header">Starwars Species</h1>
    {species.map((inf,index) => {
      

      return (
        <div key={index} className="all"> 
          <h1>{inf.name}</h1>
          <h2>Classification : {inf.classification}</h2>
          <h2>Designation : {inf.designation}</h2>
          <h2>Average Height : {inf.average_height}</h2>
          <h2>Skin Colors : {inf.skin_colors}</h2>
          <h2>Eye Colors : {inf.eye_colors}</h2>
          <h2>Average Lifespan : {inf.average_lifespan}</h2>
          <h2>Language : {inf.language}</h2>
          <h2>Created : {inf.created}</h2>
          <h2>Edited : {inf.edited}</h2>
        </div>
      )
    })}
    

    </>
  );
};

export default Species;