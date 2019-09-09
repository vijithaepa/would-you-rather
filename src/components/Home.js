import React, { Component } from 'react'
import { connect } from "react-redux";
import Question from "./Question";
import QuestionSummary from "./QuestionSummary";

class Home extends Component {

    state = {
        answered: {},
        unAnswered: {}
    }

    filterAnswered = () => {
        //filter from props and set to state
    }

    filterUnanswered = () => {
//filter from props and set to state
    }

    render() {
        return (
            <div className='container'>
                    <h3></h3>
                <div className="row">
                    <div className="col-sm">
                        <button className='' onClick={this.filterUnanswered}>
                            Unanswered Questions
                        </button>
                        <div>
                            <ul className='list-group'>
                                {this.props.questionIds.map(id => (
                                    <li key={id} className='list-group-item'>
                                        <QuestionSummary id={id}/>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm">
                        <button className='' onClick={this.filterAnswered}>
                            Answered Questions
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}



function mapStateToProps({questions, users, authedUser}) {

    return {
        questionIds: Object.keys(questions)
            .filter((qid) => !users[authedUser].answers[qid])
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    }
}


export default connect(mapStateToProps)(Home)
