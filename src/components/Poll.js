import React, { Component } from 'react'
import { formatQuestion } from "../utils/helpers";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { handleSaveAnswer } from "../actions/shared";

class Poll extends Component {

    state = {
        answer: '',
    };

    handleChange = (e, option) => {
        this.setState(() => ({
            answer: option
        }))
    };

    submitPoll = (e, qid) => {
        e.preventDefault();
        const {dispatch, authedUser} = this.props;
        const {answer} = this.state;

        dispatch(handleSaveAnswer({
            authedUser,
            qid,
            answer,
        }));

        // Redirect to Question Page
        this.props.history.push({
         pathname: `/questions/${qid}`,
         state: {from: {pathname: `/questions/${qid}`}}
        }) // When rendered by react-router
    };

    render() {
        const {question, author} = this.props;
        const {id, avatar} = question;
        return (
            <div className="container panel panel-default poll">
                <div className="panel-heading">{author.name} asks:</div>
                <div className="panel-body">
                    <div className='media row'>
                        <div className="row">
                            <div className="col-sm-5">
                                <img
                                    src={avatar}
                                    alt={`Avatar of ${avatar}`}
                                    className='img-circle avatar'/>
                            </div>
                            <div className="col-sm-7 left-side-line question-body">
                                <p className='question'> Would you rather...</p>
                                {/*<div className='question-header'> Would you rather</div>*/}

                                <div className="radio">
                                    <label><input type="radio" name="optradio"
                                                  onChange={e => this.handleChange(e, 'optionOne')}/>{question.optionOne.text}
                                    </label>
                                </div>
                                <div className="radio">
                                    <label><input type="radio" name="optradio"
                                                  onChange={e => this.handleChange(e, 'optionTwo')}/>{question.optionTwo.text}
                                    </label>
                                </div>

                                <button className='btn btn-primary btn-sm' disabled={this.state.answer === ''} onClick={(e) => this.submitPoll(e, id)}>
                                    Submit
                                </button>
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
    return {
        author: users[question.author],
        authedUser,
        question: question
            ? formatQuestion(question, users[question.author], authedUser)
            : null
    }
}

export default withRouter(connect(mapStateToProps)(Poll))
