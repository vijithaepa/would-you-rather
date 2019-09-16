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
export const addQuestion = (question) => {
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


