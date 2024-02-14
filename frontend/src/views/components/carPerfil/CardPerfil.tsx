import { Card, Image } from "react-bootstrap"
import fotoPerfil from "../../../assets/fotoPerfil.jpg"

import './index.css'

const CardPerfil = () => {
    return (
        <Card className="mx-3 mt-2" border="black">
            <Card.Header as="h5">Desenvolvedor</Card.Header>
            <Image className="w-50 mt-4 mx-auto" src={fotoPerfil} roundedCircle alt="User Thumbnail" />
            <Card.Body>
                <Card.Title>Diogines Augusto</Card.Title>
                <div className="d-flex flex-column ">
                    <Card.Link className="mx-0 pointer" href="https://www.linkedin.com/in/diogines-augusto/">Linkedin: <span className="linkStyle">Diogines Augusto</span></Card.Link>
                    <Card.Link className="mx-0 my-1 pointer" href="https://github.com/DioAugust">Github: <span className="linkStyle">DioAugust</span></Card.Link>
                    <Card.Link className="mx-0 pointer" href="https://github.com/DioAugust/Desafio-Colab">Repositório: <span className="linkStyle">Desafio-colab</span></Card.Link>
                </div>
            </Card.Body>
        </Card>
    )
}

export default CardPerfil
