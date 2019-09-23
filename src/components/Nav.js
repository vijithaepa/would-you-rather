import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { withRouter } from "react-router-dom";
import Login from "./Login";

class Nav extends Component {

    submitLogout = (e) => {
        e.preventDefault()
        const {dispatch} = this.props
        dispatch(setAuthedUser(null))

        // Redirect to Question Page
        this.props.history.push('/login') // When rendered by react-router
    }

    render() {
        const {user} = this.props
        const isValidUser = user !== undefined && user.name !== null

        return (
            <nav className="navbar navbar-default">
                {isValidUser
                    ? getEnableNav(user, this.submitLogout)
                    : getDisableNav()
                }
            </nav>
        )
    }
}

function getEnableNav (user, submitLogout) {
    return <div className="container-fluid">
        <div className="navbar-header">
            <span className="navbar-brand">Would You Rather?</span>
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
            <li><a href="#"><span className="glyphicon glyphicon-user"></span> Hello, {user && user.name}
            </a></li>
            <li><NavLink to='/login' className='nav-link ml-4 mr-4'>
                <span className="glyphicon glyphicon-log-in"></span>
                <button onClick={(e) => submitLogout(e)} className='btn-logout'> Logout</button>
            </NavLink></li>
        </ul>
    </div>
}


function getDisableNav() {
    return <div className="container-fluid">
        <div className="navbar-header">
            <span className="navbar-brand">Would You Rather?</span>
        </div>
        <ul className="nav navbar-nav">
            <li className='nav-item'>
                <span className='nav-link ml-4 mr-4'>Home</span>
            </li>
            <li className='nav-item'>
                <span className='nav-link ml-4 mr-4'>New Question</span>
            </li>
            <li className='nav-item'>
                <span className='nav-link ml-4 mr-4'>Leader Board</span>
            </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
            <li><span className="glyphicon glyphicon-user"></span>
                <span className='nav-link ml-4 mr-4'> Hello, Please login</span>
            </li>
            <li><NavLink to='/login' className='nav-link ml-4 mr-4 active'>
                <span className="glyphicon glyphicon-log-in"></span> Login
            </NavLink></li>
        </ul>
    </div>
}

function mapStateToProps({users, authedUser}) {
    return {
        user: users[authedUser],
    }
}

export default withRouter(connect(mapStateToProps)(Nav))
