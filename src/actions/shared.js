import { getInitialData, saveQuestion, saveQuestionAnswer } from "../utils/api";
import { addQuestion, receiveQuestions, saveAnswer, } from "./questions";
import { receiveUsers, updateUserAnswer, updateUserQuestion } from "./users";
import { setAuthedUser } from "./authedUser";
import { hideLoading, showLoading } from "react-redux-loading";

const AUTHED_USER_ID = 'tylermcginnis'

export const handleInitialData = () => {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({users, questions}) => {
                dispatch(receiveQuestions(questions))
                dispatch(receiveUsers(users))
                dispatch(setAuthedUser(AUTHED_USER_ID))
                dispatch(hideLoading())
            })
    }
}

// asynchronous action creator
export const handleSaveAnswer = (answer) => {
    return (dispatch) => {
        dispatch(showLoading())
        // dispatch(saveAnswer(answer))
        return saveQuestionAnswer(answer)
            .then(e => {
                dispatch(saveAnswer(answer))
                dispatch(updateUserAnswer(answer))
            })
            .then(()=> dispatch(hideLoading()))
            .catch((e) => {
                console.warn("Error in handle Saving Answer", e)
                // dispatch(removeAnswer(answer))
                // alert('There was an error Saving Answer, try again')
            })
    }
}

// asynchronous action creator
export const handleSaveQuestion = (info) => {
    return (dispatch, getState) => {
        const {optionOneText, optionTwoText} = info
        const {authedUser} = getState()
        dispatch(showLoading())
        return saveQuestion({optionOneText, optionTwoText, author: authedUser})
            .then((question) => {
                dispatch(addQuestion(question))
                dispatch(updateUserQuestion(question))
            })
            .then(() => dispatch(hideLoading()))
    }
}
