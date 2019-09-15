export const RECEIVE_USERS = 'RECEIVE_USERS'
export const UPDATE_USER_ANSWER = 'UPDATE_USER_ANSWER'
export const UPDATE_USER_QUESTION = 'UPDATE_USER_QUESTION'

export const receiveUsers = (users) => {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export const updateUserAnswer = ({authedUser, qid, answer}) => {
    return {
        type: UPDATE_USER_ANSWER,
        authedUser,
        qid,
        answer
    }
}

export const updateUserQuestion = (question) => {
    return {
        type: UPDATE_USER_QUESTION,
        question
    }
}
