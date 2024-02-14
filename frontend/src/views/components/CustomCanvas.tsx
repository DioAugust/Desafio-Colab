import React from 'react'
import { Offcanvas, Dropdown, Card, Image } from 'react-bootstrap'

interface CustomCanvasProps {
  show: boolean
  handleClose: () => void
  carregarNewUsers: () => void
  filtrarUsuariosNomeSetTerm: (term: string) => void
  filtrarUsuariosNomeTerm: string
}


const CustomCanvas: React.FC<CustomCanvasProps> = ({ show, handleClose, carregarNewUsers, filtrarUsuariosNomeSetTerm, filtrarUsuariosNomeTerm }) => {
  return (

    <Offcanvas scroll={false} show={show} onHide={handleClose} responsive="lg" backdrop="false">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="m-0 p-0">
        <Dropdown className=" w-100" show>
          <Dropdown.Menu className="canvasBorder w-100 align-items-center" show>
            <Dropdown.Item href="/" className="m-0 p-0 d-flex justify-content-center fs-4">Home</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="/lists" className="m-0 p-0 d-flex justify-content-center fs-4">Listar usuários</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={carregarNewUsers} className="m-0 p-0 d-flex justify-content-center fs-4">Carregar novos usuarios</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item className = "m-0 p-0 d-flex justify-content-center fs-4">
            <input
                type="text"
                placeholder="Buscar por nome"
                value={filtrarUsuariosNomeTerm}
                onChange={(e) => filtrarUsuariosNomeSetTerm(e.target.value)}
              />
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
