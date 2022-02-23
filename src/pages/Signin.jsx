import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { ImSpinner2 } from 'react-icons/im';

import '../styles/signin-signup.scss';
import useForm from '../hooks/useForm';
import { signin } from '../utils/validations';
import { login } from '../features/slices/userSlice';

const Signin = () => {

  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitForm = async (values) => {
    setLoading(true);
    try {
      const { data } = await axios.post('http://localhost:5001/api/signin', {
        email: values.email,
        password: values.password
      });
      if (data.accessToken) {
        dispatch(login({
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
    <div className="container">
      <form onSubmit={handleSubmit}>
      <p>Inicia sesión</p>
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
  );
}

export default Signin;