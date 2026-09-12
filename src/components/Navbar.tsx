import Link from 'next/link';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="logo">
          <span className="text-gradient">Lumina</span> Clothing
        </Link>
        <div className="nav-links">
          <Link href="/" className="nav-link">Shop</Link>
          <Link href="/" className="nav-link">Collections</Link>
          <button className="cart-btn">
            Cart (0)
          </button>
        </div>
      </div>
    </nav>
  );
}
