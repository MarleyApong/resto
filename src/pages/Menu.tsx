import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../components/Header'
import '../styles/Menu.css'
import bgMenu from '../images/banner/bg2.png'
import { MenuType, MenuType2, MenuType3 } from '../data/Types'
import roti1 from '../images/burger/1.jpg'
import roti2 from '../images/burger/2.jpg'
import roti3 from '../images/burger/3.jpg'
import roti4 from '../images/burger/4.jpg'
import equilibre1 from '../images/equilibre/1.jpg'
import equilibre2 from '../images/equilibre/2.jpg'
import equilibre3 from '../images/equilibre/3.jpg'
import equilibre4 from '../images/equilibre/4.jpg'
import Grd1 from '../images/grillardes/1.jpg'
import Grd2 from '../images/grillardes/2.jpg'
import Grd3 from '../images/grillardes/3.jpg'
import Grd4 from '../images/grillardes/4.jpg'
import Gteau1 from '../images/gateaux/1.jpg'
import Gteau2 from '../images/gateaux/2.jpg'
import Gteau3 from '../images/gateaux/3.jpg'
import Gteau4 from '../images/gateaux/4.jpg'
import Gteau5 from '../images/gateaux/5.jpg'
import Gteau6 from '../images/gateaux/6.jpg'
import Gteau7 from '../images/gateaux/7.jpg'
import Gteau8 from '../images/gateaux/8.jpg'
import Footer from '../components/Footer'
import Back from '../components/Back'

const Menu = () => {

   const [typek1, setTypek1] = useState<number>(1)
   const [typek2, setTypek2] = useState<number>(1)
   const [typek3, setTypek3] = useState<number>(1)
   const [typek4, setTypek4] = useState<number>(1)
   const [typek5, setTypek5] = useState<number>(1)
   const [typek6, setTypek6] = useState<number>(1)
   const [typek7, setTypek7] = useState<number>(1)
   const [typek8, setTypek8] = useState<number>(1)

   const [typeq1, setTypeq1] = useState<number>(1)
   const [typeq2, setTypeq2] = useState<number>(1)
   const [typeq3, setTypeq3] = useState<number>(1)
   const [typeq4, setTypeq4] = useState<number>(1)

   const [typer1, setTyper1] = useState<number>(1)
   const [typer2, setTyper2] = useState<number>(1)
   const [typer3, setTyper3] = useState<number>(1)
   const [typer4, setTyper4] = useState<number>(1)

   const Menu1Data: Array<MenuType> = [
      {
         image: Gteau1,
         name: 'Gâteau chocolat + fraise',
         price: 8000,
         star1: 'fa-solid fa-star Star-color',
         star2: 'fa-solid fa-star Star-color',
         star3: 'fa-solid fa-star Star-color',
         star4: 'fa-solid fa-star Star-color',
         star5: 'fa-solid fa-star',
         typek: typek1,
         setTypek: setTypek1
      },
      {
         image: Gteau2,
         name: 'Gâteau à la fraise',
         price: 7000,
         star1: 'fa-solid fa-star Star-color',
         star2: 'fa-solid fa-star Star-color',
         star3: 'fa-solid fa-star Star-color',
         star4: 'fa-solid fa-star Star-color',
         star5: 'fa-solid fa-star',
         typek: typek2,
         setTypek: setTypek2
      },
      {
         image: Gteau3,
         name: 'Gâteau au chocolat simple',
         price: 1500,
         star1: 'fa-solid fa-star Star-color',
         star2: 'fa-solid fa-star Star-color',
         star3: 'fa-solid fa-star Star-color',
         star4: 'fa-solid fa-star Star-color',
         star5: 'fa-solid fa-star',
         typek: typek3,
         setTypek: setTypek3
      },
      {
         image: Gteau4,
         name: 'Gâteau au chocolat concencré',
         price: 2000,
         star1: 'fa-solid fa-star Star-color',
         star2: 'fa-solid fa-star Star-color',
         star3: 'fa-solid fa-star Star-color',
         star4: 'fa-solid fa-star Star-color',
         star5: 'fa-solid fa-star',
         typek: typek4,
         setTypek: setTypek4
      },
      {
         image: Gteau5,
         name: 'Gâteau au multi-dimension',
         price: 4500,
         star1: 'fa-solid fa-star Star-color',
         star2: 'fa-solid fa-star Star-color',
         star3: 'fa-solid fa-star Star-color',
         star4: 'fa-solid fa-star Star-color',
         star5: 'fa-solid fa-star',
         typek: typek5,
         setTypek: setTypek5
      },
      {
         image: Gteau6,
         name: 'Gâteau chocolat concentré +',
         price: 3000,
         star1: 'fa-solid fa-star Star-color',
         star2: 'fa-solid fa-star Star-color',
         star3: 'fa-solid fa-star Star-color',
         star4: 'fa-solid fa-star Star-color',
         star5: 'fa-solid fa-star',
         typek: typek6,
         setTypek: setTypek6
      },
      {
         image: Gteau7,
         name: 'Gâteau crême',
         price: 2000,
         star1: 'fa-solid fa-star Star-color',
         star2: 'fa-solid fa-star Star-color',
         star3: 'fa-solid fa-star Star-color',
         star4: 'fa-solid fa-star Star-color',
         star5: 'fa-solid fa-star',
         typek: typek7,
         setTypek: setTypek7
      },
      {
         image: Gteau8,
         name: 'Gâteau chocolat pizza',
         price: 2200,
         star1: 'fa-solid fa-star Star-color',
         star2: 'fa-solid fa-star Star-color',
         star3: 'fa-solid fa-star Star-color',
         star4: 'fa-solid fa-star',
         star5: 'fa-solid fa-star',
         typek: typek8,
         setTypek: setTypek8
      }
   ]

   const Menu2Data: Array<MenuType2> = [
      {
         image: equilibre1,
         name: 'Saute de riz + poulet',
         price: 2600,
         star1: 'fa-solid fa-star Star-color2',
         star2: 'fa-solid fa-star Star-color2',
         star3: 'fa-solid fa-star Star-color2',
         star4: 'fa-solid fa-star Star-color2',
         star5: 'fa-solid fa-star',
         typeq: typeq1,
         setTypeq: setTypeq1
      },
      {
         image: equilibre2,
         name: 'Frit de plantain + porc roti',
         price: 7000,
         star1: 'fa-solid fa-star Star-color2',
         star2: 'fa-solid fa-star Star-color2',
         star3: 'fa-solid fa-star Star-color2',
         star4: 'fa-solid fa-star Star-color2',
         star5: 'fa-solid fa-star',
         typeq: typeq2,
         setTypeq: setTypeq2
      },
      {
         image: equilibre3,
         name: 'Soupe de carrotte',
         price: 500,
         star1: 'fa-solid fa-star Star-color2',
         star2: 'fa-solid fa-star Star-color2',
         star3: 'fa-solid fa-star Star-color2',
         star4: 'fa-solid fa-star',
         star5: 'fa-solid fa-star',
         typeq: typeq3,
         setTypeq: setTypeq3
      },
      {
         image: equilibre4,
         name: 'Sauce aux omolettes',
         price: 800,
         star1: 'fa-solid fa-star Star-color2',
         star2: 'fa-solid fa-star Star-color2',
         star3: 'fa-solid fa-star Star-color2',
         star4: 'fa-solid fa-star ',
         star5: 'fa-solid fa-star',
         typeq: typeq4,
         setTypeq: setTypeq4
      }
   ]

   const Menu3Data: Array<MenuType3> = [
      {
         image: roti1,
         name: 'Double cheese brurger',
         price: 1000,
         star1: 'fa-solid fa-star Star-color',
         star2: 'fa-solid fa-star Star-color',
         star3: 'fa-solid fa-star Star-color',
         star4: 'fa-solid fa-star Star-color',
         star5: 'fa-solid fa-star',
         typer: typer1,
         setTyper: setTyper1
      },
      {
         image: roti2,
         name: 'Double cheese brurger+ aux frits ',
         price: 2500,
         star1: 'fa-solid fa-star Star-color',
         star2: 'fa-solid fa-star Star-color',
         star3: 'fa-solid fa-star Star-color',
         star4: 'fa-solid fa-star Star-color',
         star5: 'fa-solid fa-star',
         typer: typer2,
         setTyper: setTyper2
      },
      {
         image: roti3,
         name: 'cheese brurger + frits',
         price: 1500,
         star1: 'fa-solid fa-star Star-color',
         star2: 'fa-solid fa-star Star-color',
         star3: 'fa-solid fa-star Star-color',
         star4: 'fa-solid fa-star Star-color',
         star5: 'fa-solid fa-star',
         typer: typer3,
         setTyper: setTyper3
      },
      {
         image: roti4,
         name: 'Hamberger simple',
         price: 1000,
         star1: 'fa-solid fa-star Star-color',
         star2: 'fa-solid fa-star Star-color',
         star3: 'fa-solid fa-star Star-color',
         star4: 'fa-solid fa-star Star-color',
         star5: 'fa-solid fa-star',
         typer: typer4,
         setTyper: setTyper4
      },
      {
         image: Grd1,
         name: 'Roti de boeuf',
         price: 8000,
         star1: 'fa-solid fa-star Star-color',
         star2: 'fa-solid fa-star Star-color',
         star3: 'fa-solid fa-star Star-color',
         star4: 'fa-solid fa-star',
         star5: 'fa-solid fa-star',
         typer: typer4,
         setTyper: setTyper4
      },
      {
         image: Grd2,
         name: 'Famille du bonheur',
         price: 8000,
         star1: 'fa-solid fa-star Star-color',
         star2: 'fa-solid fa-star Star-color',
         star3: 'fa-solid fa-star Star-color',
         star4: 'fa-solid fa-star Star-color',
         star5: 'fa-solid fa-star',
         typer: typer4,
         setTyper: setTyper4
      },
      {
         image: Grd3,
         name: 'Grillade de porc',
         price: 6000,
         star1: 'fa-solid fa-star Star-color',
         star2: 'fa-solid fa-star Star-color',
         star3: 'fa-solid fa-star Star-color',
         star4: 'fa-solid fa-star Star-color',
         star5: 'fa-solid fa-star',
         typer: typer4,
         setTyper: setTyper4
      },
      {
         image: Grd4,
         name: 'Frit au boeuf',
         price: 2650,
         star1: 'fa-solid fa-star Star-color',
         star2: 'fa-solid fa-star Star-color',
         star3: 'fa-solid fa-star Star-color',
         star4: 'fa-solid fa-star Star-color',
         star5: 'fa-solid fa-star',
         typer: typer4,
         setTyper: setTyper4
      },
   ]

   return (
      <div className='Menu'>
         <Header />
         <section className='Banner-menu'>
            <div className="Intro">
               <h1>Au Menu sur <span className='Tlogo'>afrik Food</span>,</h1>
               <h2>Le Resto de chez toi !</h2>
               <p>
                  Comme menu, nous avons aujourd'hui, toute une large variété de Gâteau : chocolat,
                  crême, mariage; De plus nous avons des Fruits pour prendre du plaîsir et enfin, nous
                  laissons découvrir ...
               </p>
               <div className="Left">
                  <NavLink to={'/about'}>
                     <button className='Btn'>Qui nous sommes ?</button>
                  </NavLink>
                  {/* <NavLink to={'/menu#gateau'}>
                     <button className='Btn2'>Voir le menu</button>
                  </NavLink> */}
               </div>
               <div className="Social">
                  <a href='https://facebook.com'><i className='fa-brands fa-facebook'></i></a>
                  <a href='https://instagram.com'><i className='fa-brands fa-instagram'></i></a>
                  <a href='https://twitter.com'><i className='fa-brands fa-twitter'></i></a>
               </div>
            </div>

            <img src={bgMenu} alt="Banner menu" />
         </section>
         <section className='Menu-gateau' id='gateau'>
            <h2 className='Title'>La d<small>é</small>couverte<small>:</small> G<small>â</small>teau</h2>
            <div className="Content">
               {
                  Menu1Data.map((choice, index) => {
                     return (
                        <div className="Choice" key={index}>
                           <img src={choice.image} alt={choice.name} />
                           <div className="Details">
                              <span className='D-color3'>{choice.name}</span>
                              <small>Prix : {choice.price} FCFA</small>
                              <p>
                                 <input type="number" value={choice.typek} onChange={(e) => choice.setTypek(e.target.value)} maxLength={10} minLength={1} /> <small className='D-color'>unité(s)</small>
                              </p>
                              <small>
                                 <i className={choice.star1}></i>
                                 <i className={choice.star2}></i>
                                 <i className={choice.star3}></i>
                                 <i className={choice.star4}></i>
                                 <i className={choice.star5}></i>
                              </small>
                              <button className='Btn4'>Ajouter au panier</button>
                           </div>
                        </div>
                     )
                  })
               }
            </div>
         </section>
         <section className='Menu-roti'>
            <h2 className='Title'>La d<small>é</small>couverte<small>:</small><small>é</small>quilibr<small>é</small></h2>
            <div className="Content">
               {
                  Menu2Data.map((choice, index) => {
                     return (
                        <div className="Choice" key={index}>
                           <img src={choice.image} alt={choice.name} />
                           <div className="Details">
                              <span className='D-color'>{choice.name}</span>
                              <small>Prix : {choice.price} FCFA</small>
                              <p>
                                 <input type="number" value={choice.typeq} onChange={(e) => choice.setTypeq(e.target.value)} maxLength={10} minLength={1} /> <small className='D-color'>unité(s)</small>
                              </p>
                              <small>
                                 <i className={choice.star1}></i>
                                 <i className={choice.star2}></i>
                                 <i className={choice.star3}></i>
                                 <i className={choice.star4}></i>
                                 <i className={choice.star5}></i>
                              </small>
                              <button className='Btn4'>Ajouter au panier</button>
                           </div>
                        </div>
                     )
                  })
               }
            </div>
         </section>
         <section className='Menu-fast'>
         <h2 className='Title'>La d<small>é</small>couverte<small>:</small> fast foods</h2>
            <div className="Content">
               {
                  Menu3Data.map((choice, index) => {
                     return (
                        <div className="Choice" key={index}>
                           <img src={choice.image} alt={choice.name} />
                           <div className="Details">
                              <span className='D-color2'>{choice.name}</span>
                              <small>Prix : {choice.price} FCFA</small>
                              <p>
                                 <input type="number" value={choice.typer} onChange={(e) => choice.setTyper(e.target.value)} maxLength={10} minLength={1} /> <small className='D-color'>unité(s)</small>
                              </p>
                              <small>
                                 <i className={choice.star1}></i>
                                 <i className={choice.star2}></i>
                                 <i className={choice.star3}></i>
                                 <i className={choice.star4}></i>
                                 <i className={choice.star5}></i>
                              </small>
                              <button className='Btn4'>Ajouter au panier</button>
                           </div>
                        </div>
                     )
                  })
               }
            </div>
         </section>
         <Back/>
         <Footer/>
      </div>
   )
}

export default Menu