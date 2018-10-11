import {MAKE_GUESS, RESET_GAME} from '../actions/index.js';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    correctAnswer: Math.round(Math.random() * 100) + 1
};

const calculateFeedback = diff => {
    if(diff >= 50){
        return "You're Ice Cold...";
    } 
    else if(diff >= 30){
        return "You're Cold...";
    }
    else if(diff >= 10){
        return "You're Warm";
    } 
    else if(diff >= 1){
        return "You're Hot!";
    } else {
        return "You got it!";
    }
}


export default (state=initialState, action) => {
    if(action.type === MAKE_GUESS){
        console.log(action.guess);
        console.log(state.correctAnswer);
        let guess = parseInt(action.guess, 10);
        const diff = Math.abs(action.guess - state.correctAnswer);
        let newFeedback = calculateFeedback(diff);

        return Object.assign({}, state, {
            guesses: [...state.guesses, guess],
            feedback: newFeedback
        });

    } 
    else if (action.type === RESET_GAME){
        return Object.assign({}, state, {
            guesses: [],
            feedback: 'Make your guess!',
            correctAnswer: action.correctAnswer
        });
    } 
    return state;
};

