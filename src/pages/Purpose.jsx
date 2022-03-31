import React from 'react'
import { useSelector } from 'react-redux';
import { selectTheme } from '../features/slices/themeSlice';
import { PurposeContainer } from '../styles/purpose'

const Purpose = () => {

  const isDark = useSelector(selectTheme);

  return (
    <PurposeContainer isDark={isDark}>
      <h2>Propósito</h2>
      <div className="info">
      <h4>¿Por qué hay tanta basura en la calle?</h4>
      La basura en las calles se debe principalmente a la falta de cultura cívica. La gente a veces no utiliza los botes de basura que hay en las calles, sino que prefiere tirarla al suelo.
      <h4>¿Qué hacen con la basura en las grandes ciudades?</h4>
      Los desechos orgánicos pueden reciclarse como compost y en plantas de biogás, y usarse para generar energía y mejorar el suelo. Muchos metales ya son tan caros que el reciclaje es económicamente viable. Todo lo que se pueda reciclar ahorra recursos y materias primas.
      Cada latinoamericano genera un kilo de basura al día y la región en su conjunto, unas 541.000 toneladas, lo que representa alrededor de un 10% de la basura mundial.
      Además, aproximadamente una tercera parte de los residuos acaban en basurales, vertederos que no garantizan una adecuada protección del medioambiente y la salud.
      La disposición final de desechos de manera no controlada o su falta o incorrecta recolección genera los basurales a cielo abierto. Dentro de estos, los de mayor riesgo son aquellos donde, de forma sistemática e indiscriminada, se arrojan los residuos en arroyos o espacios abandonados o sin control ni protección, quemados intencionalmente como forma de reducir su volumen o por autocombustión y dejados para que distintos actores distribuyan su carga contaminante.
      Estos basurales pueden llegar a tener millones de toneladas y ocupar espacios superiores a las 100 hectáreas.
      <h4>Desafío</h4>
      Reducir y limpiar las zonas donde se acumulen las grandes cantidades de basura en las colonias.
      <h4>Alcance</h4> 
      Reducir y limpiar la basura en las calles, los usuarios que usen la página podrán mandar su reporte y en un tiempo determinado se hará caso para poder crear una campaña e ir a limpiar esa zona contaminada.

      </div>
    </PurposeContainer>
  )
}

export default Purpose