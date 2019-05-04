import constants from './actionTypes';

function startTimer() {
    return {
        type: constants.ACTION_START
    }
}

function restartTimer() {
    return {
        type: constants.ACTION_RESTART
    }
}

function addSecond() {
    return {
        type: constants.ACTION_ADD
    }
}

export function fetchStartTimer() {
    return dispatch => {
        dispatch(startTimer())
    }
}

export function fetchRestartTimer() {
    return dispatch => {
        dispatch(restartTimer())
    }
}

export function fetchAddSecond() {
    return dispatch => {
        dispatch(addSecond())
    }
}