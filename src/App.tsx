import React from "react";
import "./App.css";

import {  useNavigate } from 'react-router-dom';

function App() {

const navigate = useNavigate();

const handleLogin = () => {
  navigate('/darshan');
};


  return <h1 className="App" onClick={() => {
    handleLogin();
  }} >Hello From BnD!</h1>;
}

export default App;
