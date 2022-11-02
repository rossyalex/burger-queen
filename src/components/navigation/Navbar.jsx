import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="home">Home</Link>
          </li>
          <li>
            <Link to="order">Order</Link>
          </li>
          <li>
            <Link to="kitchen">Kitchen</Link>
          </li>
          <li>
            <Link to="withdraw">Withdraw</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
