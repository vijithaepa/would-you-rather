import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Nav () {
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <a href='/' exact activeClassName='active' >
                        Home
                    </a>
                </li>
                <li>
                    <a href='/new' activeClassName='active'>
                        New Tweet
                    </a>
                </li>
            </ul>
        <hr/>
        </nav>
    )
}
