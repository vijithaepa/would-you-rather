import React, { Component } from 'react'
import { connect } from "react-redux";

class Score extends Component {

    render() {
        const {user, answerCount, questionCount} = this.props;
        return (
            <div className='media row score'>
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
                            <div className='row'>
                                <p><span className='score-text col-sm-10'>Answered questions</span><span
                                    className='col-sm-2'>{answerCount}</span></p>
                                <p><span className='score-text col-sm-10'>Created questions</span><span
                                    className='col-sm-2'>{questionCount}</span></p>
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
