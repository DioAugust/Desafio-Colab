import React from 'react'
import { Offcanvas, Dropdown, Card, Image, Form } from 'react-bootstrap'

interface CustomCanvasProps {
  show: boolean
  handleClose: () => void
  carregarNewUsers: () => void
  filtrarUsuariosNomeSetTerm: (term: string) => void
  filtrarUsuariosNomeTerm: string
}


const CustomCanvas = ({ show, handleClose, carregarNewUsers, filtrarUsuariosNomeSetTerm, filtrarUsuariosNomeTerm }: CustomCanvasProps) => {
  return (

    <Offcanvas scroll={false} show={show} onHide={handleClose} responsive="lg" backdrop="false">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="m-0 p-0">
        <Dropdown className=" w-100" show>
          <Dropdown.Menu className="canvasBorder w-100 " show>
            <Dropdown.Item href="/" className="m-0 p-0 fs-5">Home</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="/lists" className="m-0 p-0 fs-5">Listar usuários</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={carregarNewUsers} className="m-0 p-0 fs-5">Carregar novos usuarios</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item className="m-0 p-0 fs-5">

              <Form>
                <Form.Control type="text" placeholder="Buscar por nome"
                  value={filtrarUsuariosNomeTerm}
                  onChange={(e) => filtrarUsuariosNomeSetTerm(e.target.value)}>
                </Form.Control>
              </Form>
            </Dropdown.Item>
            <Dropdown.Item className="m-0 p-0" eventKey="3">
              <Card className="canvasCard mx-3 my-5" border="black">
                <Image className="w-50 mt-4 mx-auto" src='' roundedCircle alt="User Thumbnail" />
                <Card.Body>
                  <Card.Title>Diogines</Card.Title>
                  <Card.Subtitle>user.location.state</Card.Subtitle>
                  <Card.Text>user.email </Card.Text>
                </Card.Body>
              </Card>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Offcanvas.Body>
    </Offcanvas>

  )
}

export default CustomCanvas
