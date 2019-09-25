import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from "../utils/helpers";
import { withRouter } from "react-router-dom";
import Poll from "./Poll";
import Result from "./Result";
import Login from "./Login";
import { NotFound } from "./NotFoundPage";

class QuestionPage extends Component {

    render() {
        const {answered, authedUser, question} = this.props;

        if(question === null) {
            return <NotFound />
        }
        return (
            <div>
                {authedUser === null && <Login/>}
                {answered && answered === true
                    ? <Result/>
                    : <Poll/>
                }
            </div>
        )
    }
}

// passing state as 1st parameter
// Passing parameter to store is the 2nd parameter
function mapStateToProps({questions, users, authedUser}, props) {
    const {id} = props.match.params;     // Reading from browser URL params 'id'
    const question = questions[id];
    if (authedUser !== null) {
        return {
            authedUser,
            answered: !!users[authedUser].answers[id],
            question: question
                ? formatQuestion(question, users[question.author], authedUser)
                : null
        }
    }
}

export default withRouter(connect(mapStateToProps)(QuestionPage))
