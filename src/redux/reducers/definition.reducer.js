const definitionReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_DEFINITION':
            console.log('reducer def: ', action.payload);
            return action.payload;
        default:
            return state;
    }
};


export default definitionReducer;