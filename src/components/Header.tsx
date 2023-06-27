import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'

const Header = () => {
   const [show, setShow] = useState<string>("")
   return (
      <div className='Header'>
         <Logo />
         <i className="fa-solid fa-bars" id="icon-menu" onClick={() => show?setShow(""):setShow("show")}></i>
         <nav className={show?"show":""}>
            {/* <ul> */}
               <NavLink to={'/'} className={(Link) => (Link.isActive ? "Link-active" : "")}><li>Accueil</li></NavLink>
               <NavLink to={'/menu'} className={(Link) => (Link.isActive ? "Link-active" : "")}><li>Menu</li></NavLink>
               <NavLink to={'/about'} className={(Link) => (Link.isActive ? "Link-active" : "")}><li>A Propos</li></NavLink>
               <NavLink to={'/inscription'} className={(Link) => (Link.isActive ? "Link-active2" : "")}><li><i className='fa-solid fa-users-viewfinder'></i></li></NavLink>
               <li><i className='fa-solid fa-cart-arrow-down'></i> Panier</li>
               {/* <li>Phone <small>+</small>237 655 371 420</li> */}
            {/* </ul> */}
         </nav>
      </div>
   )
}

export default Header