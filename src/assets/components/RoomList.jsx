import React from 'react';
import RoomItem from './RoomItem'


const RoomList = ({ rooms }) => {
  if (!Array.isArray(rooms)) {
    return <p>Loading rooms...</p>
  }

  if (rooms.length === 0) {
    return <p>Could not find rooms.</p>
  }

  return (
    <section className="room-list">
      {rooms.map(room => (
        <RoomItem key={room.id} item={room} />
      ))}
    </section>
  )
}

export default RoomList