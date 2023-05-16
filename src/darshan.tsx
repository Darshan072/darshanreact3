import React from "react";
import "./App.css";

import {  useNavigate } from 'react-router-dom';

function Darshan() {

const navigate = useNavigate();

const handleLogin = () => {
  navigate('/');
};


  return <h1 className="App" onClick={() => {
    handleLogin();
  }} >Hello From DARSHAN!</h1>;
}

export default Darshan;
