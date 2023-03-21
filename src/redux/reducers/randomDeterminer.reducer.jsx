const randomDeterminerReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETERMINER':
            return action.payload;
        default:
            return state;
    }
};


export default randomDeterminerReducer;