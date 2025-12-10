import { Package } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <div className="logo-icon">
            <Package className="logo-package" />
          </div>
          <div className="logo-text">
            <h1 className="logo-title">Inventory Management System</h1>
            <p className="logo-subtitle">Track & Manage Company Assets</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
