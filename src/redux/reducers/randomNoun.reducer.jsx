const randomNounReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_NOUN':
            return action.payload;
        default:
            return state;
    }
};


export default randomNounReducer;