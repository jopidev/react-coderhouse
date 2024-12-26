import React from "react";
import "./Navbar.css"; 
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="navbar-logo-image"           alt="Logo">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
</svg>

        </div>

        {/* Barra de búsqueda */}
        <div className="navbar-search">
          <input
            type="text"
            placeholder="Buscar productos, marcas y más..."
            className="navbar-search-input"
          />
          <button className="navbar-search-button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="navbar-search-icon">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

          </button>
        </div>

        {/* Enlaces de navegación */}
        <div className="navbar-links">
          <a href="/categories" className="navbar-link">
            Categorías
          </a>
          <a href="/offers" className="navbar-link">
            Ofertas
          </a>
          <a href="/help" className="navbar-link">
            Ayuda
          </a>

          <CartWidget />
        </div>

        {/* Menú de usuario */}
        <div className="navbar-user">
          <a href="/cart" className="navbar-cart">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="navbar-cart-icon">
  <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


