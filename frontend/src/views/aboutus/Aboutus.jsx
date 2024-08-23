import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../header'
import { Footer } from '../footer'

export const Aboutus = () => {
  return (
    <>
     <Header/>
    
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

    <Footer/>
    </>
  )
}
