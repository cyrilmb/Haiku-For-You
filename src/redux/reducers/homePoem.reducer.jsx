const homePoemReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_POEM':
            return action.payload;
        default:
            return state;
    }
};

export default homePoemReducer;