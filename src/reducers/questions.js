import { ADD_QUESTION, RECEIVE_QUESTIONS } from "../actions/questions";


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
