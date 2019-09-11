import React, { Component } from 'react'
import { formatQuestion } from "../utils/helpers";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Poll extends Component {

    render() {
        const {question} = this.props
        const {id, name, avatar} = question
        return (
            <div className='media'>
                <img
                    src={avatar}
                    alt={`Avatar of ${avatar}`}
                    className='avatar mr-3'/>
                <div className='media-body'>
                    <h5 className='mt-0'>{question.name}</h5>
                    <div className='question-header'> Would you rather</div>

                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="defaultGroupExample1"
                               name="groupOfDefaultRadios"/>
                        <label class="custom-control-label" for="defaultGroupExample1">{question.optionOne.text}</label>
                    </div>

                    <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="defaultGroupExample2"
                               name="groupOfDefaultRadios"/>
                        <label class="custom-control-label" for="defaultGroupExample2">{question.optionTwo.text}</label>
                    </div>

                    <button className='' onClick={this.viewPoll}>
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
