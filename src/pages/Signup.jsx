import React, { useState } from 'react';
import moment from 'moment';
import 'moment/locale/es-mx';

import useForm from '../hooks/useForm';
import { signIn } from '../utils/validations';
import Calendar from '../components/calendar/Calendar';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../features/user';

const Signup = () => {

  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthdate: ''
  });
  const [value, setValue] = useState(moment());
  const [calendarIsOpen, setCalendarIsOpen] = useState(false);

  const calendar = useRef(null);

  const dispatch = useDispatch();

  const submitForm = () => {
    dispatch(signup({
      firstname: values.firstname,
      lastname: values.lastname,
      email: values.email,
      password: values.password,
      birthdate: values.birthdate
    }));
  }

  const { handleChange, handleSubmit, errors } = useForm(values, setValues, submitForm, signIn);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input 
            id='firstname'
            type='text'
            placeholder='Nombre'
            name='firstname'
            value={values.firstname.replace(/\s+/g, '')}
            onChange={handleChange}
          />
          {errors.firstname && <span className='error'>{errors.firstname}</span>}
        </div>
          <div className="form-group">
            <label htmlFor="lastname">Apellidos</label>
            <input 
              id='lastname'
              type='text'
              placeholder='Apellidos'
              name='lastname'
              value={values.lastname.replace(/\s+/g, '')}
              onChange={handleChange}
            />
          {errors.lastname && <span className='error'>{errors.lastname}</span>}
        </div>
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
          {errors.email && <span className='error'>{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input 
            id='password'
            type='password'
            placeholder='Contraseña'
            name='password'
            value={values.password.replace(/\s+/g, '')}
            onChange={handleChange}
          />
          {errors.password && <span className='error'>{errors.password}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmar contraseña</label>
          <input 
            id='confirmPassword'
            type='confirmPassword'
            placeholder='Confirmar contraseña'
            name='confirmPassword'
            value={values.confirmPassword.replace(/\s+/g, '')}
            onChange={handleChange}
          />
          {errors.confirmPassword && <span className='error'>{errors.confirmPassword}</span>}
        </div>
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
          {errors.birthdate && <span className="error">{errors.birthdate}</span>}
        </div>
        <button type='submit'>Registrarse</button>
      </form>
    </div>
  );
}

export default Signup;