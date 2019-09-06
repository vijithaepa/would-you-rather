import React, { Component } from 'react'
import { LoadingBar } from "react-redux-loading";
import Home from "./Home";
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Nav from "./Nav";

class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <div className='container'>
                <LoadingBar/>
                <Nav />
                <Home/>
            </div>
        )
    }
}

function mapStateToProps({authedUser}) {
    return {
        loading: authedUser === null
    }
}

export default connect(mapStateToProps)(App)
