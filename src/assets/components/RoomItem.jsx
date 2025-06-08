import React from 'react'
import { Link } from 'react-router-dom';



const RoomItem = ({ item }) => {
  return (
    <div className="room-card">
      <img src={item.image} alt={item.title} className="room-image" />
      <div className="room-content">
        <h3 className="room-title">{item.title || "No title"}</h3>
        <p className="room-description">{item.description || "No description available."}</p>
        <p className="room-price">Price: {item.pricePerNight ?? 0} SEK/night</p>
        <Link to={`/rooms/booking/${item.id}`} className="book-button">
          Book
        </Link>
      </div>
    </div>
  )
}

export default RoomItem