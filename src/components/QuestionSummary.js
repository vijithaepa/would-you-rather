import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";

class QuestionSummary extends Component {

    handleSubmit = (e, qid) => {
        e.preventDefault()
        // Redirect to Question Page
        this.props.history.push(`/questions/${qid}`) // When rendered by react-router
    }

    render() {
        const {question, author} = this.props
        return (
            <div className='media'>
                <img
                    src={author.avatarURL}
                    alt={`Avatar of ${author.avatarURL}`}
                    className='avatar'/>
                <div className='media-body'>
                    <h3 className='mt-3'>{author.name}</h3>
                    <div className='question-header'> Would you rather</div>
                    <div className='question-option'>{question.optionOne.text.substring(0, 20)}...
                        OR {question.optionTwo.text.substring(0, 20)}...
                    </div>
                    <button className='btn-view-poll' onClick={(e) => this.handleSubmit(e, question.id)}>
                        View Poll
                    </button>
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
