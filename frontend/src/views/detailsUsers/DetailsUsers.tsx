import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Card, Image, Form, Spinner } from "react-bootstrap"
import { useParams } from "react-router-dom"

import { User } from "../../model/types/User"
import { getUser } from "../../model/services/index"

import NavBar from "views/components/navbar/NavBar"
import CustomOffcanvas from "../components/customCanvas/CustomCanvas"

const DetailsUsers = () => {
    const { userId } = useParams()
    const [user, setUser] = useState<User | null>(null)
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(true);

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    useEffect(() => {
        if (!userId) return
        const fetchData = async () => {
            try {
                const usersData: User = await getUser(userId)
                setUser(usersData)
            }
            finally {
                setLoading(false)
            
            }
        }
        fetchData()
    }, [userId])

    if (loading) {
        return (
          <div className="text-center mt-5">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        );
      }
    

    return (
        <div className="w-100">
            <NavBar handleShow={handleShow}/>
            <Container fluid>
                <Row>
                    <Col md={3} className="p-0 d-none d-lg-block offCanvas">
                        <CustomOffcanvas show={show} handleClose={handleClose} filtrarUsuariosNomeTerm={'false'} />
                    </Col>
                    <Col md={9}>
                        <div>
                            <h1 className="my-4 fw-bold text-center titleList">Perfil</h1>
                        </div>
                        <Row>
                            <Col md={6}>
                                <Card className="m-2 cardStyle">
                                    <Card.Header as="h1">{`${user?.name.first} ${user?.name.last}`}</Card.Header>
                                    <Image className="w-50 mt-4 mx-auto" src={user?.picture.large} roundedCircle alt="User Thumbnail" />

                                    <Card.Body>
                                        <Form>
                                            <Row md={12}>
                                                <Col md={6}>
                                                    <Form.Label>Titulo</Form.Label>
                                                    <Form.Control type="text" disabled value={user?.name.title}></Form.Control>
                                                </Col>
                                                <Col>
                                                    <Form.Label>Idade</Form.Label>
                                                    <Form.Control type="text" disabled value={user?.dob.age}></Form.Control>
                                                </Col>
                                            </Row>
                                            <Row md={12}>
                                                <Col md={6}>
                                                    <Form.Label>Pais</Form.Label>
                                                    <Form.Control type="text" disabled value={user?.location.country}></Form.Control>
                                                </Col>
                                                <Col>
                                                    <Form.Label>Sexo</Form.Label>
                                                    <Form.Control type="text" disabled value={user?.gender}></Form.Control>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Col md={9}>
                                    <Card className=" cardStyle">
                                        <Card.Header as="h2">Informações de contato</Card.Header>
                                        <Card.Body>
                                            <Row md={12}>
                                                <Col md={6}>
                                                    <Form.Label>Celular</Form.Label>
                                                    <Form.Control type="text" disabled value={user?.phone}>
                                                    </Form.Control>

                                                </Col>
                                                <Col>
                                                    <Form.Label>Fixo</Form.Label>
                                                    <Form.Control type="text" disabled value={user?.cell}>
                                                    </Form.Control>
                                                </Col>
                                            </Row>
                                            <Row md={12}>
                                                <Col md={12}>
                                                    <Form.Label>Email</Form.Label>
                                                    <Form.Control type="text" disabled value={user?.email}></Form.Control>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={9}>
                                    <Card className="cardStyle">
                                        <Card.Header as="h2">Dados de localização</Card.Header>
                                        <Card.Body>
                                            <Row md={12}>
                                                <Col md={6}>
                                                    <Form.Label>Estado</Form.Label>
                                                    <Form.Control type="text" disabled value={user?.location.state}></Form.Control>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Label>Cidade</Form.Label>
                                                    <Form.Control type="text" disabled value={user?.location.city}></Form.Control>
                                                </Col>
                                            </Row>
                                            <Row md={12}>
                                                <Col md={6}>
                                                    <Form.Label>Zip</Form.Label>
                                                    <Form.Control type="text" disabled value={user?.location.postcode}></Form.Control>
                                                </Col>
                                                <Col>
                                                    <Form.Label>Endereço</Form.Label>
                                                    <Form.Control type="text" disabled value={`${user?.location.street.name}, ${user?.location.street.number}`}></Form.Control>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DetailsUsers
