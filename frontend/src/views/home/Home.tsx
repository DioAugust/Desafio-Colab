import { Col, Row, Container, Button } from 'react-bootstrap'

import './index.css'

const Home = () => {
  return (
    <div className="mainStyle backgroundWelcome w-100 align-items-center d-flex" >
      <Container fluid>
        <Row className="align-items-center">
          <Col md={7}>
            <h1 className="titleColorHome fw-bold">
              Teste desenvolvedor
              <br />
              Full stack
              <br />
              <span className="colab-color">colab</span>
            </h1>
            <img className="img-fluid" src="https://www.colab.com.br/wp-content/themes/theme-colab/assets/img/linha-verde.svg" alt="Mancha verde" />
            <h5 className="w-75">O objetivo deste teste é avaliar suas habilidades de desenvolvimento Fullstack, especialmente em TypeScript e React.
              Você será solicitado a criar uma aplicação web que consuma a API Random User Generator para exibir uma lista de usuários e os detalhes de cada usuário.
              Você deve criar um repositório no Git contendo o código-fonte da sua aplicação e um README.md explicando suas escolhas de arquitetura, paradigmas e quaisquer outras decisões importantes.</h5>
            <Button href="/lists" className="colab-color-bg text-white rounded-pill mt-3">Lista de cidadãos</Button>
          </Col>
        </Row>
      </Container>
    </div>

  )
}

export default Home
