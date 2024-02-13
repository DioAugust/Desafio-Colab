
import { User } from "../../model/types/User"
import { Card, Col, Image } from 'react-bootstrap'
import smartPhone from '../../assets/smartphone.png'

interface UserCardProps {
    user: User
}
const UserCard: React.FC<UserCardProps> = ({ user }) => (
    <Col md={3}>
        <a href="/details">
            <Card border="light" className="m-2 cardStyle">
                <Image className="w-50 mt-4 mx-auto" src={user.picture.large} roundedCircle alt="User Thumbnail" />
                <Card.Body>
                    <Card.Title>{`${user.name.first} ${user.name.last}`}</Card.Title>
                    <Card.Subtitle>{user.location.state}</Card.Subtitle>
                    <Card.Text>{user.email} <Image src={smartPhone} alt="Phone Thumbnail" /> </Card.Text>
                </Card.Body>
            </Card>
        </a>
    </Col>
)


export default UserCard
