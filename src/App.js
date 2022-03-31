import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import ScrollToTop from './hooks/useScrollToTop';
import './styles/body.scss';
import PrivateRoute from './components/privateRoute/PrivateRoute';

import LogIn from './pages/LogIn';
// import Signin from './pages/Signin';
// import Signup from './pages/Signup';
import Register from './pages/Register';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Navbar from './components/navbar/Navbar';
import Reports from './pages/Reports';
import Campaigns from './pages/Campaigns';
import About from './pages/About';
import { Footer } from './styles/app';
import { selectTheme } from './features/slices/themeSlice';
import { useSelector } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

function App() {

  const isDark = useSelector(selectTheme);

  const GlobalStyle = createGlobalStyle`
    * {
        // font-family: 'Poppins', sans-serif;
        font-family: 'Source Sans Pro', sans-serif;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body{
        background: ${props => isDark ? '#181818' : '#EEE'};
    }
    a{
        text-decoration: none;
        color: #000;
    }
    header{
        grid-area: header;
    }
  `;

  return (
    <>
      <Helmet>
        <title>Clean City</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Helmet>
      <GlobalStyle isDark={isDark}/>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/signin" exact element={<LogIn />} />
            <Route path="/signup" exact element={<Register />} />
            <Route path="/*" exact element={<>
              <header>
                <Navbar />
              </header>
              <Routes>
                <Route exact path="/campaigns/*" element={<PrivateRoute><Campaigns /></PrivateRoute>} />
                <Route exact path="/reports/*" element={<PrivateRoute><Reports /></PrivateRoute>} />
                <Route exact path="/about/*" element={<About />} />
                <Route exact path="/*" element={<Home />} />
                <Route path="*" exact element={<NotFound />} />
              </Routes>
              <Footer isDark={isDark}>
                <div>
                  <div className="info">
                    <p className="class">Aplicaciones para I4.0</p>
                    <p className="school">Universidad Tecnológica Metropolitana</p>
                  </div>
                  <div className="participants">
                    <h4>Colaboradores</h4>
                    <ul>
                      <li><p>Christian Alexander Vázquez González</p></li>
                      <li><p>Jordy Javier Hoil Couoh</p></li>
                    </ul>
                  </div>
                </div>
                <div className="img-container">
                  <img src="/assets/img/orgullo-utm-01.png" alt="orgullo utm"/>
                </div>
              </Footer>
            </> } />
          </Routes>
        </ScrollToTop>
      </Router> 
    </>
  );
}

export default App;
