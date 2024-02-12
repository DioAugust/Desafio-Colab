import { useState, useEffect } from "react"
import User from "../../types/User"

import { Card, Container, Col, Row, Pagination, Navbar, Image } from 'react-bootstrap'
import smartPhone from '../../assets/smartphone.png'
import './index.css'

import axios from "axios"

const ListUsers = () => {
  const [activePage, setActivePage] = useState(1)
  const [users, setUsers] = useState<User[]>([])

  function getUsers() {
    axios.get('https://randomuser.me/api?results=25')
      .then(response => {
        setUsers(response.data.results)
      })
  }

  useEffect(() => {
    getUsers()
  }, [])

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
    <Container className="text-center">
      <Row>
        {visibleItems.map((user, index) => (
          <Col xs={6} md={3} key={index}>
            <a href="/details">
              <Card border="light" className="m-2 cardStyle">
                <Image className="w-50 mt-4 mx-auto" src={user.picture.large} roundedCircle alt="User Thumbnail" />
                <Card.Body>
                  <Card.Title>{`${user.name.first} ${user.name.last}`}</Card.Title>
                  <Card.Subtitle>{user.location.state}</Card.Subtitle>
                  <Card.Text>{user.email} <Image src={smartPhone} alt="Phone Thumbnail" /> </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
        ))}
      </Row>

      <Navbar fixed="bottom" className="justify-content-center">
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
    </Container>
  )
}

export default ListUsers
