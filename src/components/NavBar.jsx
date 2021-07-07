import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #121212;
    color: darkgrey;
    font-weight: 800;
    padding: 1.5em 0;
    z-index: 3;
`;

const Nav = styled.ul`
    width: 100%;
    margin: 0 auto;
    padding: 0 1.5em;
    max-width: 1050px;
    display: flex;
    justify-content: space-between;
    list-style: none;
`;

const NavItem = styled.li`
    position: relative;
    margin: 0;
    flex-basis: 100%;
`;

const NavItemRight = styled(NavItem)`
    margin-left: 1em;
`;

const NavLink = styled.a`
    text-decoration: none;
    color: darkgrey;
    transition: all 0.2s;
`;

const NavBar = () => {
    return (
        <NavContainer>
            <Nav>
                <NavItem>
                    <NavLink href="#hero">
                        Courtney Fay
                    </NavLink>
                </NavItem>
                <NavItemRight>
                    <NavLink href="#skills">
                        Skills
                    </NavLink>
                    <NavLink href="#blog">
                        Blog
                    </NavLink>
                    <NavLink href="#connect">
                        Connect
                    </NavLink>
                </NavItemRight>
            </Nav>
        </NavContainer>
    );
};

export default NavBar;
