import React, { Component } from 'react'
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { withRouter } from "react-router-dom";

class Login extends Component {

    state = {
        userId: ''
    };

    handleChange = (e) => {
        const userId = e.target.value;
        this.setState(() => ({
            userId
        }))

    };

    submitLogin = (e) => {
        e.preventDefault();
        const {dispatch} = this.props;
        dispatch(setAuthedUser(this.state.userId));

        let from = this.props.location.pathname === '/login' ? '/' : this.props.location.pathname || '/'
        console.log('Path ', from)
        this.props.history.push(from)
    };

    render() {
        return (
            <div className="panel panel-default container">
                <div className="panel-heading text-center">
                    <h3>Welcome to the Would You Rather App!</h3>
                    <p>Please sign in to continue</p>
                </div>
                <div className="panel-body">
                    <div className="text-center logo">
                        <img
                            src='/assets/react-logo.png'
                            alt='logo'
                            className='avatar'/>
                    </div>
                    <form>
                        <div className="form-group text-center">
                            <label htmlFor="userList" className='lbl-signin'>Sign in</label>
                            <select className="form-control" id="userList" onChange={this.handleChange} defaultValue=''>
                                <option value=''>Select User</option>
                                {this.props.userIds.map(userId =>
                                    <option key={userId} value={userId}>{this.props.users[userId].name}</option>)}
                            </select>
                        </div>
                        <button disabled={this.state.userId === ''} className='btn-login'
                                onClick={(e) => this.submitLogin(e)}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>

        )
    }
}

function mapStateToProps({users}) {
    return {
        userIds: Object.keys(users),
        users
    }
}

export default withRouter(connect(mapStateToProps)(Login))
