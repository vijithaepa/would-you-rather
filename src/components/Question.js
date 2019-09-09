import React, {Component} from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from "../utils/helpers";
import {Link, withRouter} from "react-router-dom";

class Question extends Component {

    render() {
        const {question, answered} = this.props

        return (
            <Link to={`/questions/${question.id}`} className='tweet'>
                <span>{answered}</span>
            </Link>
        )
    }
}

// passing state as 1st parameter
// Passing parameter to store is the 2nd parameter
function mapStateToProps({questions, users, authedUser}, props) {
    const {id} = props.match.params
    const question = questions[id]
    console.log('Loading', id, users)
    return {
        authedUser,
        answered: users[authedUser].answers[id],
        question: question
            ? formatQuestion(question, users[question.author], authedUser)
            : null
    }
}

export default withRouter(connect(mapStateToProps)(Question))
