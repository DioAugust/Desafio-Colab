import { useState, useEffect } from "react"
import { Container, Col, Row, Pagination, Navbar } from 'react-bootstrap'

import { User } from "../../model/types/index"
import { getUsers } from "../../model/services/index"

import UserCard from "../components/UserCard"
import CustomOffcanvas from "../components/CustomCanvas"

import logoColab from '../../assets/logoColab.png'
import menu from '../../assets/menu.png'
import './index.css'


const ListUsers = () => {
  const [activePage, setActivePage] = useState(1)
  const [users, setUsers] = useState<User[]>([])
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)


  useEffect(() => {
    const fetchData = async () => {
      const usersData = await getUsers()
      setUsers(usersData)
    }

    fetchData()
  }, [activePage])

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
  const visibleItems = users.slice(startIndex, endIndex)

  return (
    <Container fluid >
      <Navbar className="align-items-center justify-content-between">
        <div className="justify-content-start align-items-center">
          <Navbar.Brand href="/" className="fs-2 fw-bold colab-color">
            <img src={logoColab} width="50" height="50" alt="colab logo" /> colab
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Brand className="brandValues fs-5 d-none d-lg-block">
            Colaboração, Resiliência, Agilidade, Ética e Conhecimento.
          </Navbar.Brand>
          <img src={menu} className="d-lg-none menuButton mx-3" onClick={handleShow} width="60" height="60" alt="menu" />
        </div>
      </Navbar>


      <Container fluid>
        <Row>
          <Col md={2} className="p-0">
            <CustomOffcanvas show={show} handleClose={handleClose} />
          </Col>
          <Col>
            <div>
              <h1 className="my-4 text-center">Lista de usuários</h1>
            </div>
            <Row>
              {visibleItems.map((user, index) => (
                <UserCard key={index} user={user} />
              ))}
            </Row>

            <Navbar className="justify-content-center">
              <Pagination size="lg">
                <Pagination.First onClick={() => setActivePage(1)} />
                <Pagination.Prev onClick={() => setActivePage((prev) => Math.max(prev - 1, 1))} />
                {items.map((number) => (
                  <Pagination.Item
                    key={number}
                    active={number === activePage}
                    onClick={() => setActivePage(number)}
                  >
                    {number}
                  </Pagination.Item>
                ))}
                <Pagination.Next onClick={() => setActivePage((prev) => Math.min(prev + 1, totalPages))} />
                <Pagination.Last onClick={() => setActivePage(totalPages)} />
              </Pagination>
            </Navbar>
          </Col>
        </Row>
      </Container>

    </Container>
  )
}

export default ListUsers
