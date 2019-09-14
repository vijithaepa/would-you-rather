export const RECEIVE_USERS = 'RECEIVE_USERS'
export const UPDATE_USER = 'UPDATE_USER'

export const receiveUsers = (users) => {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export const updateUser = ({authedUser, qid, answer}) => {
    return {
        type: UPDATE_USER,
        authedUser,
        qid,
        answer
    }
}
