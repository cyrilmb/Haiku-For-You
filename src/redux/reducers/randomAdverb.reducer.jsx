const randomAdverbReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ADVERB':
            return action.payload;
        default:
            return state;
    }
};


export default randomAdverbReducer;