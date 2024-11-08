import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
import Logo from './Logo';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-grey-300);
  background-color: var(--color-grey-800);
  border-bottom: 1px solid var(--color-grey-900);
  padding: 1rem 2rem;
`;

const NavBar = styled.ul`
  display: flex;
  gap: 1.5rem;
`;

const StyledNavLink = styled(NavLink)`
  font-size: 1.8rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  backface-visibility: hidden;

  &:hover {
    color: var(--color-grey-50);
    transform: scale(1.1);
  }
`;

function Header() {
  return (
    <StyledHeader>
      <NavBar>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink>About</StyledNavLink>
        <StyledNavLink>Projects</StyledNavLink>
        <StyledNavLink>Contact</StyledNavLink>
      </NavBar>
      <Logo />
    </StyledHeader>
  );
}

export default Header;
