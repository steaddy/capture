import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <StyledNav>
            <h1><Link to="/">Capture</Link></h1>
            <ul>
                <li><Link to="/">1. About Us</Link></li>
                <li><Link to="/work">2. Our Word</Link></li>
                <li><Link to="/contact">3. Contact Us</Link></li>
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