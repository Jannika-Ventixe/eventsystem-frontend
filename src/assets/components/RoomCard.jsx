import React from 'react'
import room1 from '../assets/images/room1.jpg';
import room2 from '../assets/images/room2.jpg';

const RoomCard = ({ room }) => {
  return (
    <div className="room-card">
      <img src={room.image} alt={room.name} className="room-image" />

      <div className="room-content">
        <h3 className="room-title">{room.name}</h3>
        <p className="room-description">{room.description}</p>
        <p className="room-price">Pris: {room.price} kr/natt</p>
      </div>
    </div>
  );
};

export default RoomCard