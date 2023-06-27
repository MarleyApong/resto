import React from 'react'
import { NavLink } from 'react-router-dom'

const Logo = () => {
   return (
      <div className="Logo">
         <NavLink to={'/'}>
            <h3>afrik <span className='Tlogo'>Food</span></h3>
         </NavLink>
      </div>
   )
}

export default Logo