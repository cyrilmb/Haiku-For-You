const randomPronounReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PRONOUN':
      return action.payload;
    default:
      return state;
  }
};

export default randomPronounReducer;
