import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { IoMdArrowDropdown, IoMdSettings } from 'react-icons/io';
// import axios from 'axios';

import { selectTheme } from '../../features/slices/themeSlice';
import { selectUser } from '../../features/slices/userSlice';
import { Nav } from './NavbarStyles';

const Navbar = () => {

    const [visible, setVisible] = useState(false);

    const options = useRef(null);

    const navigate = useNavigate()
    const user = useSelector(selectUser);
    const isDark = useSelector(selectTheme);
    // const dispatch = useDispatch();

    // const handleLogout = async() => {
    //     try {
    //         const { data } = await axios.post('http://localhost:5001/api/logout', {
    //             email: user.email,
    //             refreshToken: user.refreshToken
    //         });
    //         console.log(data);
    //         dispatch(logout());
    //     } catch (err) {
            
    //     }
    // }

    const handleClick = () => {
        navigate('/settings');
        setVisible(false);
    }

    useEffect(() => {
        if(user){
            if(visible) {
                options.current.style.visibility = 'hidden';
            } else {
                options.current.style.visibility = 'visible';
            }
        }
    }, [visible]);
    

    return (
        <Nav isDark={isDark}>
            <Link to="/">Clean City</Link>
            <ul>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/reports">Reportes</NavLink></li>
                <li><NavLink to="/campaigns">Campañas</NavLink></li>
                <li><NavLink to="/about">Acerca de</NavLink></li>
                <li>
                    {
                        user ? 
                        <div className="account">
                            <p className="user">{user.firstname + ' ' + user.lastname}</p>
                            <div className="options-button" onClick={() => setVisible(!visible)}>
                                <IoMdArrowDropdown style={{ width: '18px', height: '18px' }} />
                            </div>
                            <div className="options" ref={options}>
                                <ul>
                                    <li>
                                        <div className="option" onClick={handleClick}><IoMdSettings /> &nbsp; Configuración</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        :
                        <div style={{ color: '#fff' }}>
                            <NavLink to="signin">Iniciar sesión</NavLink>
                            <span>|</span>
                            <NavLink to="signup">Registrarse</NavLink>
                        </div>
                    }
                </li>
            </ul>
        </Nav>
    );
}

export default Navbar;