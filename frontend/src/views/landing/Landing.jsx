import { Link } from "react-router-dom";
import "./landing.css";
import Header from "../header";
import {Footer} from "../footer"

export const Landing = () => {
  return (
    <>
      <Header />
      <section className="hero">
        <h1 className="title">Ayudemos al medio ambiente</h1>
        <p>¿Sabías que una gota de aceite puede llegar a contaminar 1 Litro de agua?</p>
      </section>

      <section className="services">
        <h2>
          El <span className="highlight">72%</span> de la población no posee conocimientos sobre la contaminación que produce el aceite.
        </h2>
        <div className="service-cards">
          <div className="service-card">
            <img src="/img/agua-contaminada(1).png" alt="Recycling" />
            <h3>¿Cuánta agua se contamina por día?</h3>
            <p>kjjfwioej/</p>
          </div>
          <div className="service-card">
            <img src="/img/la-contaminacion-del-agua(1).png" alt="Water Refine" />
            <h3>¿Cuántos peces mueren por año?</h3>
            <p>kjfkjldk</p>
          </div>
          <div className="service-card">
            <img src="/img/dano.png" alt="Ecosystem" />
            <h3>¿Cuántos animales se intoxican por año?</h3>
            <p></p>
          </div>
        </div>
        <div className="App">
   
    </div>
      </section>

      <Footer />
    </>
  );
};
