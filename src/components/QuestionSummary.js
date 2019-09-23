import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";

class QuestionSummary extends Component {

    handleSubmit = (e, qid) => {
        e.preventDefault();
        // Redirect to Question Page
        this.props.history.push(`/questions/${qid}`) // When rendered by react-router
    };

    render() {
        const {question, author} = this.props;
        return (
            <div className="panel panel-default">
                <div className="panel-heading">{author.name} asks:</div>
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
                                <p className='question'> Would you rather</p>
                                <p className='question-option'>{question.optionOne.text.substring(0, 20)}...
                                    OR {question.optionTwo.text.substring(0, 20)}...
                                </p>
                                <button className='btn-view-poll' onClick={(e) => this.handleSubmit(e, question.id)}>
                                    View Poll
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

// passing state as 1st parameter
// Passing parameter to store is the 2nd parameter
function mapStateToProps({questions, users, authedUser}, {id}) {
    return {
        authedUser,
        question: questions[id],
        author: users[questions[id].author]
    }
}

export default withRouter(connect(mapStateToProps)(QuestionSummary))
