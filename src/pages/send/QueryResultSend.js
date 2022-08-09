import React from "react";
import FormQuerySend from "../../components/send/FormQuerySend";
const API_URL = "https://secure-taiga-07754.herokuapp.com";
const axios = require("axios");

class QueryResultSend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      dataIsLoaded: false,
    };
  }

  componentDidMount() {
    fetch(`${API_URL}/envio/` + window.location.search.replace("?id=", ""))
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({
          items: json,
          dataIsLoaded: true,
        });
      });
  }

  render() {
    const { dataIsLoaded, items } = this.state;
    console.log(dataIsLoaded);
    console.log(items);
    if (!dataIsLoaded) {
      return (
        <div>
          <h1> Por favor, aguarde... </h1>
        </div>
      );
    }

    return (
      <>
        <FormQuerySend data={items} />
      </>
    );
  }
}

export default QueryResultSend;
