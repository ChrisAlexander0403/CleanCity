import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';
import { ImSpinner2 } from 'react-icons/im';
import 'moment/locale/es-mx';

import '../styles/signin-signup.scss';
import useForm from '../hooks/useForm';
import { signup } from '../utils/validations';
import Calendar from '../components/calendar/Calendar';
import { useRef } from 'react';
import { formatInput, limitPhone } from '../utils/restrictions';

const Signup = () => {

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

  const calendar = useRef(null);

  const navigate = useNavigate();

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
    <div className="container">
      <form onSubmit={handleSubmit}>
        <p>Registrarse</p>
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
  );
}

export default Signup;