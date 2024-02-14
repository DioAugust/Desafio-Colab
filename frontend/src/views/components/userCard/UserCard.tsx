
import { Card, Image } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"

import { User } from "../../../model/types/User"
import './index.css'


interface UserCardProps {
    user: User
}
const UserCard = ({ user }: UserCardProps) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/details/${user.login.uuid}`)
    }

    return (
        <Card onClick={handleClick} border="light" className="cardStyle text-center">
            <Image className="fotoCard mt-4 mx-auto" src={user.picture.large} roundedCircle alt="User Thumbnail" />
            <Card.Body>
                <Card.Title className="fw-bold">{`${user.name.first} ${user.name.last}`}</Card.Title>
                <Card.Subtitle className="opacity-50">{user.location.state}</Card.Subtitle>
                <div className="d-flex justify-content-center m-2 gap-1 divEmail">
                    <Card.Text className="email">
                        <span className="material-symbols-outlined ">
                            mail
                        </span></Card.Text>
                    <Card.Text className="email">{user.email} </Card.Text>
                </div>
            </Card.Body>
        </Card>
    )
}


export default UserCard
