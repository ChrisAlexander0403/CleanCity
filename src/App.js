import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import ScrollToTop from './hooks/useScrollToTop';
import './styles/body.scss';
import PrivateRoute from './components/privateRoute/PrivateRoute';

import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Navbar from './components/navbar/Navbar';
import Reports from './pages/Reports';
import Campaigns from './pages/Campaigns';
import About from './pages/About';

function App() {

  return (
    <>
      <Helmet>
        <title>Clean City</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Helmet>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/signin" exact element={<Signin />} />
            <Route path="/signup" exact element={<Signup />} />
            <Route path="/*" exact element={<>
              <header>
                <Navbar />
              </header>
              <Routes>
                <Route exact path="/reports/*" element={<PrivateRoute><Reports /></PrivateRoute>} />
                <Route exact path="/campaigns/*" element={<PrivateRoute><Campaigns /></PrivateRoute>} />
                <Route exact path="/about/*" element={<About />} />
                <Route exact path="/*" element={<Home />} />
                <Route path="*" exact element={<NotFound />} />
              </Routes>
              <footer>
                <div>
                <h2>Propósito</h2>
                <p>Este proyecto fue diseñado para ayudar a notificar a las autoridades
                  sobre el problema de basura que tenemos hoy en día.
                </p>
                <div className="info">
                  <p className="class">Aplicaciones para I4.0</p>
                  <p className="school">Universidad Tecnológica Metropolitana</p>
                </div>
                <div className="participants">
                  <h4>Colaboradores</h4>
                  <ul>
                    <li><p>Christian Alexander Vázquez González</p></li>
                    <li><p>Jordy Javier Hoil Couoh</p></li>
                    <li><p>Eduardo Emanuel Herrera Pech</p></li>
                  </ul>
                </div>
                </div>
                <div className="img-container">
                  <img src="/assets/img/orgullo-utm-01.png" alt="orgullo utm"/>
                </div>
              </footer>
            </> } />
          </Routes>
        </ScrollToTop>
      </Router> 
    </>
  );
}

export default App;
