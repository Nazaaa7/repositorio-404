import React from 'react'
import { Link } from 'react-router-dom'

export const Aboutus = () => {
  return (
    <>
     <header>
        <div class="top-bar">
            <div class="logo">
                <img src="" alt="EcoGreen"/>
                <span>EcoGreen</span>
            </div>
            <div class="contact-info">
                <span>Email:</span>
                <span>Telefono:</span>
            </div>
        </div>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/aboutus">Sobre Nosotros</Link></li>
                <li><Link to="locacion.html">Locaciones</Link></li>
                <li><Link to="#">Contacto</Link></li>
            </ul>
            <a href="#" class="donate-button">Donaciones</a>
        </nav>
    </header>


    
    <section class="goals">
        <div class="container">
            <h2>¿Quienes somos?</h2>
            <div class="goal-cards">
                <div class="goal-card2">
                    <p>Nos dedicamos a informar y educar a la comunidad sobre la importancia y los beneficios de reciclar el aceite usado. 
                        Nuestra empresa se enfoca en proporcionar la información necesaria para que tanto individuos como empresas puedan gestionar este residuo de manera responsable y sostenible, evitando su impacto negativo en el medio ambiente.</p>                </div>
            
            </div>
            <br/>
            <div class="goal-cards">
                <div class="goal-card">
                    <h3>Mision</h3>
                    <p>Nuestra misión es concienciar y educar a la sociedad sobre los riesgos asociados con la incorrecta disposición del aceite usado, proporcionando guías, recursos, y apoyo para facilitar su reciclaje de manera segura y efectiva.</p>
                </div>
                <div class="goal-card">
                    <h3>Vision</h3>
                    <p>Aspiramos a ser la fuente principal de información y educación sobre el reciclaje de aceite usado, fomentando una cultura de sostenibilidad y responsabilidad ambiental a nivel nacional. Queremos empoderar a cada persona para que contribuya a un futuro más limpio y seguro mediante prácticas informadas y conscientes.</p>
                </div>
                
                
            </div>
        
        </div>
        
    
    </section>
    </>
  )
}
