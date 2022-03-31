import React from 'react'
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate, NavLink } from 'react-router-dom';

import { selectTheme } from '../features/slices/themeSlice';
import { AboutContainer, Body, Header } from '../styles/about';

import Us from './Us';
import Purpose from './Purpose';
import Credits from './Credits';

const About = () => {
    
    const isDark = useSelector(selectTheme);

  return (
    <AboutContainer isDark={isDark}>
        <div className="banner">
            <img src={isDark ? '/assets/img/banner-dark1.jpg' : '/assets/img/banner-light.jpg'} alt="" />
        </div>
        <Header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="us">¿Quiénes somos?</NavLink>
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
            <Routes>
                <Route path="us" element={<Us />}/>
                <Route path="purpose" element={<Purpose />}/>
                <Route path="credits" element={<Credits />}/>
                <Route path="*" element={<Navigate to="us"/>}/>
            </Routes>
        </Body>
    </AboutContainer>
  )
}

export default About;