import React from 'react';
import Home from './Home';
import Characters from './Characters';
import Planets from './Planets';
import Films from './Films';
import Species from './Species';
import Vehicles from './Vehicles';
import Starships from './Starships';
import Navbar from './Navbar';
import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from './styles/Container.styled';




function App() {
  return (
      <>
      <BrowserRouter>
        <Container>
              <Navbar/>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/people" element={<Characters/>}/>  
                <Route path="/planets" element={<Planets/>}/>
                <Route path="/films" element={<Films/>}/>
                <Route path="/species" element={<Species/>}/>
                <Route path="/vehicles" element={<Vehicles/>}/>
                <Route path="/starships" element={<Starships/>}/>
              
              </Routes>
            </Container>
        </BrowserRouter>
      </>
  );
}

//switch = Only 1 route will be displayed
//the path is the route. The path after the route website, the path after the URL
//Create route for each page we want

//if there is navbar, it will be outside the switch element. Because it will always showed


export default App;