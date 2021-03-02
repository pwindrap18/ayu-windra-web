import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { menuData } from '../data/menuData';
import { Link as LinkS, animateScroll as scroll } from 'react-scroll';
import { FaBars } from 'react-icons/fa';

const NavBar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavLogo to="/" onClick={toggleHome}>
          A&W
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            {menuData.map((item, index) => (
              <NavLink
                to={item.link}
                key={index}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                {item.title}
              </NavLink>
            ))}
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/comments">Doa & Ucapan</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  );
};

export default NavBar;

const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? '#000' : 'trasparent')};
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
`;

const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  outline: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;

  @media screen and (max-width: 960px) {
    margin-left: 24px;
  }
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    color: #fff;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  margin-left: 45px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: row;
  height: 80px;
`;

const NavLink = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.2rem;
  height: 100%;
  cursor: pointer;
  &.active {
    border-bottom: 2px solid #01bf71;
  }
`;

const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBtnLink = styled(Link)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 12px;
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
