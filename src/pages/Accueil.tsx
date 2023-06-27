import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../components/Header'
import '../styles/Accueil.css'
import Footer from '../components/Footer'
// import Back from '../components/Back'
import Grd1 from '../images/grillardes/1.jpg'
import Grd2 from '../images/grillardes/2.jpg'
import Grd3 from '../images/grillardes/3.jpg'
import Gteau1 from '../images/gateaux/1.jpg'
import Gteau2 from '../images/gateaux/2.jpg'
import Gteau3 from '../images/gateaux/3.jpg'
import Gteau4 from '../images/gateaux/4.jpg'
import kamou from '../images/commentaires/kamou.jpg'
import cyrille from '../images/commentaires/cyrille.jpg'
import geovanni from '../images/commentaires/geovanni.jpg'
import { BestMenu, BestChoice, CommentType } from '../data/Types'
import Panier from '../components/Panier'

const Accueil = () => {

   const [bestM, setBestM] = useState<number>(1)
   const [bestM2, setBestM2] = useState<number>(1)
   const [bestM3, setBestM3] = useState<number>(1)
   const [bestC, setBestC] = useState<number>(1)
   const [bestC2, setBestC2] = useState<number>(1)
   const [bestC3, setBestC3] = useState<number>(1)
   const [bestC4, setBestC4] = useState<number>(1)

   const BestMenuData: Array<BestMenu> = [
      {
         image: Grd1,
         name: 'Roti de boeuf',
         price: 8000,
         star1: 'fa-solid fa-star Star-color',
         star2: 'fa-solid fa-star Star-color',
         star3: 'fa-solid fa-star Star-color',
         star4: 'fa-solid fa-star',
         star5: 'fa-solid fa-star',
         bestM: bestM,
         setBestM: setBestM
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
         bestM: bestM2,
         setBestM: setBestM2
      },
      {
         image: Grd3,
         name: 'Grillade de porc',
         price: 6000,
         star1: 'fa-solid fa-star Star-color',
         star2: 'fa-solid fa-star Star-color',
         star3: 'fa-solid fa-star Star-color',
         star4: 'fa-solid fa-star Star-color',
         star5: 'fa-solid fa-star-half-stroke Star-color',
         bestM: bestM3,
         setBestM: setBestM3
      }
   ]

   const BestChoiceData: Array<BestChoice> = [
      {
         image: Gteau1,
         name: 'Gâteau chocolat + fraise',
         price: 8000,
         star1: 'fa-solid fa-star Star-color',
         star2: 'fa-solid fa-star Star-color',
         star3: 'fa-solid fa-star Star-color',
         star4: 'fa-solid fa-star Star-color',
         star5: 'fa-solid fa-star',
         bestC: bestC,
         setBestC: setBestC
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
         bestC: bestC2,
         setBestC: setBestC2
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
         bestC: bestC3,
         setBestC: setBestC3
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
         bestC: bestC4,
         setBestC: setBestC4
      }
   ]

   const CommentData: Array<CommentType> = [
      {
         image: kamou,
         comment: 'Geovanni est où ? Il rate tout',
         star1: 'fa-solid fa-star Star-color2',
         star2: 'fa-solid fa-star Star-color2',
         star3: 'fa-solid fa-star Star-color2',
         star4: 'fa-solid fa-star Star-color2',
         star5: 'fa-solid fa-star'
      },
      {
         image: cyrille,
         comment: "Ce resto, c'est un delice",
         star1: 'fa-solid fa-star Star-color2',
         star2: 'fa-solid fa-star Star-color2',
         star3: 'fa-solid fa-star Star-color2',
         star4: 'fa-solid fa-star Star-color2',
         star5: 'fa-solid fa-star Star-color2'
      },
      {
         image: geovanni,
         comment: "Moi, j'attends le cadeau",
         star1: 'fa-solid fa-star Star-color2',
         star2: 'fa-solid fa-star Star-color2',
         star3: 'fa-solid fa-star Star-color2',
         star4: 'fa-solid fa-star',
         star5: 'fa-solid fa-star'
      }
   ]

   return (
      <div className='Accueil'>
         <Header />
         <section className='Welcome'>
            <div className="Intro">
               <h1>Bienvenue sur <span className='Tlogo'>afrik Food</span>,</h1>
               <h2>Le Resto de chez toi !</h2>
               <p>
                  Au programme, découvrez notre tout nouveau [<span className='Tlogo'>Burger 400</span>] avec un goût plus intance
                  et irrésistible, le tout accompagné des frits de pomme, plantain mûuuuur. Regardez comment ça coule Miamm, j'en ai l'eau à la bouche
                  rien qu'en le fixant et vous, qu'entendez-vous ? 🤷‍♂️🤷‍♂️
               </p>
               <div className="Left">
                  <NavLink to={''}>
                     <button className='Btn'>Commander</button>
                  </NavLink>
                  <NavLink to={''}>
                     <button className='Btn2'>Choisir un autre</button>
                  </NavLink>
               </div>
               <div className="Social">
                  <a href='https://facebook.com'><i className='fa-brands fa-facebook'></i></a>
                  <a href='https://instagram.com'><i className='fa-brands fa-instagram'></i></a>
                  <a href='https://twitter.com'><i className='fa-brands fa-twitter'></i></a>
               </div>
            </div>
         </section>
         <section className='Best-menu'>
            <h2 className='Title'>Nos meilleurs plats 🍔🍕🌭</h2>
            <div className="Content">
               <div className="Caroussel">
                  {
                     BestMenuData.map((plat: BestMenu, index: number) => {
                        return (
                           <div className="Plat" key={index}>
                              <img src={plat.image} alt={plat.name} />
                              <div className="Details">
                                 <span className='Tlogo'>{plat.name}</span>
                                 <input type="number" value={plat.bestM} onChange={(e) => plat.setBestM(e.target.value)} />
                                 <small>Prix : {plat.price} FCFA</small>
                                 <small>
                                    <i className={plat.star1}></i>
                                    <i className={plat.star2}></i>
                                    <i className={plat.star3}></i>
                                    <i className={plat.star4}></i>
                                    <i className={plat.star5}></i>
                                 </small>
                                 <button className='Btn3'>Ajouter au panier</button>
                              </div>
                           </div>
                        )
                     })
                  }
               </div>
               <div className='Description'>
                  <h2 className='D-color'>Citation d'aujourd'hui</h2>
                  <p>
                     Comme le disait Sylvie Delaplace : "Notre corps n'a pas besoin de quantité de nourritures, mais de quantité de nutriments."
                     Le plus important n'est pas toujours de manger à sa faim mais en qualité. Faites-vous plaîsir !
                  </p>
                  <button className='Btn4'>Plus de meilleurs plats</button>
               </div>
            </div>
            <p className='D-color'>
               <button className='Btn4'>A propos de nous</button>
               Commandez les <span className='D-color2'>trois</span> au prix de : [<span className='D-color2'>14 500 FCFA</span>] au lieu de : <span className='Last-price'>19 000 FCFA</span>
            </p>
         </section>
         <section className='Best-choice'>
            <h2 className='Title'>Nos meilleurs offres</h2>
            <div className="Content">
               {
                  BestChoiceData.map((choice, index) => {
                     return (
                        <div className="Choice" key={index}>
                           <img src={choice.image} alt={choice.name} />
                           <div className="Details">
                              <span className='D-color'>{choice.name}</span>
                              <small>Prix : {choice.price} FCFA</small>
                              <p>
                                 <input type="number" value={choice.bestC} onChange={(e) => choice.setBestC(e.target.value)} maxLength={10} minLength={1} /> <small className='D-color'>unité(s)</small>
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
         <section className='Reseved'>
            <form className="Left">
               <h2 className='Title'>Chez nous <span>,</span> c'est chez vous</h2>
               <small>Reservez une table maintenant</small>
               <div className="Top">
                  <div className="Input-box">
                     <label htmlFor="reservedDate">Date reservation <small>:</small> </label>
                     <input type="date" id='reservedDate' />
                  </div>
                  <div className="Input-box">
                     <label htmlFor="reservedTime">A quelle l'heure <small>?</small> </label>
                     <input type="time" id='reservedTime' />
                  </div>
                  <div className="Input-box">
                     <label htmlFor="reservedPlace">Nombre de place <small>:</small> </label>
                     <input type="number" id='reservedPlace' />
                  </div>
                  <div className="Input-box">
                     <label htmlFor="reservedType">Type Reservation <small>:</small></label>
                     <select name="" id="reservedType">
                        <option value="">Ex: Moderne, ...</option>
                        <option value="">Suite</option>
                        <option value="">Moderne</option>
                        <option value="">Simple</option>
                     </select>
                  </div>
               </div>
               <div className="Bottom">
                  <div className="Input-box">
                     <label htmlFor="reservedPaiement">Type de paiement <small>:</small> </label>
                     <select name="" id="reservedPaiement">
                        <option value="">Ex: Espèce, Carte électronique</option>
                        <option value="">Carte électronique</option>
                        <option value="">Espèce</option>
                        <option value="">MoMo | Orange Money</option>
                     </select>
                  </div>
               </div>
               <button className='Btn'>Reserver</button>
            </form>
            <div className="Right">
               {/* <img src="../images/reservation/6.jpg" alt="reservation" /> */}
               {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.849709228406!2d9.765293774891457!3d4.05106174694691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610d81b994d2eb%3A0x280d4599c0eb9825!2sBilongue!5e0!3m2!1sfr!2sug!4v1687436949316!5m2!1sfr!2sug"></iframe> */}
               <h2><i className='fa-solid fa-location-dot'></i> afrik-food Douala, Cameroun</h2>
               <h3>Ouverture: 8h - 23h | 7j/7</h3>
               <h4>Appelez au : +237 655 371 420</h4>
            </div>
         </section >
         <section className='Comments'>
            <h2 className="Title">Ce que nos clients disent sur nous</h2>
            <div className="Content">
               <div className="All-comment">
                  {
                     CommentData.map((comment: CommentType, index: number) => {
                        return (
                           <div key={index} className="Comment">
                              <img src={comment.image} alt={comment.image} />
                              <div className="Details-comment">
                                 <h4>{comment.comment}</h4>
                                 <small>
                                    <i className={comment.star1}></i>
                                    <i className={comment.star2}></i>
                                    <i className={comment.star3}></i>
                                    <i className={comment.star4}></i>
                                    <i className={comment.star5}></i>
                                 </small>
                              </div>
                           </div>
                        )
                     })
                  }
               </div>
               <form className="Leave-comment">
                  <h2>Laissez-nous un commentaire !</h2>
                  <div className="Note">
                     <span>Note : </span>
                     <p>
                        <small>
                           <i className='fa-solid fa-star Star-color2'></i>
                           <i className='fa-solid fa-star'></i>
                           <i className='fa-solid fa-star'></i>
                           <i className='fa-solid fa-star'></i>
                           <i className='fa-solid fa-star'></i>
                        </small> <input type="number" value="1" />
                     </p>
                  </div>
                  <div className="Message">
                     <input type="text" />
                     <button><i className='fa-solid fa-paper-plane'></i></button>
                  </div>
               </form>
            </div>
         </section>
         <Panier/>
         <Footer />
      </div >
   )
}

export default Accueil