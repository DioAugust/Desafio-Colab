import React from 'react'
import { Offcanvas, Dropdown, Form, Button } from 'react-bootstrap'

import CardPerfil from "../carPerfil/CardPerfil"

import './index.css'

interface CustomCanvasProps {
  show: boolean
  handleClose: () => void
  carregarNewUsers?: () => void
  filtrarUsuariosNomeSetTerm?: (term: string) => void
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
          <Dropdown.Menu className="border-0 w-100 d-flex flex-column" show>
            <Button href="/" className="text-start fs-5 bg-white text-black buttonStyle d-flex align-items-center border-0 ">
              <span className="material-symbols-outlined">
                home
              </span> Home</Button>

            <Button href="/lists" className="text-start my-1 fs-5 bg-white text-black buttonStyle d-flex align-items-center border-0">
              <span className="material-symbols-outlined">
                patient_list
              </span>
              Listagem de cidadãos</Button>

            <Button onClick={() => carregarNewUsers?.()} disabled={!carregarNewUsers} className="text-start bg-white text-black fs-5 buttonStyle d-flex align-items-center border-0">
              <span className="material-symbols-outlined">
                refresh
              </span>
              Carregar novos cidadãos
            </Button>
            <Form className="my-1 mx-2 px-2 fs-5">
              <Form.Label>
                Filtro
              </Form.Label>
              <Form.Control
                type="text"
                className="rounded-pill sd"
                placeholder="Busca por nome"
                value={filtrarUsuariosNomeTerm === 'false' ? '' : filtrarUsuariosNomeTerm}
                disabled={filtrarUsuariosNomeTerm === 'false'}
                onChange={(e) => filtrarUsuariosNomeSetTerm?.(e.target.value) ?? undefined}>
              </Form.Control>
            </Form>
            <CardPerfil />
          </Dropdown.Menu>
        </Dropdown>
      </Offcanvas.Body>
    </Offcanvas>

  )
}

export default CustomCanvas
