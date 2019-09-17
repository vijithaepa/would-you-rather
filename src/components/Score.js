import React, { Component } from 'react'
import { connect } from "react-redux";

class Score extends Component {

    render() {
        const {user, answerCount, questionCount} = this.props
        return (
            <div className='media row ribbon winner'>
                <div className="well col-sm-12 well-bg-white">
                    <div className="row">
                        <div className="col-sm-3">
                            <img
                                src={user.avatarURL}
                                alt={`Avatar of ${user.avatarURL}`}
                                className='img-circle avatar '/>
                        </div>
                        <div className="col-sm-6 side-line">

                            <h3>{user.name}</h3>
                            <div>
                                <p className='score-text col-10'>Answered questions<span>5</span></p>
                                <p className='score-text col-10'>Asked questions</p>
                            </div>

                        </div>
                        <div className="col-sm-3">
                            <div className="panel panel-default">
                                <div className="panel-heading text-center">Score</div>
                                <div className="panel-body">
                                    <span className='score_bubble'>{answerCount + questionCount}</span>
                                </div>
                            </div>
                        </div>

                    </div>

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
