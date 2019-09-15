import React, { Component } from 'react'
import { connect } from "react-redux";

class Score extends Component {

    render() {
        const {user, answerCount, questionCount} = this.props
        return (
            <div className='media row'>
                <img
                    src={user.avatarURL}
                    alt={`Avatar of ${user.avatarURL}`}
                    className='avatar col-2'/>
                <div className='media-body col-8'>
                    <h3>{user.name}</h3>
                    <div>
                        <div className='row'>
                            <span className='score-text col-10'>Answered questions</span>
                            <span className='score col-2'>{answerCount}</span>
                        </div>
                        <div className='row'>
                            <span className='score-text col-10'>Asked questions</span>
                            <span
                                className='score col-2'>{questionCount} </span>
                        </div>
                    </div>
                </div>
                <div className='col-2'>
                    <ul className='score-list'>
                        <li className='score-heading'>Score</li>
                        <li className='score-value'>
                            <span className='value'>
                            {answerCount + questionCount}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps({questions, users, authedUser}, {id}) {
    return {
        user: users[id],
        answerCount: Object.keys(users[id].answers).length,
        questionCount: users[id].questions.length
    }
}

export default connect(mapStateToProps)(Score)
