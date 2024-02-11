import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import placeholderImg from '../../assets/placeholder.jpg'
import Image from 'react-bootstrap/Image'



const ListUsers = () => {

  return (
    <Container >
      <Row>
        {Array.from({ length: 5 }).map((_, index) => (
          <Col xs={6} md={4} key={index}>
            <Card className="w-50 ">
              <Image className="w-50 mx-auto" src={placeholderImg} roundedCircle  />
              <Card.Body>
                <Card.Title>Usuário {index + 1}</Card.Title>
                <Card.Text>
                  Detalhes do usuário {index + 1}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

    </Container>
  )
}

export default ListUsers
