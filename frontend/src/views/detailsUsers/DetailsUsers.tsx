import React, { useEffect, useState } from 'react'
import { User } from "../../model/types/User"
import { useParams } from "react-router-dom"
import { getFreshUsers, getUser } from "../../model/services/index"
import NavBar from "views/components/navbar/NavBar"
import { Col, Container, Row, Card } from "react-bootstrap"
import CustomOffcanvas from "../components/CustomCanvas"

const DetailsUsers = () => {
    const { userId } = useParams()
    const [user, setUser] = useState<User | null>(null)
    const [activePage, setActivePage] = useState(1)
    const [users, setUsers] = useState<User[]>([])
    const [show, setShow] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const freshUser = async () => {
        const userData = await getFreshUsers()
        setUsers(userData)
    }

    useEffect(() => {
        if (!userId) return
        const fetchData = async () => {
            const usersData = await getUser(userId)
            setUser(usersData)
        }

        fetchData()
    }, [userId])

    const filteredUsers = users.filter((user) => {
        const fullName = `${user.name.first} ${user.name.last}`.toLowerCase()
        return fullName.includes(searchTerm.toLowerCase())
    })

    // configs das pages
    const itemsPerPage = 8
    const totalItems = users.length
    const totalPages = Math.ceil(totalItems / itemsPerPage)
    // definindo o numero de paginas
    const items = Array.from({ length: totalPages }, (_, index) => index + 1)
    // definindo primeira e ultima pagina
    const startIndex = (activePage - 1) * itemsPerPage
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems)
    // separando os usuarios por pagina
    const visibleItems = filteredUsers.slice(startIndex, endIndex)

    return (

        <Container fluid>
            <NavBar handleShow={handleShow} />
            <Container fluid>
                <Row>
                    <Col md={2} className="p-0 d-none d-lg-block">
                        <CustomOffcanvas show={show} handleClose={handleClose} carregarNewUsers={freshUser} filtrarUsuariosNomeSetTerm={setSearchTerm} filtrarUsuariosNomeTerm={searchTerm} />
                    </Col>
                    <Col md={10}>
                        <div>
                            <h1 className="my-4 fw-bold text-center titleList">Info</h1>
                        </div>
                        <Row>

                            <Col md={6}>
                                <Card className="m-2 cardStyle">
                                    <Card.Body>
                                        <Card.Title>{`${user?.name.first} ${user?.name.last}`}</Card.Title>
                                        <Card.Subtitle>{user?.location.state}</Card.Subtitle>
                                        <Card.Text>{user?.email} </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Col md={6}><Card className="m-2 cardStyle">
                                    <Card.Body>
                                        <Card.Title>{`${user?.name.first} ${user?.name.last}`}</Card.Title>
                                        <Card.Subtitle>{user?.location.state}</Card.Subtitle>
                                        <Card.Text>{user?.email} </Card.Text>
                                    </Card.Body>
                                </Card></Col>
                                <Col md={6}><Card className="m-2 cardStyle">
                                    <Card.Body>
                                        <Card.Title>{`${user?.name.first} ${user?.name.last}`}</Card.Title>
                                        <Card.Subtitle>{user?.location.state}</Card.Subtitle>
                                        <Card.Text>{user?.email} </Card.Text>
                                    </Card.Body>
                                </Card></Col>
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </Container>
        </Container>

    )
}

export default DetailsUsers
