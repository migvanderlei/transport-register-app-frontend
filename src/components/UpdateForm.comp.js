import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import React from 'react'

const UpdateForm = () => {
    return <Container>
        <Row>
            <Col>
            <h1>Atualização: Trajeto de Pacotes</h1>
            </Col>
        </Row>
        <hr/>

    <Row>
        <Col>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                
                <Form.Label>Código do Pacote</Form.Label>
                     <Form.Control placeholder="Insira o código aqui" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>País e Estado (ou Distrito // Região)</Form.Label>
                    <Form.Control placeholder="Em que país este pacote chegou?" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Hora</Form.Label>
                    <Form.Control placeholder="Que horas o pacote foi recebido?" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Data</Form.Label>
                    <Form.Control placeholder="Informe a data de recebimento do pacote" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Status da Atualização</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Selecione um Status</option>
                            <option value="1">Pacote Recebido</option>
                            <option value="2">Pacote Despachado</option>
                        </Form.Select>
                </Form.Group>

                <Button variant="primary" type="submit">
                  Atualizar
                </Button>
            </Form>
        </Col>
    </Row>

    </Container>
}

export default UpdateForm