import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom'; //receive an active class when the link is in the current route. (Line 23)
import {FaBars} from 'react-icons/fa'; //react icons

export const Nav = styled.nav`
  background: #000;
  height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 0.5 rem calc((100vw - 1000px) / 2);
  z-index: 10;
  `

export const NavLink = styled(Link)` 
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active { 
      color: #15cdfc;
  }
  `

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%,75%);
      font-size: 1.8rem;
      cursor: pointer;
  }
  `

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -1px;

  @media screen and (max-width: 768px) {
      display: none;
  }
  `