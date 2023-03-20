const randomHelpingVerbReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_HELPING_VERB':
            return action.payload;
        default:
            return state;
    }
};

export default randomHelpingVerbReducer;
