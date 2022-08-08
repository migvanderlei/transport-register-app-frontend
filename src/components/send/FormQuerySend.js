import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const FormQuerySend = () => (
  <Form>
    <div className="form-container">
      <div className="title-item-group">Pacote</div>
      <div className="container-send">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridWeight">
            <Form.Label>Peso</Form.Label>
            <Form.Control placeholder="Disabled input" disabled />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridHeight">
            <Form.Label>Altura</Form.Label>
            <Form.Control placeholder="Disabled input" disabled />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridWidth">
            <Form.Label>Largura</Form.Label>
            <Form.Control placeholder="Disabled input" disabled />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridDepth">
            <Form.Label>Profundidade</Form.Label>
            <Form.Control placeholder="Disabled input" disabled />
          </Form.Group>
        </Row>
      </div>

      <div className="title-item-group">Datas</div>
      <div className="container-send">
        <Form.Group as={Col} controlId="formGridCreateData">
          <Form.Label>Data da Criação</Form.Label>
          <Form.Control placeholder="Disabled input" disabled />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridDeliveryData">
          <Form.Label>Data de previsão da entrega</Form.Label>
          <Form.Control placeholder="Disabled input" disabled />
        </Form.Group>
      </div>

      <div className="title-item-group">Remetente</div>
      <div className="container-send">
        <Form.Group as={Col} controlId="formGridSendName">
          <Form.Label>Nome</Form.Label>
          <Form.Control placeholder="Disabled input" disabled />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridSendStreet">
          <Form.Label>Rua</Form.Label>
          <Form.Control placeholder="Disabled input" disabled />
        </Form.Group>


        <Form.Group as={Col} controlId="formGridSendCountry">
          <Form.Label>País</Form.Label>
          <Form.Control placeholder="Disabled input" disabled />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridSendCity">
            <Form.Label>Cidade</Form.Label>
            <Form.Control placeholder="Disabled input" disabled />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridSendState">
            <Form.Label>Estado</Form.Label>
            <Form.Control placeholder="Disabled input" disabled />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridSendZip">
            <Form.Label>CEP</Form.Label>
            <Form.Control placeholder="Disabled input" disabled />
          </Form.Group>
        </Row>
      </div>

      <div className="title-item-group">Destinatário</div>
      <div className="container-send">
        <Form.Group as={Col} controlId="formGridReceiveName">
          <Form.Label>Nome</Form.Label>
          <Form.Control placeholder="Disabled input" disabled />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridReceiveStreet">
          <Form.Label>Rua</Form.Label>
          <Form.Control placeholder="Disabled input" disabled />
        </Form.Group>


        <Form.Group as={Col} controlId="formGridReceiveCountry">
          <Form.Label>País</Form.Label>
          <Form.Control placeholder="Disabled input" disabled />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridReceiveCity">
            <Form.Label>Cidade</Form.Label>
            <Form.Control placeholder="Disabled input" disabled />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridReceiveState">
            <Form.Label>Estado</Form.Label>
            <Form.Control placeholder="Disabled input" disabled />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridReceiveZip">
            <Form.Label>CEP</Form.Label>
            <Form.Control placeholder="Disabled input" disabled />
          </Form.Group>
        </Row>
      </div>
    </div>
  </Form >
);

export default FormQuerySend;
