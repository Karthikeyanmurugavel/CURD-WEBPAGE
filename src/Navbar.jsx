import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import LOGO from "./Free_Sample_By_Wix.jpg"

const Navbar = () => {
  return (
    <>
    <nav className='navContainer'>
        <aside className='logoblock'>
            <img src={LOGO} alt='' height="50px" width="80px"/>
        </aside>
        <aside className='listblock'>
            <ul>
                <NavLink to="/">
                <li className='list'>
                    <span>HOME</span>
                    <span><FaHome /></span>
                </li>
                </NavLink>
                <NavLink to="/viewall">
                    <li className='list'>
                        <span>VIEW ALL</span>
                        <span><FaPeopleGroup /></span>
                    </li>
                </NavLink>
            </ul>
        </aside>
    </nav>
    </>
  )
}

export default Navbar