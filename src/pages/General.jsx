import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { selectTheme, switchTheme } from '../features/slices/themeSlice';
import { Moon, Sun, Switch, ThemeDiv } from '../components/navbar/NavbarStyles';
import { GeneralContainer } from '../styles/general';

const General = () => {

  let dispatch = useDispatch();
  let isDark = useSelector(selectTheme);
  let switchRef = useRef(null);

  useEffect(() => {
    switchRef.current.addEventListener('click', () => {
        dispatch(switchTheme());
    });
    // eslint-disable-next-line
}, []);

  return (
    <GeneralContainer isDark={isDark}>
      <div className="options">
        <div className="option">
          <p>Tema oscuro</p>
          <ThemeDiv>
            { 
              !isDark ? <Sun />
              : <Moon />
            }
            <Switch 
              type="checkbox" 
              name=""
              ref={switchRef}
              defaultChecked={isDark && true}
            />
          </ThemeDiv>
        </div>
      </div>
    </GeneralContainer>
  )
}

export default General