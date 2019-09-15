import React, {Component} from 'react'
import { connect } from "react-redux";
import { handleSaveQuestion } from "../actions/shared";

class NewQuestion extends Component {

    state = {
        optionOneText: '',
        optionTwoText: '',
    }

    updateOptionOne = (e) => {
        const optionOneText = e.target.value
        this.setState(() => ({
            optionOneText
        }))
    }

    updateOptionTwo = (e) => {
        const optionTwoText = e.target.value
        this.setState(() => ({
            optionTwoText
        }))
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const {optionOneText, optionTwoText} = this.state
        const {dispatch} = this.props
        dispatch(handleSaveQuestion({optionOneText, optionTwoText}))

        // Redirect to Question Page
        this.props.history.push('/') // When rendered by react-router
    }

    render() {
        return (
            <div className='new-question-container'>
                <h3>Create New Question</h3>
                <hr/>
                <h4>Complete the question:</h4>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Would you rather ...</label>
                        <input type="text" className="form-control" id="optionOne"
                               placeholder="Enter Option One Text Here" onChange={this.updateOptionOne}/>
                        <span> ---- OR ---- </span>
                        <input type="text" className="form-control" id="optionTwo"
                               placeholder="Enter Option Two Text Here" onChange={this.updateOptionTwo}/>
                    </div>
                    <button type="submit" className="btn btn-primary" >Submit</button>
                </form>
            </div>
        )
    }
}



export default connect()(NewQuestion)
