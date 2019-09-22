import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from "react-redux";

class Nav extends Component {

    render() {
        const {user} = this.props
        const isValidUser = user !== undefined && user.name !== null

        return (

            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <span className="navbar-brand">Would You Rather?</span>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className={isValidUser ? 'nav-item' : 'nav-item disabled'}>
                            <NavLink to='/' exact className='nav-link ml-4 mr-4'>
                                Home
                            </NavLink>
                        </li>
                        <li className={isValidUser ? 'nav-item' : 'nav-item disabled'}>
                            <NavLink to='/add' className='nav-link ml-4 mr-4'>
                                New Question
                            </NavLink>
                        </li>
                        <li className={isValidUser ? 'nav-item' : 'nav-item disabled'}>
                            <NavLink to='/leaderboard' className='nav-link ml-4 mr-4'>
                                Leader Board
                            </NavLink>
                        </li>
                    </ul>

                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#"><span className="glyphicon glyphicon-user"></span> Hello, {isValidUser ? user && user.name: 'Please login'}
                        </a></li>
                        <li><NavLink to='/login' className='nav-link ml-4 mr-4'>
                            <span className="glyphicon glyphicon-log-in"></span>
                            {isValidUser ? ' Logout' : ' Login'}
                        </NavLink></li>
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
