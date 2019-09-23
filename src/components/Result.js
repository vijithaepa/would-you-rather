import React, { Component } from 'react'
import { formatQuestion } from "../utils/helpers";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Result extends Component {

    render() {
        const {yourVote, question, author} = this.props;
        const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length;
        const opOneVotes = question.optionOne.votes.length;
        const opTwoVotes = question.optionTwo.votes.length;
        const opOnePercent = Math.round((opOneVotes / totalVotes) * 100 * 100) / 100;
        const opTwoPercent = Math.round((opTwoVotes / totalVotes) * 100 * 100) / 100;

        return (
            <div className="panel panel-default">
                <div className="panel-heading">Asked by {author.name}:</div>
                <div className="panel-body">
                    <div className='media row'>
                        <div className="row">
                            <div className="col-sm-3">
                                <img
                                    src={author.avatarURL}
                                    alt={`Avatar of ${author.avatarURL}`}
                                    className='img-circle avatar'/>
                            </div>
                            <div className="col-sm-9 left-side-line question-body">
                                <h3> Results:</h3>
                                <div className={'result' + (yourVote === 'optionOne' ? ' voted' : '')}>
                                    <span className='rather-text'>Would you rather {question.optionOne.text}</span>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow='0'
                                             aria-valuemin="0"
                                             aria-valuemax="100" style={{"width": `${opOnePercent}%`}}>{opOnePercent}%
                                        </div>
                                    </div>
                                    <span>{opOneVotes} out of {totalVotes} votes</span>
                                </div>
                                <div className={'result' + (yourVote === 'optionTwo' ? ' voted' : '')}>
                                    <span className='rather-text'>Would you rather {question.optionTwo.text}</span>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="0"
                                             aria-valuemin="0"
                                             aria-valuemax="100" style={{"width": `${opTwoPercent}%`}}>{opTwoPercent}%
                                        </div>
                                    </div>
                                    <span>{opTwoVotes} out of {totalVotes} votes</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

function mapStateToProps({questions, users, authedUser}, props) {
    const {id} = props.match.params;
    const question = questions[id];
    const answerId = Object.keys(users[authedUser].answers).filter((a) => (a === id));

    return {
        yourVote: users[authedUser].answers[answerId[0]],
        authedUser,
        question: question
            ? formatQuestion(question, users[question.author], authedUser)
            : null,
        author: users[questions[id].author]
    }
}

export default withRouter(connect(mapStateToProps)(Result))
