import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from "react-redux";

class Nav extends Component{

    render() {
        const {user} = this.props
        return (
            <nav className='navbar navbar-expand-lg navbar-light bg-light mx-auto  mb-4'>
                <div className='collapse navbar-collapse'>
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item'>
                            <NavLink to='/' exact className='nav-link ml-4 mr-4'>
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
                            Hello, { user && user.name }
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
}

function mapStateToProps({users, authedUser}) {
    return {
        user: users[authedUser],
    }
}

export default connect(mapStateToProps)(Nav)
