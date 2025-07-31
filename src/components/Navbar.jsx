import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='bg-black'>
      <div className="container">
        <ul className='navigation flex justify-between pt-[24px] pb-[24px] text-white text-[20px] font-medium'>
          <div className='flex gap-[64px]'>
            <li>
              <NavLink to="">Home</NavLink>
            </li>
            <li>
              <NavLink to="/quizzes">Quizzes</NavLink>
            </li>
          </div>
          <li>
            <a href="">Login/Sign Up</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar