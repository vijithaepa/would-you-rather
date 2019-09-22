import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoadingBar from "react-redux-loading"
import Home from "./Home"
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Nav from "./Nav"
import QuestionPage from "./QuestionPage"
import NewQuestion from "./NewQuestion";
import LeaderBoard from "./LeaderBoard";
import Login from "./Login";

class App extends Component {

    componentDidMount() {
        // if(this.props.authedUser !== null) {
            this.props.dispatch(handleInitialData())
        // }
    }


    render() {

        return (
            <Router>
                <Fragment>
                    <LoadingBar/>
                    <div className='container'>
                        <Nav/>

                        {this.props.authedUser === null
                            ? <div>
                                <Route path='/login' exact component={Login}/>
                                {/*<Route path='/score' exact render={() => <Score id='sarahedo'/>} />*/}
                            </div>
                            : (
                                this.props.loading !== 0        // And authedUser is not empty
                                    ? null
                                    : <div>
                                        <Route path='/' exact
                                               render={() => <HomePage authedUser={this.props.authedUser}/>}/>
                                        {/*<Route path='/' exact component={Home}/>*/}
                                        <Route path='/questions/:id' exact component={QuestionPage}/>
                                        <Route path='/add' exact component={NewQuestion}/>
                                        <Route path='/leaderboard' exact component={LeaderBoard}/>
                                        <Route path='/login' exact component={Login}/>
                                        {/*<Route path='/score' exact render={() => <Score id='sarahedo'/>} />*/}
                                    </div>
                            )
                        }
                    </div>
                </Fragment>
            </Router>
        )
    }
}

function mapStateToProps({authedUser, loadingBar}) {
    return {
        authedUser,
        loading: loadingBar.default
    }
}

function HomePage(props) {
    const authedUser = props.authedUser;
    if (authedUser === null) {
        return <Login/>;
    }
    return <Home/>;
}

export default connect(mapStateToProps)(App)
