import { Navbar } from "react-bootstrap"

import logoColab from '../../../assets/logoColab.png'
import colab from '../../../assets/colab.svg'
import menu from '../../../assets/menu.png'

import './index.css'

interface NavBarProps {
    handleShow: () => void
}

const NavBar = ({ handleShow }: NavBarProps) => {
    return (
        <Navbar className="justify-content-between sombraNav p-0">
            <div className="mx-2 justify-content-start py-1">
                <Navbar.Brand href="/">
                    <img src={logoColab} width="40" height="40" alt="colab logo" />
                </Navbar.Brand>
                <Navbar.Brand href="/">
                    <img src={colab} width="100" height="30" className="d-none d-lg-inline" alt="colab name" />
                </Navbar.Brand>
            </div>
            <div className="align-items-center justify-content-center">
                <Navbar.Brand className="brandValues fs-5 d-none d-lg-block">
                    Colaboração, Resiliência, Agilidade, Ética e Conhecimento.
                </Navbar.Brand>
                <img src={menu} className="d-lg-none menuButton mx-2" onClick={handleShow} width="40" height="40" alt="menu" />
            </div>
        </Navbar>
    )
}

export default NavBar