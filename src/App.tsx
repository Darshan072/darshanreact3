import React from "react";
import "./App.css";

import {  useNavigate } from 'react-router-dom';

const navigate = useNavigate();

const handleLogin = () => {
  navigate('/darshan');
};

function App() {
  return <h1 className="App" onClick={() => {
    handleLogin();
  }} >Hello From BnD!</h1>;
}

export default App;
