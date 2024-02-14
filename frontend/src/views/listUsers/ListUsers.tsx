import { useState, useEffect } from "react"
import { Container, Col, Row, Pagination, Navbar } from 'react-bootstrap'

import { User } from "../../model/types/index"
import { getFreshUsers, getUsers } from "../../model/services/index"

import UserCard from "../components/userCard/UserCard"
import CustomOffcanvas from "../components/customCanvas/CustomCanvas"
import NavBar from "views/components/navbar/NavBar"

import './index.css'


const ListUsers = () => {
  const [activePage, setActivePage] = useState(1)
  const [users, setUsers] = useState<User[]>([])
  const [show, setShow] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const paginationStyle = {
    color: '#fff',
    borderColor: '#fff',
    backgroundColor: "#eb4b14",
    margin: "0 2px",
    borderRadius: "50%",
    fontWeight: "bold",
  }

  const freshUser = async () => {
    const userData = await getFreshUsers()
    setUsers(userData)
  }

  const filteredUsers = users.filter((user) => {
    const fullName = `${user.name.first} ${user.name.last}`.toLowerCase()
    return fullName.includes(searchTerm.toLowerCase())
  })

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
  const visibleItems = filteredUsers.slice(startIndex, endIndex)

  return (
    <div className="w-100 ">
      <NavBar handleShow={handleShow} />
      <Container fluid >
        <Row >
          <Col lg={3} className="p-0 d-none d-lg-block offCanvas">
            <CustomOffcanvas show={show} handleClose={handleClose} carregarNewUsers={freshUser} filtrarUsuariosNomeSetTerm={setSearchTerm} filtrarUsuariosNomeTerm={searchTerm} />
          </Col>
          <Col lg={9} >
            <div>
              <h1 className="mt-1 mx-2 fw-bold titleList">Cidadãos cadastrados</h1>
            </div>
            <Row>
              {visibleItems.map((user, index) => (
                <Col lg={3} md={6} key={index}>
                  <UserCard user={user} />
                </Col>
              ))}
            </Row>
          </Col>
          <Navbar className="justify-content-center ">
            <Pagination className="rounded-pill" >
              <Pagination.First linkStyle={paginationStyle} onClick={() => setActivePage(1)} />
              <Pagination.Prev linkStyle={paginationStyle} onClick={() => setActivePage((prev) => Math.max(prev - 1, 1))} />
              {items.map((number) => (
                <Pagination.Item
                  linkStyle={
                    {
                      color: '#fff',
                      borderColor: '#fff',
                      backgroundColor: number === activePage ? "#d84412fa" : "#eb4b14",
                      margin: "0 2px",
                      borderRadius: "50%",
                      fontWeight: "bold",
                    }
                  }
                  className=""
                  key={number}
                  active={number === activePage}
                  onClick={() => setActivePage(number)}
                >
                  {number}
                </Pagination.Item>
              ))}
              <Pagination.Next linkStyle={paginationStyle} onClick={() => setActivePage((prev) => Math.min(prev + 1, totalPages))} />
              <Pagination.Last linkStyle={paginationStyle} onClick={() => setActivePage(totalPages)} />
            </Pagination>
          </Navbar>
        </Row>
      </Container>
    </div>
  )
}

export default ListUsers
