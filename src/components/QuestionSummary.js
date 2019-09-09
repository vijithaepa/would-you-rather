import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from "react-router-dom";
import { formatQuestion } from "../utils/helpers";

class QuestionSummary extends Component {

    viewPoll = () => {

    }

    render() {
        const {question} = this.props
        const {id, name, avatar} = question
        return (
            <Link to={`/questions/${question.id}`}>

                <div className='media'>
                    <img
                        src={avatar}
                        alt={`Avatar of ${avatar}`}
                        className='avatar mr-3'/>
                    <div className='media-body'>
                        <h5 className='mt-0'>{question.name}</h5>
                        <div className='question-header'> Would you rather</div>
                        <div className='question-option'>{question.optionOne.text.substring(0, 20)}...
                            OR {question.optionTwo.text.substring(0, 20)}</div>
                        <button className='' onClick={this.viewPoll}>
                            Answered Questions
                        </button>
                    </div>
                </div>
            </Link>
        )
    }
}

// passing state as 1st parameter
// Passing parameter to store is the 2nd parameter
function mapStateToProps({questions, users, authedUser}, {id}) {
    const question = questions[id]
    return {
        authedUser,
        question: question
            ? formatQuestion(question, users[question.author], authedUser)
            : null
    }
}

export default withRouter(connect(mapStateToProps)(QuestionSummary))
