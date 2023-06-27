import React from 'react'

const Inscrp = () => {
   return (
      <>
         <input type="text" placeholder='Nom' />
         <input type="text" placeholder='Prenom' />
         <input type="email" placeholder='Email' />
         <input type="password" placeholder='Mot de passe' />
         <input type="password" placeholder='Confirmer mot de passe' />
         <input type="submit" value='Rejoindre' />
      </>
   )
}

export default Inscrp