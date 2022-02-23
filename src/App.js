import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { createGlobalStyle } from 'styled-components';

import ScrollToTop from './hooks/useScrollToTop';
import './styles/body.scss';
import PrivateRoute from './components/privateRoute/PrivateRoute';

import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Navbar from './components/navbar/Navbar';
import Reports from './pages/Reports';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;
  }
  body{
    background: #eee;
  }
  a{
    text-decoration: none;
    color: #000;
  }
  header{
    grid-area: header;
  }
  footer{
    height: 500px;
  }
`;

function App() {

  return (
    <>
      <Helmet>
        <title>Clean City</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Helmet>
      <GlobalStyle /> 
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
                <Route exact path="/reports" element={<PrivateRoute><Reports /></PrivateRoute>} />
                <Route exact path="/campaings" element={<>Campaings</>} />
                <Route exact path="/" element={<Home />} />
                <Route path="*" exact element={<NotFound />} />
              </Routes>
              <footer>
                <p>Footer</p>
              </footer>
            </> } />
          </Routes>
        </ScrollToTop>
      </Router> 
    </>
  );
}

export default App;
