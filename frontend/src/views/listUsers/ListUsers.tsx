import { useState, useEffect } from "react"
import { Container, Col, Row, Pagination, Navbar } from 'react-bootstrap'

import { User } from "../../model/types/index"
import { getFreshUsers, getUsers } from "../../model/services/index"

import UserCard from "../components/UserCard"
import CustomOffcanvas from "../components/CustomCanvas"
import NavBar from "views/components/navbar/NavBar"

import './index.css'


const ListUsers = () => {
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
    const fetchData = async () => {
      const usersData = await getUsers()
      setUsers(usersData)
    }

    fetchData()
  }, [activePage])

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
    <Container fluid >
      <NavBar handleShow={handleShow} />

      <Container fluid>
        <Row>
          <Col md={2} className="p-0 d-none d-lg-block">
            <CustomOffcanvas show={show} handleClose={handleClose} carregarNewUsers={freshUser} filtrarUsuariosNomeSetTerm={setSearchTerm} filtrarUsuariosNomeTerm={searchTerm} />
          </Col>
          <Col md={10}>
            <div>
              <h1 className="my-4 fw-bold text-center titleList">Clientes cadastrados</h1>
            </div>
            <Row>

              {visibleItems.map((user, index) => (
                <Col lg={3} md={6} key={index}>
                  <UserCard user={user} />
                </Col>
              ))}

            </Row>

            <Navbar className="justify-content-center">
              <Pagination  >
                <Pagination.First onClick={() => setActivePage(1)} />
                <Pagination.Prev onClick={() => setActivePage((prev) => Math.max(prev - 1, 1))} />
                {items.map((number) => (
                  <Pagination.Item
                    linkStyle={{ color: '#00ac8b' }}
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
