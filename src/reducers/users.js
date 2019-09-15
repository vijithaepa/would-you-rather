import { RECEIVE_USERS, UPDATE_USER_ANSWER, UPDATE_USER_QUESTION } from "../actions/users";

const users = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case UPDATE_USER_ANSWER:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.qid]: action.answer
                    }
                }
            }
        case UPDATE_USER_QUESTION:
            const {author, id} = action.question
            return {
                ...state,
                [author]: {
                    ...state[author],
                    questions: state[author].questions.concat(id)
                }
            }

        default:
            return state
    }
}

export default users
