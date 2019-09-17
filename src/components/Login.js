import React, { Component } from 'react'
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

class Login extends Component {

    state = {
        userId: ''
    }

    handleChange = (e) => {
        const userId = e.target.value
        this.setState(() => ({
            userId
        }))

    }

    submitLogin = (e) => {
        e.preventDefault()
        const {dispatch} = this.props
        dispatch(setAuthedUser(this.state.userId))

        // Redirect to Question Page
        this.props.history.push('/') // When rendered by react-router
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="userList">Sign in</label>
                    <select className="form-control" id="userList" onChange={this.handleChange} defaultValue=''>
                        <option value=''>Select User</option>
                        {this.props.userIds.map(userId => <option
                            value={userId}>{this.props.users[userId].name}</option>)}
                    </select>
                </div>
                <button disabled={this.state.userId === ''} onClick={(e) => this.submitLogin(e)}>
                    Submit
                </button>
            </form>
        )
    }
}

function mapStateToProps({users}) {
    return {
        userIds: Object.keys(users),
        users
    }
}

export default connect(mapStateToProps)(Login)
