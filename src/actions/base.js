function success(payload, actionType) {
    return {
        type: actionType,
        payload: payload
    };
}

function error(err, actionType) {
    return {
        type: actionType,
        payload: err
    };
}

export const baseAction = {
    success,
    error
};
