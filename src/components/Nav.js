import React from 'react';
import styled from 'styled-components';

const Nav = () => {
    return (
        <StyledNav>
            <h1><a href="#">Capture</a></h1>
            <ul>
                <li><a href="#">1. About Us</a></li>
                <li><a href="#">2. Our Word</a></li>
                <li><a href="#">3. Contact Us</a></li>
            </ul>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background-color: #282828;
    
    a {
        text-decoration: none;
        color: white;
    }
    
    ul {
        list-style-type: none;
        display: flex;
    }
    
    li {
        padding-left: 10rem;
        position: relative;
    }
    
    h1 a {
        font-size: 1.5rem;
        font-family: 'Lobser', cursive;
        font-weight: lighter;
    }
`;

export default Nav;