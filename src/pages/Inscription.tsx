import React, {useState} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/Inscription.css'
import Inscrp from '../components/Inscrp'
import Cnnx from '../components/Cnnx'
import Panier from '../components/Panier'
// import { NavLink } from 'react-router-dom'
// import Inscrp from '../components/Inscrp'
// import Cnnx from '../components/Cnnx'

const Inscription = () => {
   const [state, setState] = useState<boolean>(true)

   return (
      <div className='Inscription'>
         <Header />
         <section className='Form'>
            <form action="">
               <div className="Left">
                  <i className='fa-solid fa-users-viewfinder'></i>
               </div>
               <div className="Right">
                  <div className='R-title'>
                     <h2>Nous rejoindre</h2>
                     <button type='button' onClick={() => state?setState(false):setState(true)}>Se connecter ?</button>
                  </div>
                  {
                     state?(
                        <Inscrp/>
                     ):(
                        <Cnnx/>
                     )
                  }
               </div>
            </form>
         </section>
         <Panier/>
         <Footer />
      </div>
   )
}

export default Inscription