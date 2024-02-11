
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Home = () => {
  return (
    <Container className="d-flex align-items-center">
      <Row>
        <Col>
          <h1>colab</h1>
          <h2>Teste vaga desenvolvedor full stack</h2>
          <h3>
            O objetivo deste teste é avaliar suas habilidades de desenvolvimento Fullstack,
            especialmente em TypeScript e React. Você será solicitado a criar uma aplicação web que
            consuma a API Random User Generator para exibir uma lista de usuários e os detalhes de
            cada usuário. Você deve criar um repositório no Git contendo o código-fonte da sua
            aplicação e um README.md explicando suas escolhas de arquitetura, paradigmas e quaisquer
            outras decisões importantes.
          </h3>
          <Button href="/lists" variant="primary">Lista de usuarios</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
