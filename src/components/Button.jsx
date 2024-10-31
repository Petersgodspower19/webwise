import React from 'react'
import { NavLink } from 'react-router-dom'

function Button({ to, children }) {
  return (
    <NavLink data-aos="fade-up"
          data-aos-delay="1000"
      to={`/${to}`}
      className="bg-primary text-black border-0 rounded-[5px] p-[5px] w-[120px] flex items-center justify-center"
    >
      {children}
    </NavLink>
  )
}

export default Button
