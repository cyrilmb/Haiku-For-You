const randomVerbReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_VERB':
            return action.payload;
        default:
            return state;
    }
};


export default randomVerbReducer;