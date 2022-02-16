import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Nav } from './NavbarStyles';

const Navbar = () => {
    return (
        <Nav>
            <Link to="/">Clean City</Link>
            <ul>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/reports">Reports</NavLink></li>
                <li><NavLink to="/campaigns">Campaigns</NavLink></li>
                <li>
                    <div>
                        <NavLink to="signin">Iniciar sesión</NavLink>
                        <span>|</span>
                        <NavLink to="signup">Registrarse</NavLink>
                    </div>
                </li>
            </ul>
        </Nav>
    );
}

export default Navbar;