import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from "../utils/helpers";
import { withRouter } from "react-router-dom";
import Poll from "./Poll";
import Result from "./Result";

class QuestionPage extends Component {

    render() {
        const {answered} = this.props
        return (
            <div>
            { answered && answered === true
                ? <Result />
                : <Poll />
            }
            </div>
        )
    }
}

// passing state as 1st parameter
// Passing parameter to store is the 2nd parameter
function mapStateToProps({questions, users, authedUser}, props) {
    const {id} = props.match.params
    const question = questions[id]
    return {
        authedUser,
        answered: users[authedUser].answers[id],
        question: question
            ? formatQuestion(question, users[question.author], authedUser)
            : null
    }
}

export default withRouter(connect(mapStateToProps)(QuestionPage))
