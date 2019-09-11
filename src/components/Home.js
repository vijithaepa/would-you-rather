import React, { Component } from 'react'
import { connect } from "react-redux";
import Question from "./Question";
import QuestionSummary from "./QuestionSummary";

class Home extends Component {

    render() {
        return (
            <div className='container'>

                <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#unanswered" role="tab"
                           aria-controls="home" aria-selected="true">Unanswered</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#answered" role="tab"
                           aria-controls="profile" aria-selected="false">Answered</a>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="unanswered" role="tabpanel"
                         aria-labelledby="home-tab">
                        <ul className='list-group'>
                            {this.props.unAnsweredIds.map(id => (
                                <li key={id} className='list-group-item'>
                                    <QuestionSummary id={id}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="tab-pane fade" id="answered" role="tabpanel" aria-labelledby="profile-tab">
                        <ul className='list-group'>
                            {this.props.answeredIds.map(id => (
                                <li key={id} className='list-group-item'>
                                    <QuestionSummary id={id}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({questions, users, authedUser}) {

    return {
        unAnsweredIds: Object.keys(questions)
            .filter((qid) => !users[authedUser].answers[qid])
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
        answeredIds: Object.keys(questions)
            .filter((qid) => users[authedUser].answers[qid])
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    }
}


export default connect(mapStateToProps)(Home)
