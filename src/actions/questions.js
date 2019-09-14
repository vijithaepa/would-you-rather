import {saveQuestion, saveQuestionAnswer} from "../utils/api";
import { hideLoading, showLoading } from "react-redux-loading";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'SAVE_QUESTION'
export const SAVE_ANSWER = 'SAVE_ANSWER'
export const REMOVE_ANSWER = 'REMOVE_ANSWER'

export const receiveQuestions = (questions) => {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

// To Store
const addQuestion = (question) => {
    return {
        type: ADD_QUESTION,
        question
    }
}

// To Store
export const saveAnswer = ({authedUser, qid, answer}) => {
    return {
        type: SAVE_ANSWER,
        qid,
        answer,
        authedUser
    }
}

// // asynchronous action creator
// export const handleSaveAnswer = (answer) => {
//     return (dispatch) => {
//         // dispatch(saveAnswer(answer))
//         return saveQuestionAnswer(answer)
//             .then(e => {
//                 dispatch(saveAnswer(answer))
//                 dispatch(updateUser(answer))
//             })
//             .catch((e) => {
//                 console.warn("Error in handle Saving Answer", e)
//                 // dispatch(removeAnswer(answer))
//                 // alert('There was an error Saving Answer, try again')
//             })
//     }
// }

// asynchronous action creator
export const handleSaveQuestion = (question) => {
    return (dispatch, getState) => {
        // const {authedUser} = getState()
        dispatch(showLoading())
        return saveQuestion(question)
            .then((question) => dispatch(addQuestion(question)))
            .then(() => dispatch(hideLoading()))
    }
}
