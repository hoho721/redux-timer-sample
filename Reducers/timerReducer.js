import constants from '../Action/actionTypes';

const TIME_DURATION = 1500;

const initialState = {
    isPlaying: false,
    elapsedTime: 0,
    timerDuration: TIME_DURATION
};

function timerReducer (state = initialState, action) {

    console.log(action);

    switch (action.type) {
        case constants.ACTION_START:
            return applyStartTimer(state);

        case constants.ACTION_RESTART:
            return applyRestartTimer(state);

        case constants.ACTION_ADD:
            return applyAddSecond(state);

        default:
            return state;
    }
}

function applyStartTimer(state) {
    return {
        ...state,
        isPlaying: true
    }
}

function applyRestartTimer(state) {
    return {
        ...state,
        isPlaying: false,
        elapsedTime: 0
    }
}

function applyAddSecond(state) {
    if(state.elapsedTime < TIME_DURATION) {
        return {
            ...state,
            elapsedTime: state.elapsedTime + 1
        }
    } else {
        return {
            ...state,
            isPlaying: false
        }
    }
}


export default timerReducer