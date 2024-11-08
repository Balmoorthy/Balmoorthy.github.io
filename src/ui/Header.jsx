import styled from "styled-components"

const StyledHeader =  styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--color-grey-300);
    background-color: var(--color-grey-950);
    border-bottom:1px solid var(--color-grey-900);
    padding: 1rem 2rem;
`

const NavBar = styled.ul`
    display: flex;
    gap: 1.5rem;
`

const NavLink = styled.a`
     font-size: 1.8rem;
    cursor: pointer;
    
    &:hover{
        /* color: var(--color-rose-600); */
        color: var(--color-grey-50);
    }
`


function Header() {
    return (
        <StyledHeader>
            <NavBar>
                
                <NavLink href="/">Home</NavLink>
                <NavLink>About</NavLink>
                <NavLink>Projects</NavLink>
                <NavLink>Contact</NavLink>
            </NavBar>
            
            <nav>LOGO</nav>
        </StyledHeader>
    )
}

export default Header
