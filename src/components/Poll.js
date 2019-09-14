import React, { Component } from 'react'
import { formatQuestion } from "../utils/helpers";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { handleSaveAnswer } from "../actions/shared";

class Poll extends Component {

    state = {
        answer: '',
    }

    handleChange = (e) => {
        const answer = e.target.value
        this.setState(() => ({
            answer
        }))
    }

    submitPoll = (e, qid) => {
        e.preventDefault()
        const {dispatch, authedUser} = this.props
        const {answer} = this.state

        dispatch(handleSaveAnswer({
            authedUser,
            qid,
            answer,
        }))

        // Redirect to parent tweet
        this.props.history.push(`/questions/${qid}`) // When rendered by react-router
    }

    render() {
        const {question} = this.props
        const {id, avatar} = question
        return (
            <div className='media'>
                <img
                    src={avatar}
                    alt={`Avatar of ${avatar}`}
                    className='avatar mr-3'/>
                <div className='media-body'>
                    <h5 className='mt-0'>{question.name}</h5>
                    <div className='question-header'> Would you rather</div>

                    <div className="custom-control custom-radio">
                        <input type="radio" className="custom-control-input" id="defaultGroupExample1"
                               name="groupOfDefaultRadios" value='optionOne' onChange={this.handleChange}/>
                        <label className="custom-control-label"
                               htmlFor="defaultGroupExample1">{question.optionOne.text}</label>
                    </div>

                    <div className="custom-control custom-radio">
                        <input type="radio" className="custom-control-input" id="defaultGroupExample2"
                               name="groupOfDefaultRadios" value='optionTwo' onChange={this.handleChange}/>
                        <label className="custom-control-label"
                               htmlFor="defaultGroupExample2">{question.optionTwo.text}</label>
                    </div>

                    <button className='' onClick={(e) => this.submitPoll(e, id)}>
                        Submit
                    </button>
                </div>
            </div>
        )
    }
}

function mapStateToProps({questions, users, authedUser}, props) {
    const {id} = props.match.params
    const question = questions[id]
    console.log('Loading', id, authedUser, users)
    return {
        authedUser,
        answered: users[authedUser].answers[id],
        question: question
            ? formatQuestion(question, users[question.author], authedUser)
            : null
    }
}

export default withRouter(connect(mapStateToProps)(Poll))
