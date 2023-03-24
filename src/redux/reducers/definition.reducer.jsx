const definitionReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_DEFINITION':
            return action.payload;
        default:
            return state;
    }
};


export default definitionReducer;