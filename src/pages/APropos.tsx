import React from 'react'
import Header from '../components/Header'
import { NavLink } from 'react-router-dom'
import '../styles/APropos.css'
import About from '../images/about/about.jpg'
import About2 from '../images/about/about2.jpg'
import About3 from '../images/about/about3.jpg'
import Footer from '../components/Footer'
import Panier from '../components/Panier'

const APropos = () => {
   return (
      <div className='About'>
         <Header />
         <section className='Informations'>
            <div className="Info">
               <h1 className='Title'>Qui sommes nous <small>? </small></h1>
               <p>
                  Afrik Food, est un restorant offrant des services de preparations, de cuissons et / des livraisons
                  quelques soit le lieu dans la ville de douala pour le moment aux consommateurs. Nous proposons à
                  nos clients une large variété de nourritures notamment:
               </p>
               <ul>
                  <li>fast foods</li>
                  <li>Variété de Gâteaux</li>
                  <li>Rôti de porcs, poulets, boeufs</li>
                  <li>fruits</li>
               </ul>
               <NavLink to={'/menu'}>
                  <button className='Btn2'>Voir le menu</button>
               </NavLink>
            </div>
            <div className="Right">
               <img src={About} alt="About1 " />
               <img src={About2} alt="About2 " />
               <img src={About3} alt="About3 " />
            </div>
         </section>
         <Panier/>
         <Footer />
      </div>
   )
}

export default APropos