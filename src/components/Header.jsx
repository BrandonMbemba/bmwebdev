import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import ImageBanner from "../../public/MIVA_V4_Plan-de-travail-1-copie-8.png";
import { FaBars } from 'react-icons/fa';
import Modal from "./Modal";
import { CartContext } from './CartContext';

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { cartItems } = useContext(CartContext);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="header">
      <img src={ImageBanner} alt="Logo de Brandon M'bemba" className="header-logo"/>

      {/* Menu Hamburger mobile */}
      <div className="mobile-menu-icon" onClick={toggleModal}>
        <FaBars />
      </div>

      {/* Nav desktop */}
      <nav className="desktop-nav">
        <ul>
          <NavLink to="/" className={({isActive}) => (isActive ? "underline" : "")}>
            <li>H O M E</li>
          </NavLink>
          <NavLink to="/about" className={({isActive}) => (isActive ? "underline" : "")}>
            <li>M I V A</li>
          </NavLink>
          <NavLink to="/Contact" className={({isActive}) => (isActive ? "underline" : "")}>
            <li>C O N T A C T</li>
          </NavLink>
          <NavLink to="/cart" className={({isActive}) => (isActive ? "underline" : "")}>
            <li>🛒 ({cartItems.length})</li>
          </NavLink>
        </ul>
      </nav>

      {/* Modal mobile */}
      <Modal isOpen={isModalOpen} toggleModal={toggleModal}>
        <ul>
          <NavLink to="/" onClick={toggleModal} className={({isActive}) => (isActive ? "underline" : "")}>
            <li>H O M E</li>
          </NavLink>
          <NavLink to="/about" onClick={toggleModal} className={({isActive}) => (isActive ? "underline" : "")}>
            <li>M I V A</li>
          </NavLink>
          <NavLink to="/contact" onClick={toggleModal} className={({isActive}) => (isActive ? "underline" : "")}>
            <li>C O N T A C T</li>
          </NavLink>
          <NavLink to="/cart" onClick={toggleModal} className={({isActive}) => (isActive ? "underline" : "")}>
            <li>🛒 ({cartItems.length})</li>
          </NavLink>
        </ul>
      </Modal>
    </div>
  );
};

export default Header;