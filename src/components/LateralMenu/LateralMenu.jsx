import React from 'react';
import './LateralMenu.css';
import { Link } from 'react-router-dom';
import {
  FaTimes,
  FaHotjar,
  FaDesktop,
  FaToolbox,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTwitch,
} from 'react-icons/fa';

const LateralMenu = ({ show, handleShow }) => {
  return (
    <>
      <aside className={show ? `aside active` : `aside`}>
        <div className="lateral-menu-container">
          <div className="lateral-menu-head">
            <Link to="/home">
              <img
                src="/assets/LogoElementx.svg"
                alt="logo"
                className="logo-img"
              />
            </Link>

            <button
              className="lateral-menu-head-btn-close"
              onClick={handleShow}
            >
              <FaTimes size="30" color="white" />
            </button>
          </div>
          <nav className="lateral-menu-items-container">
            <div className="submenu-container">
              <h3>
                <FaHotjar /> <span>Dashboard</span>
              </h3>
              <ul>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/">Estadisticas</Link>
                </li>
                <li>
                  <Link to="/sales">Ventas</Link>
                </li>
              </ul>
            </div>
            <div className="submenu-container">
              <h3>
                <FaDesktop /> <span>Informes</span>
              </h3>
              <ul>
                <li>
                  <Link to="/users">Usuarios</Link>
                </li>
                <li>
                  <Link to="/products">Productos</Link>
                </li>
                <li>
                  <Link to="/orders">Ordenes</Link>
                </li>
              </ul>
            </div>
            <div className="submenu-container">
              <h3>
                <FaToolbox /> <span>Acciones</span>
              </h3>
              <ul>
                <li>
                  <Link to="/add-product">Agregar Productos</Link>
                </li>
                <li>
                  <Link to="/add-category">Agregar Categoria</Link>
                </li>
                <li>
                  <Link to="/add-user">Agregar Usuarios</Link>
                </li>
              </ul>
            </div>
            <div className="lateral-menu-footer">
              <a
                href="https://www.instagram.com/elementxgamezone"
                target={'_blank'}
              >
                <FaInstagram color="#B9D2D2" size="30px" />
              </a>
              <a
                href="https://www.facebook.com/ElementxGameZone"
                target={'_blank'}
              >
                <FaFacebook color="#B9D2D2" size="30px" />
              </a>
              <a href="/" target={'_blank'}>
                <FaYoutube color="#B9D2D2" size="30px" />
              </a>
              <a href="/" target={'_blank'}>
                <FaTwitch color="#B9D2D2" size="30px" />
              </a>
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default LateralMenu;
