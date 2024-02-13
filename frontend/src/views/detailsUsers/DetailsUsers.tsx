import React, { useEffect, useState } from 'react'
import { User } from "../../model/types/User"
import { useParams } from "react-router-dom"
import { getUser } from "../../model/services/index"

const DetailsUsers = () => {
    const { userId } = useParams()
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        if (!userId) return
        const fetchData = async () => {
            const usersData = await getUser(userId)
            setUser(usersData)
        }

        fetchData()
    }, [userId])
    return (
        <div >
            <h1>{user?.name.title}</h1>

        </div>
    )
}

export default DetailsUsers
