import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark mx-auto  mb-4'>
            <div className='collapse navbar-collapse'>
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item active'>
                        <NavLink to='/' exact activeClassName='active' className='nav-link ml-4 mr-4'>
                            Home
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/add' className='nav-link ml-4 mr-4'>
                            New Question
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/leaderboard' className='nav-link ml-4 mr-4'>
                            Leader Board
                        </NavLink>
                    </li>
                </ul>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <span className='nav-link ml-4 mr-4'>
                            Hello -- Name --
                        </span>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/login' className='nav-link ml-4 mr-4'>
                            Logout
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
