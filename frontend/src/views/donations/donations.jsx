import { Link } from "react-router-dom";
import "./donations.css";
import '../landing/Landing'; // Asegúrate de tener este archivo para los estilos del header
import { Footer } from "../footer";

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
        </nav>
      </header>

      <main>
        <section className="donation-form-container">
          <h2>Haz una Donación</h2>
          <form className="donation-form">
            <div className="form-group">
              <label htmlFor="name">Nombre:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="amount">Monto de la Donación:</label>
              <input type="number" id="amount" name="amount" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje:</label>
              <textarea id="message" name="message" rows="4"></textarea>
            </div>
            <button type="submit">Donar</button>
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
};
