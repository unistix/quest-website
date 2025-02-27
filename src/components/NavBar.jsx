// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>Quest</h1>
      {/* Menu Icon for Mobile */}
      <div
        style={{ ...styles.menuIcon, display: window.innerWidth < 425 ? "block" : "none" }}
        onClick={toggleMenu}
      >
        ☰
      </div>

      {/* Desktop Menu */}
      <ul style={{ ...styles.navLinks, display: window.innerWidth < 425 ? "none" : "flex" }}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/about-us" style={styles.link}>About</Link></li>
        <li><Link to="/artists" style={styles.link}>Artists</Link></li>
        <li><Link to="/gallery" style={styles.link}>Gallery</Link></li>
        <li><Link to="/tickets" style={styles.link}>Tickets</Link></li>
      </ul>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div style={styles.dropdownMenu}>
          <Link to="/" style={styles.dropdownItem} onClick={toggleMenu}>Home</Link>
          <Link to="/about-us" style={styles.dropdownItem} onClick={toggleMenu}>About</Link>
          <Link to="/artists" style={styles.dropdownItem} onClick={toggleMenu}>Artists</Link>
          <Link to="/gallery" style={styles.dropdownItem} onClick={toggleMenu}>Gallery</Link>
          <Link to="/tickets" style={styles.dropdownItem} onClick={toggleMenu}>Tickets</Link>
        </div>
      )}
      
    </nav>
  );
};

//TODO: fix nav bar toggle
//https://luqmanshaban.medium.com/creating-a-responsive-navbar-in-react-a-beginners-guide-creating-a-responsive-navbar-in-react-c454acaa55a
const styles = {
    nav: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#333",
        color: "white",
        zIndex: 1000, // Ensures navbar stays above content
    },
    logo: {
        fontSize: "24px",
        paddingLeft: "20px"
      },
      menuIcon: {
        display: "none",
        fontSize: "24px",
        cursor: "pointer",
      },
      navLinks: {
        listStyle: "none",
        display: "flex",
        gap: "15px",
        paddingRight:"20px"
      },
      dropdownMenu: {
        /*display: isOpen ? "block" : "none", */
        position: "absolute",
        top: "60px",
        left: "0",
        width: "100%",
        background: "#444",
        padding: "10px 0",
        textAlign: "center",
      },
      dropdownItem: {
        padding: "10px",
        display: "block",
        color: "white",
        textDecoration: "none",
      },
      link: {
        color: "white",
        textDecoration: "none",
        fontSize: "18px",
      },
};

export default NavBar;
