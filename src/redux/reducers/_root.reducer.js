import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import randomWordReducer from './randomWord.reducer';
import addPoemReducer from './addPoem.reducer';
import homePoemReducer from './homePoem.reducer';
import galleryReducer from './gallery.reducer';
import randomNounReducer from './randomNoun.reducer';
import randomVerbReducer from './randomVerb.reducer';
import randomAdjectiveReducer from './randomAdjective.reducer';
import randomAdverbReducer from './randomAdverb.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  randomWordReducer,
  addPoemReducer,
  homePoemReducer,
  galleryReducer,
  randomNounReducer,
  randomVerbReducer,
  randomAdjectiveReducer,
  randomAdverbReducer,
});

export default rootReducer;
