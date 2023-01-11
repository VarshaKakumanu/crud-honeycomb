import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
     <h5>CRUD opreations</h5>

     <BrowserRouter>
     <nav>
      <ul>
        <li>
          <Link to ="/">List users</Link>
        </li>
        <li>
          <Link to ="users/create">create users</Link>
        </li>
      </ul>
     </nav>
     </BrowserRouter>
    </div>
  );
}

export default App;
