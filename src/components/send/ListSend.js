import React from 'react';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';

import '../../css/list-send.css';

class ListSend extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      dataIsLoaded: false
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          dataIsLoaded: true
        });
      })
  }

  render() {
    const { dataIsLoaded, items } = this.state;
    if (!dataIsLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>
        </div>
      );


    return (
      <>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>id</th>
              <th>Remetende</th>
              <th>Destinatário</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              items.map((item) => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.username}</td>
                  <td>{item.name}</td>

                  {(() => {
                    switch (item.email) {
                      case "Sincere@april.biz": return <Badge bg="success">Entregue</Badge>;
                      case "Karley_Dach@jasper.info": return <Badge bg="danger">Cancelado</Badge>;
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