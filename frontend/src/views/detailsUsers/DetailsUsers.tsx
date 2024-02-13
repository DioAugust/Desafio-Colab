import React from 'react'
import { User } from "../../model/types/User"

interface DetailsUsersProps {
    user: User;
  }

const DetailsUsers: React.FC<DetailsUsersProps> = ({ user }) => {
    return (
        <div >
            <h1>{user.name.title}</h1>

        </div>
    ) 
}

export default DetailsUsers
