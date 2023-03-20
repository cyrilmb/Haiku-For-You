const randomPrepositionReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PREPOSITION':
      return action.payload;
    default:
      return state;
  }
};

export default randomPrepositionReducer;
