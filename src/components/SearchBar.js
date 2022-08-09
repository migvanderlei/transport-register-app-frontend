import { React, useState, useRef } from "react";
import TextField from "@mui/material/TextField";
import Button from 'react-bootstrap/Button';

import { Redirect } from "react-router-dom";

import FormQuerySend from "./send/FormQuerySend";

import "../css/SearchBar.css";
import { render } from "react-dom";

const axios = require('axios');

const API_URL = "https://secure-taiga-07754.herokuapp.com"


const SearchBar = () => {
  const valueRef = useRef('')

  const makeSearch = () => {
    console.log(valueRef.current.value)
    let id = valueRef.current.value
    console.log(`${API_URL}/envio/${id}`)
    axios.get(`${API_URL}/envio/${id}`)
    .then(function (response) {
      // handle success
      console.log(response);
      document.getElementById("response-id").innerHTML = response.data.id;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
  
    });
  }

  return (
    <div className="main">
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
          type="number"
          inputRef={valueRef}
        />
      </div>
      <Button variant="primary" size="lg" onClick={makeSearch}>
        Pesquisar
      </Button>

      <div id="response-id">
      </div>
    </div>
  );
}

export default SearchBar;