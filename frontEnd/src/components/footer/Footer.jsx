import './Footer.css'
import React from 'react'
import iconTwitter from '../../assets/icon-twitter.svg';
import iconFacebook from '../../assets/icon-facebook-circle.svg';
import iconLinkedin from '../../assets/icon-linkedin-square.svg';
import iconInstagram from '../../assets/icon-instagram.svg';

function Footer() {
  return (
    <footer>
      <div>
        <div className='footer-container'>
          <section className='footer-section'>
            <div className='footer-div'>
              <h4>HORARIOS</h4>
              <p><b>Lunes a Viernes:</b> 12hs a 20hs</p>
              <p><b>Sabados:</b> 10hs a 14hs</p>
              <p><b>Domingo:</b> CERRADO</p>
            </div>
          </section>
          <section className='footer-section'>
            <div className='footer-div'>
              <h4>CONTACTO</h4>
              <p>Avenida Avellaneda 4000 , CABA</p>
              <p>11 2179-2781</p>
            </div>
          </section>
          <section className='footer-section'>
            <div className='footer-div'>
              <h4>REDES</h4>
              <ul className='social-sites'>
                <li><a href=""><img src={iconTwitter} alt="" /></a></li>
                <li><a href=""><img src={iconInstagram} alt="" /></a></li>
                <li><a href=""><img src={iconLinkedin} alt="" /></a></li>
                <li><a href=""><img src={iconFacebook} alt="" /></a></li>
              </ul>
            </div>
          </section>
        </div>
        <div className='footer_other_info'>
          <ul>
            <li><a href="">Términos y condiciones</a></li>
            <li><a href="">Cómo cuidamos tu privacidad</a></li>
            <li><a href="">Información al Usuario financiero</a></li>
            <li><a href="">Defensa del Consumidor</a></li>
            <li><a href="">Información sobre Seguros</a></li>
          </ul>
          <div className='footer_bottom'>
            <p><b>Copyright ©</b> TechStore 2023</p>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer