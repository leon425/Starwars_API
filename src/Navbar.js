import React from 'react';
import {Nav, NavLink, NavMenu} from  "./styles/Navbar.styled";


const Navbar = () => {
  return (
    <>
      <Nav>
          <NavMenu>
            <NavLink to="/">
                Home
            </NavLink>
          </NavMenu>
          

          <NavMenu>
              <NavLink to="/people">
                  Characters
              </NavLink>
          </NavMenu>

          <NavMenu>
              <NavLink to="/planets">
                  Planets
              </NavLink>
          </NavMenu>

          <NavMenu>
              <NavLink to="/films">
                  Films
              </NavLink>
          </NavMenu>

          <NavMenu>
              <NavLink to="/species">
                  Species
              </NavLink>
          </NavMenu>

          <NavMenu>
              <NavLink to="/vehicles">
                  Vehicles
              </NavLink>
          </NavMenu>

          <NavMenu>
              <NavLink to="/starships">
                  Starships
              </NavLink>
          </NavMenu>
      </Nav>
    </>
  )
}

export default Navbar;

//'NavLink to' is the path