import { getInitialData, saveQuestionAnswer } from "../utils/api";
import { receiveQuestions, saveAnswer, } from "./questions";
import { receiveUsers, updateUser } from "./users";
import { setAuthedUser } from "./authedUser";
import {showLoading, hideLoading} from "react-redux-loading";

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
                dispatch(updateUser(answer))
            })
            .catch((e) => {
                console.warn("Error in handle Saving Answer", e)
                // dispatch(removeAnswer(answer))
                // alert('There was an error Saving Answer, try again')
            })
    }
}
