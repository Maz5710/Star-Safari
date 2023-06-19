import { Link } from 'react-router-dom'
import { CartFill } from 'react-bootstrap-icons'

const Notification = ({ type }) => {
  return (
    <div>
      <h3>Thank you for your purchase</h3>

      {type} <Link to={'/cart'}><CartFill/>View Cart</Link>
    </div>
  )
}

export default Notification