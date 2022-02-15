import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Nav } from './NavbarStyles';

const Navbar = () => {
    return (
        <Nav>
            <Link to="/">Clean City</Link>
            <ul>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/craftmen">Artesanos</NavLink></li>
                <li><NavLink to="/restaurtants">Restaurantes</NavLink></li>
                <li><NavLink to="/crafthouses">Casas de artesanos</NavLink></li>
                <li><NavLink to="/routes">Rutas</NavLink></li>
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