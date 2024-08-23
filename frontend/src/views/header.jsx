import React from 'react';
import { Link } from 'react-router-dom';
import '../views/landing/Landing.css'; // Asegúrate de tener este archivo para los estilos del header

const Header = () => {
    return (
        <header>
            <div className="top-bar">
                <div className="logo">
                    <span>Greenly</span>
                </div>
                <div className="contact-info">
                    <span>Email: contacto@miempresa.com</span>
                    <span>Teléfono: +123 456 7890</span>
                </div>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/aboutus">Sobre Nosotros</Link></li>
                    <li><Link to="/locations">Locaciones</Link></li>
                    <li><Link to="/stadistics">Estadisticas</Link></li>
                </ul>
                <Link to="/login"   className="donate-button">Donaciones</Link>
            </nav>
        </header>
    );
};

export default Header;
