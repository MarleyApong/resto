import React from 'react'
// import '../styles/App.css'

const Panier = () => { 
   return (
      <div className='Panier'>
         <div className="Control">
            <small>Totaux: 10000 fcfa</small>
            <i className='fa-solid fa-close'></i>
         </div>
         <div className="Content">
            <table>
            <thead>
               <tr>
                  <td>Libellé</td>
                  <td>Qté</td>
                  <td>Prix U.</td>
                  <td>Prix T.</td>
                  <td>Option</td>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>Roti de poulet</td>
                  <td>2</td>
                  <td>2000</td>
                  <td>4000</td>
                  <td><i className='fa-solid fa-trash'></i></td>
               </tr>
               <tr>
                  <td>Roti de poulet</td>
                  <td>2</td>
                  <td>2000</td>
                  <td>4000</td>
                  <td><i className='fa-solid fa-trash'></i></td>
               </tr>
               <tr>
                  <td>Roti de poulet</td>
                  <td>2</td>
                  <td>2000</td>
                  <td>4000</td>
                  <td><i className='fa-solid fa-trash'></i></td>
               </tr>
               <tr>
                  <td>Roti de poulet</td>
                  <td>2</td>
                  <td>2000</td>
                  <td>4000</td>
                  <td><i className='fa-solid fa-trash'></i></td>
               </tr>
               <tr>
                  <td>Roti de poulet</td>
                  <td>2</td>
                  <td>2000</td>
                  <td>4000</td>
                  <td><i className='fa-solid fa-trash'></i></td>
               </tr>
               <tr>
                  <td>Roti de poulet</td>
                  <td>2</td>
                  <td>2000</td>
                  <td>4000</td>
                  <td><i className='fa-solid fa-trash'></i></td>
               </tr>
               <tr>
                  <td>Roti de poulet</td>
                  <td>2</td>
                  <td>2000</td>
                  <td>4000</td>
                  <td><i className='fa-solid fa-trash'></i></td>
               </tr>
               <tr>
                  <td>Roti de poulet</td>
                  <td>2</td>
                  <td>2000</td>
                  <td>4000</td>
                  <td><i className='fa-solid fa-trash'></i></td>
               </tr>
            </tbody>
            </table>
         </div>
      </div>
   )
}

export default Panier