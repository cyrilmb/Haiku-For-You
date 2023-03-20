const randomAdjectiveReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ADJECTIVE':
            return action.payload;
        default:
            return state;
    }
};


export default randomAdjectiveReducer;