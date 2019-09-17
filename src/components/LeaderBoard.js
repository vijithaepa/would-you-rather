import React, { Component } from 'react'
import { connect } from "react-redux";
import Score from "./Score";

class ClassLeaderBoard extends Component {

    render() {
        return (
            <div className='container'>
                <ul className='leaderboard'>
                {this.props.userIds.map(userId => (
                    <li key={userId}><Score id={userId} /></li>
                ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({questions, users, authedUser}, {id}) {
    return {
        userIds: Object.keys(users)
            .sort((a, b) => {
                let aAnsweres = Object.keys(users[a].answers).length
                let aUqestion = users[a].questions.length
                let bAnsweres = Object.keys(users[b].answers).length
                let bUqestion = users[b].questions.length

                let aTotal = aAnsweres + aUqestion
                let bTotal = bAnsweres + bUqestion
                return bTotal - aTotal
            })
    }
}

export default connect(mapStateToProps)(ClassLeaderBoard)
