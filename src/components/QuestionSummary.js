import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"

class QuestionSummary extends Component {

    render() {
        const {question, author} = this.props
        return (
            <div className='media'>
                <img
                    src={author.avatarURL}
                    alt={`Avatar of ${author.avatarURL}`}
                    className='avatar mr-3'/>
                <div className='media-body'>
                    <h5 className='mt-0'>{author.name}</h5>
                    <div className='question-header'> Would you rather</div>
                    <div className='question-option'>{question.optionOne.text.substring(0, 20)}...
                        OR {question.optionTwo.text.substring(0, 20)}...
                    </div>
                    <Link to={`/questions/${question.id}`}>
                        <button className=''>
                            View Poll
                        </button>
                    </Link>

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

export default connect(mapStateToProps)(QuestionSummary)
