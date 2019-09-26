import React, { Component } from 'react'
import { withRouter } from "react-router-dom";

class NotFound extends Component {

    handleSubmit = (e) => {
        e.preventDefault()

        this.props.history.push(`/`) // When rendered by react-router
    }

    render() {

        return (
            <div className='page-not-found container center'>
                <hr/>
                <h2>404 - Question Not Found</h2>
                <h3>The Question you are looking for does not exist od have been deleted</h3>
                <button type="submit" onClick={this.handleSubmit}>Go to Dashboard</button>
            </div>
        )
    }
}

export default withRouter(NotFound)
