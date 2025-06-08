import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


const RoomDetailsPage = () => {
    const {id} = useParams()
    
        const [room, setRoom] = useState({})
    
        const getRooms = async () => {
            const res = await fetch(`https://roomprovider-a9gphedbgdatgndq.swedencentral-01.azurewebsites.net/api/room/${id}`)
    
            if (res.ok) {
                const response = await res.json()
                setRoom(response.result)
            }
        }
        useEffect (() => {
            getRooms()
    
        }, [])

  return (
    <div className="room-details">
        <h1>{room.title}</h1>
        <Link to={`/rooms/booking/${id}`}>Book Room</Link>

    </div>
  )
}

export default RoomDetailsPage