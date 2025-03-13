import { Link } from "react-router-dom";

export function Header({ cartCount }) {
  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <Link to="/" className="navbar-brand">🛍️ Shopping App</Link>
      <Link to="/cart" className="btn btn-outline-light">
        🛒 Cart ({cartCount})
      </Link>
    </nav>
  );
}
