// import logo from './logo.svg';
import React from "react";
import './App.css';
import Header from './Header.js';
import Nav from './Nav.js';
import Main from './Main.js';
import Footer from './Footer.js';
import {Routes, Route} from  'react-router-dom';

function App() {
  return (
    // <>
    // <header></header>
    // <nav></nav>
    // <main></main>
    // <footer></footer>
    // </>
    <React.Fragment>
       <h1>Hello world</h1>
      <Routes>
        {/* <Route path="/" element={<Home />}/> */}
        <Route path="/haeder" element={<Header />}/>
        <Route path="/" element={<Nav/>}/>
        <Route path="/main" element={<Main />}/>
        <Route path="/footer" element={<Footer />}/>
        {/* <Route path="/" element={<Home />}/> */}
      </Routes>
      {/* <Header />
      <Nav />
      <Main />
      <Footer /> */}
    </React.Fragment>
  );
}

export default App;
