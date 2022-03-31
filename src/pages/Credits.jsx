import React from 'react'
import { useSelector } from 'react-redux';
import { selectTheme } from '../features/slices/themeSlice';
import { CreditsContainer } from '../styles/credits'

const Credits = () => {

  const isDark = useSelector(selectTheme);

  return (
    <CreditsContainer isDark={isDark}>
      <h2>Créditos</h2>
      <div className="info">
        <h4>Colaboradores</h4>
        <ul>
          <li>
            <p>Christian Alexander Vázquez González</p>
          </li>
          <li>
            <p>Jordy Javier Hoil Couoh</p>
          </li>
        </ul> 
        <h4>Asignatura</h4>
        <p>Aplicaciones Web para I4.0</p>
        <h4>Profesor</h4>
        <p>Aurelio Mex Mex</p>
        <h4>Colegio</h4>
        <p>Universidad Tecnológica Metropolitana</p>
        <h6>All Rights Reserved</h6>
      </div>
    </CreditsContainer>
  )
}

export default Credits