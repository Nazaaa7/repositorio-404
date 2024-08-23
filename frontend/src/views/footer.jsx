import React from 'react'
import { Link } from 'react-router-dom';
import '../views/landing/Landing.css'; // Asegúrate de tener este archivo para los estilos del header

export const Footer = () => {
  return (
    <>
      <footer class="footer-distributed">
      <div class="footer-right">
  <a href="https://www.github.com"><img src="https://logowik.com/content/uploads/images/twitter-x-line9741.logowik.com.webp" alt="GitHub"  height={38} width={48}/></a>
  <a href="https://www.instagram.com"><img src="https://i.pinimg.com/564x/91/c1/cd/91c1cdeacc84d0a5673bb716549ba366.jpg" alt="Instagram" height={50} width={50}/></a>
  <a href="https://www.twitter.com"><img src="https://i.pinimg.com/564x/ca/33/33/ca3333db3f6eaeadfd40975ccda7fa8e.jpg"  height={50} width={50} alt="Twitter" /></a>
  <a href="https://www.linkedin.com"><img src="https://i.pinimg.com/564x/fc/26/50/fc26502254db62ce6b29debec1a56e80.jpg"  height={38} width={38} alt="LinkedIn" /></a>
</div>

<div class="footer-left">



  <h3>Greenly &copy; 2024</h3>
</div>

</footer>


    </>
  )
}


