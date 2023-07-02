import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import React, { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </Fragment>
  );
}

export default App;
