import React from 'react'
import { NavLink } from 'react-router-dom';
import { AboutContainer, Body, Header } from '../styles/about';

const About = () => {
  return (
    <AboutContainer>
        <Header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="about-us">¿Quiénes somos?</NavLink>
                    </li>
                    <li>
                        <NavLink to="purpose">Propósito</NavLink>
                    </li>
                    <li>
                        <NavLink to="credits">Créditos</NavLink>
                    </li>
                </ul>
            </nav>
        </Header>
        <Body>
            
        </Body>
    </AboutContainer>
  )
}

export default About;