import { React, useState } from "react";
import Button from 'react-bootstrap/Button';

import SearchBar from "../../components/SearchBar";
import List from "../../components/List";

import "../../css/SearchBar.css";
import NotFound from "../NotFound";


const QuerySend = () => {
    return (
        <div className="container-page">
            <div className="main">
                <h3>Buscar por envio</h3>
                <SearchBar />
            </div>
        </div>
    );
}

export default QuerySend;