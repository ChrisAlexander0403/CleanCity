import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { createGlobalStyle } from 'styled-components';

import ScrollToTop from './hooks/useScrollToTop';

import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Navbar from './components/navbar/Navbar';
import Users from './pages/Users';
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
                <Route exact path="/users" element={<Users />} />
                <Route exact path="/reports" element={<Reports />} />
                <Route exact path="/restaurants" element={<Home />} />
                <Route exact path="/routes" element={<Home />} />
                <Route exact path="/" element={<Home />} />
                <Route path="*" exact element={<NotFound />} />
              </Routes>
              <footer>
                <p>Footer</p>
              </footer>
            </>} />
          </Routes>
        </ScrollToTop>
      </Router> 
    </>
  );
}

export default App;
