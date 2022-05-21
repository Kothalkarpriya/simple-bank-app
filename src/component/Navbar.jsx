import { Link } from "react-router-dom";
import "../assests/navbar.css";

export default function Navbar() {
  return (
    <nav>
      <h2>MyBank</h2>
      <ul>
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/pay">
            Pay
          </Link>
        </li>
        <li>
          <Link className="link" to="/save">
            Save
          </Link>
        </li>
        <li>
          <Link className="link" to="/invest">
            Invest
          </Link>
        </li>
        <li>
          <Link className="link" to="/borrow">
            Borrow
          </Link>
        </li>
      </ul>
      <button>Login</button>
    </nav>
  );
}
