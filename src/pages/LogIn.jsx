import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ImSpinner2 } from 'react-icons/im';
import Helmet from 'react-helmet';

import { selectTheme } from '../features/slices/themeSlice';
import { signin } from '../utils/validations';

import useForm from '../hooks/useForm';
import { login } from '../features/slices/userSlice';
import { SigninContainer } from '../styles/signin';

export default function LogIn() {

    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);

    const isDark = useSelector(selectTheme);
    let dispatch = useDispatch();
    let navigate = useNavigate();

    const submitForm = async (values) => {
        setLoading(true);
        try {
            const { data } = await axios.post('http://localhost:5001/api/signin', {
                email: values.email,
                password: values.password
            });
            if (data.accessToken) {
            dispatch(login({
                _id: data._id,
                firstname: data.firstname,
                lastname: data.lastname,
                email: data.email,
                phone: data.phone,
                birthdate: data.birthdate,
                accessToken: data.accessToken,
                refreshToken: data.refreshToken
                }));
                setLoading(false)
                navigate('/');
            }
        } catch(error) {
            console.log(error)
        }
        setLoading(false);
    }

    const { handleChange, handleSubmit, errors } = useForm(values, setValues, submitForm, signin);
    
    return (
        <>
        <Helmet>
            <title>Inicia sesión</title>
        </Helmet>
        <SigninContainer isDark={isDark}>
            <div className="form-container">
                <div className="container">
                    <div className="background">
                        <img src={isDark ? '/assets/img/signin-dark.png' : '/assets/img/signin-light.png'} alt="" />
                    </div>
                    <h2>Inicia sesión</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Correo</label>
                            <input 
                            id="email" 
                            type="text" 
                            placeholder="Correo"
                            name="email"
                            value={values.email.replace(/\s+/g, '')}
                            onChange={handleChange}
                            />
                        </div>
                        {errors.email && <span className="error">{errors.email}</span>}
                        <div className="form-group">
                            <label htmlFor="password">Contraseña</label>
                            <input 
                            id="password" 
                            type="password" 
                            placeholder="Contraseña"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            />
                        </div>
                        {errors.password && <span className="error">{errors.password}</span>}
                        {!loading ? <button type='submit'>Iniciar Sesión</button> : 
                            <div className="ring-container">
                            <div className="ring"><ImSpinner2 /></div>
                            </div>
                        }
                        <div className="link"><p className="isRegistered">¿Aún no estás registrado?</p>&nbsp;<Link to="/signup">Registrate aquí</Link></div>
                    </form>
                </div>
                <div className="div-info">
                    {/* <h2>Más Información</h2>
                    <TextInfo><Location /><p>C.20 No.277 x23 y 23-A Col. Miguel Alemán, Mérida Yucatán, 97148.</p></TextInfo>
                    <TextInfo><Phone /><p>999-927-5000, 999-927-5002</p></TextInfo>
                    <TextInfo><Mail /><p>elara@solucionesamerica.com</p></TextInfo>
                    <TextInfo><Global /><p>www.solucionesamerica.com</p></TextInfo>
                    <Logo src={AmericaSolutions}/> */}
                </div>
            </div>
        </SigninContainer>
        </>
    );
}