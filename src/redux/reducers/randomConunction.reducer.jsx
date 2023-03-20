const randomConjunctionReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_CONJUNCTION':
            return action.payload;
        default:
            return state;
    }
};


export default randomConjunctionReducer;