import React from 'react';
import { Route, Routes, NavLink, Navigate } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import useModal from '../hooks/useModal';
import { selectTheme } from '../features/slices/themeSlice';
import Modal from '../components/modal/Modal';
import General from './General';
import Account from './Account';
import { CloseSession, SettingsContainer } from '../styles/settings';
import { logout } from '../features/slices/userSlice';

const Settings = () => {

    const [isOpen, openModal, closeModal] = useModal();
    const dispatch = useDispatch();

    let isDark = useSelector(selectTheme);

    const handleLogout = () => {
        dispatch(logout());
    }

  return (
    <>
    <Modal
        isOpen={isOpen}
        type={'closing'}
        important={false}
        background={isDark ? '#181818' : '#EEE'}
        maxHeight='140px'
        minHeight='140px'
    >
        <CloseSession isDark={isDark}>
            <div className="info"><p>¿Seguro que deseas cerrar sesión?</p></div>
            <div className="buttons">
                <button onClick={handleLogout}>Cerrar sesión</button>
                <button className='cancel' onClick={closeModal}>Cancelar</button>
            </div>
        </CloseSession>
    </Modal>
    <SettingsContainer isDark={isDark}>
        <aside>
            <div className="toolbar">
                <p className="title">Configuración</p>
                <div className="options">
                    <ul>
                        <li>
                            <NavLink to="general">General</NavLink>
                        </li>
                        <li>
                            <NavLink to="account">Cuenta</NavLink>
                        </li>
                        <li>
                            <button onClick={openModal}><FaSignOutAlt />&nbsp;&nbsp;&nbsp;Cerrar sesión</button>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
        <article>
            <div className="pages">
                <Routes>
                    <Route path="general" exact element={<General />} />
                    <Route path="account" exact element={<Account />} />
                    <Route path="/" exact element={<Navigate to="general" />} />
                </Routes>
            </div>
        </article>
    </SettingsContainer>
    </>
  );
}

export default Settings;