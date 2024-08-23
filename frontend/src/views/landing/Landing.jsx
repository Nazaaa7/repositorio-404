import { Link } from "react-router-dom";
import "./landing.css";
import Header from "../header";
import {Footer} from "../footer"

export const Landing = () => {
  return (
    <>
      <Header />
      <section className="hero">
        <h1 className="tittle">Ayudemos al medio ambiente</h1>
        <p >¿Sabías que una gota de aceite puede llegar a contaminar 1 Litro de agua?</p>
      </section>

      <section className="services">
        <h2>
          El <span className="highlight">72%</span> de la población no posee conocimientos sobre la contaminación que produce el aceite.
        </h2>
        <div className="service-cards">
          <div className="service-card">
            <img src="/img/agua-contaminada(1).png" alt="Recycling" />
            <h3>¿Cúantos litros de agua contamina el aceite mal desechado?</h3>
            <p>Un litro de aceite usado contiene 5.000 veces más carga contaminante que el agua residual, y puede llegar a contaminar 40.000 litros de agua</p>
          </div>
          <div className="service-card">
            <img src="/img/la-contaminacion-del-agua(1).png" alt="Water Refine" />
            <h3>¿Cuántos animales acuaticos mueren por año?</h3>
            <p>Cada año, millones de animales acuáticos mueren o sufren graves daños debido a la contaminación por aceite usado en los cuerpos de agua</p>
          </div>
          <div className="service-card">
            <img src="/img/dano.png" alt="Ecosystem" />
            <h3>¿Cuántos animales se intoxican por año?</h3>
            <p>
            Cada año, 3 millones de animales acuáticos se intoxican debido a la contaminación por aceite usado en los rios, lo que puede causarles daños graves o la muerte.</p>
          </div>
          <div className="service-card">
            <img src="https://cdn-icons-png.freepik.com/512/10806/10806849.png" alt="Ecosystem" />
            <h3>¿Cúantas hectareas de tierra son afectadas por el aceite?</h3>
            <p>Un litro de aceite usado puede contaminar hasta 1,000,000 de litros de agua y afectar miles de metros cuadrados de tierra.</p>
          </div>
        </div>
       
      </section>

      <Footer />
    </>
  );
};
