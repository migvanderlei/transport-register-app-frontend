import { React } from "react";

import SearchBar from "../../components/SearchBar";

import "../../css/SearchBar.css";

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