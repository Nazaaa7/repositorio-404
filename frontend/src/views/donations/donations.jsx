import { Link } from "react-router-dom";
import "./donations.css";
import '../landing/Landing'; // Asegúrate de tener este archivo para los estilos del header
import {Footer} from "../footer"

export const Donations = () => {
  return (
    <>
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
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/aboutus">Sobre Nosotros</Link></li>
                    <li><Link to="/locations">Locaciones</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
                <Link to="/login"   className="donate-button">Donaciones</Link>
            </nav>
        </header>

      <Footer />
    </>
  );
};
