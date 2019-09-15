import { ADD_QUESTION, RECEIVE_QUESTIONS, SAVE_ANSWER } from "../actions/questions";


const questions = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION:
            const {question} = action
            return {
                ...state,
                [question.id]: question
            }
        case SAVE_ANSWER:
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [action.answer]: {
                        ...state[action.qid][action.answer],
                        votes: state[action.qid][action.answer].votes.concat([action.authedUser])
                    }
                }
            }
        default:
            return state
    }
}

// const tweets = {
//     1: {id:'A', name:'B'},
//     2: {id:'C', name:'D'}
// }
//
// const tweet = {
//     2: {id:'C', name:'E'}
// }
//
// console.log('Tweets ', {...tweets, ...tweet })

export default questions
