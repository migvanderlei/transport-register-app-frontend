import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useForm } from "react-hook-form";

import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const API_URL = "https://secure-taiga-07754.herokuapp.com"

const axios = require('axios');


const formatSend = (param, startDate1, startDate2, lastId) => {
  console.log("lastid: " + lastId)
  var envio = {}
  envio.id = String(lastId + 1).padStart(4, '0')
  envio.dataDeCriacao = startDate1.toISOString();
  envio.previsaoDeEntrega = startDate2.toISOString();
  envio.finalizado = false;
  envio.entregue = false;

  // pacote
  envio.pacote = {
    "peso": parseFloat(param.formGridWeight),
    "altura": parseFloat(param.formGridHeight),
    "largura": parseFloat(param.formGridWidth),
    "profundidade": parseFloat(param.formGridDepth)
  };

  console.log(envio.pacote)

  // remetente name 
  envio.remetente = {
    "nome": param.formGridSendName
  };

  // destinatario
  envio.destinatario = {
    "endereco": {
      "rua": param.formGridReceiveStreet,
      "cidade": param.formGridReceiveCity,
      "estadoOuProvincia": param.formGridReceiveState,
      "pais": param.formGridReceiveCountry,
      "cep": param.formGridReceiveZip
    },
    "nome": param.formGridReceiveName
  }

  // techos
  envio.trechos = []

  let a = {}

  let origem = {
    "rua": param.formGridSendStreet,
    "cidade": param.formGridSendCity,
    "estadoOuProvincia": param.formGridSendState,
    "pais": param.formGridSendCountry,
    "cep": param.formGridSendZip
  }

  a.origem = origem
  a.destino = envio.destinatario.endereco
  a.destinoFinal = envio.destinatario.endereco
  envio.trechos.push(a)

  console.log(envio)

  cadastraEnvio(envio)
}

function cadastraEnvio(data) {

  axios.post(API_URL + "/envio", data, {
          headers: {
            'Content-Type': 'application/json',
          }
        }
    )
    .then(function (response) {
      console.log(response);
      window.location = "/";
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}

const FormNewSend = () => {
  const [startDate1, setStartDate1] = useState(new Date());
  const [startDate2, setStartDate2] = useState(new Date());
  const [lastId, setLastId] = useState(0)

  const { register, getValues } = useForm();

  fetch(`${API_URL}/envios`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        if (json.length > 0 ) setLastId(json[0].index)
      });

  return (

    <Form>
      <div className="form-container">
        <div className="title-item-group">Pacote</div>
        <div className="container-send">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridWeight">
              <Form.Label>Peso</Form.Label>
              <Form.Control type="number"{...register("formGridWeight")} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridHeight">
              <Form.Label>Altura</Form.Label>
              <Form.Control type="number" {...register("formGridHeight")} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridWidth">
              <Form.Label>Largura</Form.Label>
              <Form.Control type="number" {...register("formGridWidth")} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridDepth">
              <Form.Label>Profundidade</Form.Label>
              <Form.Control type="number" {...register("formGridDepth")} />
            </Form.Group>
          </Row>
        </div>

        <div className="title-item-group">Datas</div>
        <div className="container-send">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCreateData">
              <Form.Label>Data da Criação</Form.Label>
              <DatePicker selected={startDate1} onChange={(date) => setStartDate1(date)} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCreateData">
              <Form.Label>Data de previsão da entrega</Form.Label>
              <DatePicker selected={startDate2} onChange={(date) => setStartDate2(date)} />
            </Form.Group>
          </Row>
        </div>

        <div className="title-item-group">Remetente</div>
        <div className="container-send">
          <Form.Group as={Col} controlId="formGridSendName">
            <Form.Label>Nome</Form.Label>
            <Form.Control {...register("formGridSendName")} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridSendStreet">
            <Form.Label>Rua</Form.Label>
            <Form.Control {...register("formGridSendStreet")} />
          </Form.Group>


          <Form.Group as={Col} controlId="formGridSendCountry">
            <Form.Label>País</Form.Label>
            <Form.Control {...register("formGridSendCountry")} />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridSendCity">
              <Form.Label>Cidade</Form.Label>
              <Form.Control {...register("formGridSendCity")} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridSendState">
              <Form.Label>Estado</Form.Label>
              <Form.Control {...register("formGridSendState")} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridSendZip">
              <Form.Label>CEP</Form.Label>
              <Form.Control {...register("formGridSendZip")} />
            </Form.Group>
          </Row>
        </div>

        <div className="title-item-group">Destinatário</div>
        <div className="container-send">
          <Form.Group as={Col} controlId="formGridReceiveName">
            <Form.Label>Nome</Form.Label>
            <Form.Control {...register("formGridReceiveName")} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridReceiveStreet">
            <Form.Label>Rua</Form.Label>
            <Form.Control {...register("formGridReceiveStreet")} />
          </Form.Group>


          <Form.Group as={Col} controlId="formGridReceiveCountry">
            <Form.Label>País</Form.Label>
            <Form.Control {...register("formGridReceiveCountry")} />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridReceiveCity">
              <Form.Label>Cidade</Form.Label>
              <Form.Control {...register("formGridReceiveCity")} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridReceiveState">
              <Form.Label>Estado</Form.Label>
              <Form.Control {...register("formGridReceiveState")} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridReceiveZip">
              <Form.Label>CEP</Form.Label>
              <Form.Control {...register("formGridReceiveZip")} />
            </Form.Group>
          </Row>
        </div>

        <div className="d-grid gap-2 button-submit">
          <Button variant="primary" size="lg"
            onClick={() => {
              const values = getValues(); // { test: "test-input", test1: "test1-input" }
              // const singleValue = getValues("test"); // "test-input"
              // const multipleValues = getValues(["test", "test1"]); //["test", "test1"]
              // // window.alert(values.values)
              formatSend(values, startDate1, startDate2, lastId)
            }}>
            Cadastrar
          </Button>
        </div>
      </div>
    </Form >
  )
};

export default FormNewSend;
