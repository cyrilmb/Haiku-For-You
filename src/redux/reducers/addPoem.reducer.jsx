const addPoemReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_POEM':
            return action.payload;
        default:
            return state;
    }
};


export default addPoemReducer;