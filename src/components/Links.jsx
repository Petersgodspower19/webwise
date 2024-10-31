import React from 'react'
import { NavLink } from 'react-router-dom'

function Links({to, children, color, onClick}) {
  return (
    <NavLink to={`/${to}`} onClick={onClick} className="no-underline text-[15px] font-semibold" style={{color: color}}>
      {children}
    </NavLink>
  )
}

export default Links
