import React from 'react';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';

import '../../css/list-send.css';

const API_URL = "https://secure-taiga-07754.herokuapp.com"

const findStatus = (data) => {
  let sendjson = JSON.parse(data)
  let finalizado = sendjson.finalizado
  let entregue = sendjson.entregue
  
  console.log("finalizado: " + finalizado)
  console.log("entregue: " + entregue)

  if (finalizado === "true" && entregue === "true") return "entregue";
  if (finalizado === "true" && entregue === "false") return "cancelado";
  if (finalizado === "false" && entregue === "false") return "progresso";
}

const findId = (data) => {
  let sendjson = JSON.parse(data)
  console.log(sendjson)
  return sendjson.id
}

const findSender = (data) => {
  let sendjson = JSON.parse(data)
  return sendjson.remetente.nome
}

const findReceiver = (data) => {
  let sendjson = JSON.parse(data)
  return sendjson.destinatario.nome
}

class ListSend extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      dataIsLoaded: Boolean = false
    };
  }

  componentDidMount() {
    fetch(`${API_URL}/envios`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        this.setState ({
          items: json,
          dataIsLoaded: true
        });
      });
  }

  render() {
    const { dataIsLoaded, items } = this.state;
    if (!dataIsLoaded)
      return (
        <div>
          <h1> Por favor, aguarde... </h1>
        </div>
      );

    return (
      <>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Id</th>
              <th>Remetente</th>
              <th>Destinatário</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              items.map((item) => (
                <tr>
                  <td>{findId(item.data)}</td>
                  <td>{findSender(item.data)}</td>
                  <td>{findReceiver(item.data)}</td>

                  {(() => {
                    switch (findStatus(item.data)) {
                      case "entregue": return <Badge pill bg="success">Entregue</Badge>;
                      case "cancelado": return <Badge pill bg="danger">Cancelado</Badge>;
                      default: return <Badge bg="warning">Em progresso</Badge>;
                    }
                  })()}

                </tr>
              ))
            }
          </tbody>
        </Table>

      </>

    );
  }
}

export default ListSend;