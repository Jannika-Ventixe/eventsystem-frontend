import React, { useEffect, useState } from 'react'
import RoomList from '../components/RoomList'
import room1 from '../images/room1.jpg';
import room2 from '../images/room2.jpg';

const Rooms = () => {
  const [rooms, setRooms] = useState([])

  const getRooms = async () => {
    try {
      const res = await fetch("https://roomprovider-a9gphedbgdatgndq.swedencentral-01.azurewebsites.net/api/room")
      if (!res.ok) throw new Error("Failed to fetch rooms.")
      const data = await res.json()

      const validRooms = Array.isArray(data.result) ? data.result : []

      const roomsWithImages = validRooms.map(room => ({
        ...room,
        image: room.id % 2 === 0 ? room2 : room1,
        title: room.title,
        description: room.description,
        pricePerNight: room.Price || room.pricePerNight || 0
      }));

      setRooms(roomsWithImages)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getRooms()
  }, [])

  return <RoomList rooms={rooms} />
}

export default Rooms