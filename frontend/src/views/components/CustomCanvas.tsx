import React from 'react'
import { Offcanvas, Dropdown, Card, Image } from 'react-bootstrap'

interface CustomCanvasProps {
  show: boolean
  handleClose: () => void
}


const CustomCanvas: React.FC<CustomCanvasProps> = ({ show, handleClose }) => (

  <Offcanvas className="" show={show} onHide={handleClose} responsive="lg">
    <Offcanvas.Header closeButton>
      <Offcanvas.Title></Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body className="m-0 p-0">
      <Dropdown className=" w-100">
        <Dropdown.Menu className="canvasBorder w-100 align-items-center justify-content-between" show>
          <Dropdown.Item eventKey="1" className="text-lg m-0 p-0 d-flex justify-content-center fs-2">Home</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="2" className="m-0 p-0 d-flex justify-content-center fs-2">Listar usuários</Dropdown.Item>
          <Dropdown.Divider />
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

export default CustomCanvas
