import { useNavigate, useParams } from 'react-router-dom'
import { useEffect ,useState } from 'react'


const Booking = () => {

  const navigate = useNavigate()
  const {id} = useParams()
  const [room, setRoom] = useState(null)
  const [formData, setFormData] = useState({
  roomId: id,
  image: '',
  title: '',
  description: '',
  customerName: '',
  startDate: today,
  endDate: today
})

  useEffect(() => {
    const getRoom = async () => {
      try {
        const res = await fetch(`https://roomprovider-a9gphedbgdatgndq.swedencentral-01.azurewebsites.net/api/room/${id}`)
        if (!res.ok) throw new Error("Failed to fetch room.")
        const data = await res.json()

        setRoom(data.result)

        setFormData(prev => ({
          ...prev,
          image: data.result.image,
          title: data.result.title,
          description: data.result.description,
        }))
      } catch (err) {
        setError("Could not load room.")
        console.error(err)
      }
    }

    getRoom()
  }, [id])

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const res = await fetch("https://bookingservice54-bhd0ghdjfdgnbmhb.swedencentral-01.azurewebsites.net/api/booking", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        console.error("Booking failed.")
      } else {
        console.log("Booking successful.")
        navigate('/')
      }
    } catch (err) {
      console.error("Error submitting booking", err)
    }
  }

  if (!room) return <p>Loading...</p>

  return (
    <div>
      <h1>Book Room - {room.title}</h1>

      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>Customer Name</label>
          <input
            type="text"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Start Date</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>End Date</label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Book</button>
      </form>
    </div>
  )
}

export default Booking