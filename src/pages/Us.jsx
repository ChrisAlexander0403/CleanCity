import React from 'react'
import { useSelector } from 'react-redux';
import { selectTheme } from '../features/slices/themeSlice';
import { UsContainer } from '../styles/us'

const Us = () => {

  const isDark = useSelector(selectTheme);

  return (
    <UsContainer isDark={isDark}>
      <h2>Nosotros</h2>
      <div className="info">
      Nosotros estamos destinados a ayudar a las personas que tengan problemas de basura en sus esquinas, fraccionamientos, con sus desagües y para ello se formaran las campañas de recolección para la basura para reducir esa basura.
      </div>
    </UsContainer>
  )
}

export default Us