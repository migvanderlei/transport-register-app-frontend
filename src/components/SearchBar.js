import { React, useRef } from "react";
import TextField from "@mui/material/TextField";
import Button from "react-bootstrap/Button";

const axios = require("axios");

const API_URL = "https://secure-taiga-07754.herokuapp.com";

const SearchBar = () => {
  const valueRef = useRef("");

  const makeSearch = () => {
    console.log(valueRef.current.value);
    let id = valueRef.current.value;
    console.log(`${API_URL}/envio/${id}`);
    axios
      .get(`${API_URL}/envio/${id}`)
      .then(function (response) {
        // handle success
        console.log(response);
        const retrievedId = response.data.id;

        if (retrievedId) {
          // document.getElementById("response-id") = <QueryResultSend data={response.data}/>
          window.location = `/query-result?id=` + id;
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        document.getElementById("response-id").innerHTML =
          "Nenhum dado encontrado para essa busca!";
      })
      .then(function () {});
  };

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

      <div id="response-id"></div>
    </div>
  );
};

export default SearchBar;
