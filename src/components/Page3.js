import React from "react";
import logo from '../logo.svg';
import '../App.css';

const Page3 = ({ onRouteChange }) => {
  return(
  <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Pagina&nbsp;3<br/>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <button onClick={() => onRouteChange('page1')}>Page1</button>
      <button onClick={() => onRouteChange('page2')}>Page2</button>
      <button className="disabled">Page3</button>
  </div>
  )
}

export default Page3;