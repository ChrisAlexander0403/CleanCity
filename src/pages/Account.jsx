import React from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '../features/slices/themeSlice';
import useImage from '../hooks/useImage';
import { AccountContainer } from '../styles/account'
// import { selectUser } from '../features/slices/userSlice';

const Account = () => {

  // const user = useSelector(selectUser);
  const isDark = useSelector(selectTheme);
  const { img } = useImage('');
  return (
    <AccountContainer isDark={isDark}>
      <div className="user">
        <div className="user-image">
          <div className="img-container">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="header">
          {/* <p>{user.firstname + user.lastname}</p> */}
          <p>Christian Alexander Vázquez González</p>
        </div>
        <div className="content">
          <div className="content-line">
            <p>Correo</p>
            {/* <p>{user.email}</p> */}
            <p>spideralex44@gmail.com</p>
          </div>
          <div className="content-line">
            <p>Cumpleaños</p>
            {/* <p>{user.birthdate}</p> */}
            <p>11/02/2000</p>
          </div>
          <div className="content-line">
            <p>Celular</p>
            {/* <p>{user.phone}</p> */}
            <p>9997466773</p>
          </div>
          <div className="content-line">
            <p>Reportes realizados</p>
            <p>0</p>
          </div>
          <div className="content-line">
            <p>Campañas pendientes</p>
            <p>0</p>
          </div>
        </div>
      </div>
    </AccountContainer>
  );
}

export default Account;