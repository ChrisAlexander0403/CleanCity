import React, { useRef, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ImSpinner2 } from 'react-icons/im';
import Helmet from 'react-helmet';
import moment from 'moment';

import { selectTheme } from '../features/slices/themeSlice';
import { signup } from '../utils/validations';
import Calendar from '../components/calendar/Calendar';

import useForm from '../hooks/useForm';
import { SignupContainer } from '../styles/signup';
import { formatInput, limitPhone } from '../utils/restrictions';

export default function Register() {

    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        birthdate: ''
      });
    const [value, setValue] = useState(moment());
    const [calendarIsOpen, setCalendarIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    let isDark = useSelector(selectTheme);
    let navigate = useNavigate();

    const calendar = useRef(null);

    const submitForm = async ({ firstname, lastname, email, password, birthdate, phone }) => {
        setLoading(true);
        try {
          const { data } = await axios.post('http://localhost:5000/api/user/signup', {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            birthdate: birthdate,
            phone: phone
          });
          if (data.message === 'User saved') {
            setLoading(false);
            navigate('/signin');
          }
        }catch(error) {
            console.log(error); 
        }
        setLoading(false);
    }

    const { handleChange, handleSubmit, errors } = useForm(values, setValues, submitForm, signup);
    
    return (
        <>
        <Helmet>
            <title>Regístrate</title>
        </Helmet>
        <SignupContainer isDark={isDark}>
            <div className="form-container">
                <div className="container">
                    <img className="background" src={isDark ? "/assets/img/signin-dark.jpg" : "/assets/img/signin-light.jpg"} alt="" />
                    <h2 isDark={isDark}>Regístrate</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Nombre</label>
                            <input 
                                id='firstname'
                                type='text'
                                placeholder='Nombre'
                                name='firstname'
                                value={values.firstname}
                                onChange={handleChange}
                            />
                        </div>
                        {errors.firstname && <span className='error'>{errors.firstname}</span>}
                        <div className="form-group">
                            <label htmlFor="lastname">Apellidos</label>
                            <input 
                                id='lastname'
                                type='text'
                                placeholder='Apellidos'
                                name='lastname'
                                value={values.lastname}
                                onChange={handleChange}
                            />
                        </div>
                        {errors.lastname && <span className='error'>{errors.lastname}</span>}
                        <div className="form-group">
                            <label htmlFor="email">Correo</label>
                            <input 
                                id='email'
                                type='text'
                                placeholder='Correo'
                                name='email'
                                value={values.email.replace(/\s+/g, '')}
                                onChange={handleChange}
                            />
                        </div>
                        {errors.email && <span className='error'>{errors.email}</span>}
                        <div className="form-group">
                            <label htmlFor="password">Contraseña</label>
                            <input 
                                id='password'
                                type='password'
                                placeholder='Contraseña'border
                                name='password'
                                value={values.password.replace(/\s+/g, '')}
                                onChange={handleChange}
                            />
                        </div>
                        {errors.password && <span className='error'>{errors.password}</span>}
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirmar contraseña</label>
                            <input 
                                id='confirmPassword'
                                type='password'
                                placeholder='Confirmar contraseña'
                                name='confirmPassword'
                                value={values.confirmPassword.replace(/\s+/g, '')}
                                onChange={handleChange}
                            />
                        </div>
                        {errors.confirmPassword && <span className='error'>{errors.confirmPassword}</span>}
                        <div className="form-group">
                            <label htmlFor="phone">Celular</label>
                            <input 
                                id='phone'
                                type='number'
                                placeholder='Celular'
                                name='phone'
                                value={values.phone.replace(/\s+/g, '')}
                                onChange={handleChange}
                                onKeyDown={formatInput}
                                onInput={limitPhone}
                            />
                        </div>
                        {errors.phone && <span className='error'>{errors.phone}</span>}
                        <div className="form-group">
                            <label for="birthdate">Fecha de Nacimiento</label>
                            <div className="button"
                                ref={calendar}
                                onClick={() => setCalendarIsOpen(true)}         
                            >
                                {value.format('LL')}  
                            </div>
                            {
                                calendarIsOpen && 
                                <Calendar 
                                value={value} 
                                setValue={setValue}
                                startingPoint={window.innerWidth - calendar.current.getBoundingClientRect().right}
                                close={setCalendarIsOpen}
                                />
                            }
                        </div>
                        {errors.birthdate && <span className="error">{errors.birthdate}</span>}
                        {!loading ? <button type='submit'>Registrarse</button> : 
                        <div className="ring-container">
                            <div className="ring"><ImSpinner2 /></div>
                        </div>
                        }
                        <div className="link"><p className="isRegistered">¿Ya estás registrado?</p>&nbsp;<Link to="/signin">Inicia sesión aquí</Link></div>
                    </form>
                </div>
                <div className="div-info" isDark={isDark}>
                    {/* <h2>Más Información</h2>
                    <TextInfo><Location /><p>C.20 No.277 x23 y 23-A Col. Miguel Alemán, Mérida Yucatán, 97148.</p></TextInfo>
                    <TextInfo><Phone /><p>999-927-5000, 999-927-5002</p></TextInfo>
                    <TextInfo><Mail /><p>elara@solucionesamerica.com</p></TextInfo>
                    <TextInfo><Global /><p>www.solucionesamerica.com</p></TextInfo>
                    <Logo src={AmericaSolutions}/> */}
                </div>
            </div>
        </SignupContainer>
        </>
    );
}