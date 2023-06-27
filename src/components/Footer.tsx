import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'

const Footer = () => {
   return (
      <footer>
         <div className='Content'>
            <div className='fr'>
               <div>
               <Logo />
               </div>
               <h3 className='dev'>Le Resto de chez toi !</h3>
            </div>
            <div className='Nav'>
               <div className="Pages">
                  <h3>Pages</h3>
                  <ul>
                     <NavLink to={'/'} className={(Link) => (Link.isActive ? "Link-active" : "")}><li>Accueil</li></NavLink>
                     <NavLink to={'/menu'} className={(Link) => (Link.isActive ? "Link-active" : "")}><li>Menu</li></NavLink>
                     <NavLink to={'/equipe'} className={(Link) => (Link.isActive ? "Link-active" : "")}><li>Equipe</li></NavLink>
                     <NavLink to={'/about'} className={(Link) => (Link.isActive ? "Link-active" : "")}><li>A Propos</li></NavLink>
                     <NavLink to={'/about'} className={(Link) => (Link.isActive ? "Link-active" : "")}><li><i></i></li></NavLink>
                  </ul>
               </div>
               <div className="Adresse">
                  <h3>Adresse</h3>
                  <ul>
                     <li><i className='fa-solid fa-location-dot'></i> afrikfood <small>,</small>Douala<span>-</span>Cameroun</li>
                     <li><iframe title='un' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.849709228406!2d9.765293774891457!3d4.05106174694691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610d81b994d2eb%3A0x280d4599c0eb9825!2sBilongue!5e0!3m2!1sfr!2sug!4v1687436949316!5m2!1sfr!2sug"></iframe></li>
                  </ul>
               </div>
               <div className="Contact">
                  <h3>Contact</h3>
                  <ul>
                     <li><i className='fa-solid fa-phone'></i> Phone: <small>+</small>237 655 371 420</li>
                     <li><i className='fa-solid fa-message'></i> Email: marlexapong90@gmail.com</li>
                     <li><a href="https://facebook.com/marleyapong"><i className='fa-brands fa-facebook'></i> Facebook</a></li>
                     <li><a href="https://instagram.com"><i className='fa-brands fa-instagram'></i> Instagram</a></li>
                     <li><a href="https://twitter"><i className='fa-brands fa-twitter'></i> Twitter</a></li>
                  </ul>
               </div>
            </div>
         </div>
         <p className='Copyright'>afrik Food &copy; Copyright 2023 | Développé par : <span className='Star-color'>Dev_AM</span></p>
      </footer>
   )
}

export default Footer