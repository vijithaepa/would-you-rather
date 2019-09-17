import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from "react-redux";

class Nav extends Component{

    render() {
        const {user} = this.props
        return (

            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <NavLink to='/' className="navbar-brand" href="#">Would You Rather?</NavLink>
                    </div>
                    <ul className="nav navbar-nav">
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

                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#"><span className="glyphicon glyphicon-user"></span> Hello, { user && user.name }</a></li>
                        <li><NavLink to='/login' className='nav-link ml-4 mr-4'><span className="glyphicon glyphicon-log-in"></span> Login</NavLink></li>
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
