import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <ul>
      <li>
        <Link className="active" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
    </ul>
  );
};

export default Header;
