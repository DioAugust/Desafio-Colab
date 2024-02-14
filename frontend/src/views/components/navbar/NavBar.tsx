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
        <Navbar className="align-items-center justify-content-between">
            <div className="justify-content-start align-items-center">
                <Navbar.Brand href="/" className="align-items-center">
                    <img src={logoColab} width="60" height="60" alt="colab logo" /> <img src={colab} className="d-none d-lg-inline" alt="colab name" />
                </Navbar.Brand>
            </div>
            <div>
                <Navbar.Brand className="brandValues fs-5 fw-bold d-none d-lg-block">
                    Colaboração, Resiliência, Agilidade, Ética e Conhecimento.
                </Navbar.Brand>
                <img src={menu} className="d-lg-none menuButton " onClick={handleShow} width="60" height="60" alt="menu" />
            </div>
        </Navbar>
    )
}

export default NavBar