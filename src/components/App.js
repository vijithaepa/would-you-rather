import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { LoadingBar } from "react-redux-loading";
import Home from "./Home";
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Nav from "./Nav";
import Question from "./Question";
import QuestionSummary from "./QuestionSummary";

class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <LoadingBar/>
                    <div className='container'>
                        <Nav/>
                        {this.props.loading === true
                            ? null
                            : <div>
                                {/*<Route path='/' exact render={() => <QuestionSummary id='6ni6ok3ym7mf1p33lnez'/>} />*/}
                                <Route path='/' exact component={Home}/>
                                <Route path='/questions/:id' exact component={Question}/>
                            </div>
                        }
                    </div>
                </Fragment>
            </Router>
        )
    }
}

function mapStateToProps({authedUser}) {
    return {
        loading: authedUser === null
    }
}

export default connect(mapStateToProps)(App)
