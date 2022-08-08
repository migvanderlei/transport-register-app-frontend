import { React, useState } from "react";
import Button from 'react-bootstrap/Button';

import SearchBar from "../../components/SearchBar";
import List from "../../components/List";

import "../../css/SearchBar.css";
import NotFound from "../NotFound";


const printLog = () => {
    console.log(">>>>")
}

const QuerySend = () => {
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
        console.log(lowerCase);
    };



    return (
        <div className="container-page">
            <div className="main">
                <h3>Buscar por envio</h3>
                <SearchBar />
                <Button variant="primary" size="lg" onClick={printLog}>
                    Pesquisar
                </Button>
                <List input={inputText} />
            </div>
        </div>
    );
}

export default QuerySend;