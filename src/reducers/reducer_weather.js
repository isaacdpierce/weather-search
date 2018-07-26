import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  // switch statement to handle only the FETCH_WEATHER action type
  switch (action.type) {
  case FETCH_WEATHER: 
    return [ action.payload.data, ...state ] // ES6 syntax
// same as old syntax -> state.concat([ action.payload.data ]); // concat does NOT mutate state -> it returns a new instance 
//     payload.data is all we care about from the ajax request -> .data has all the  city and weather info I need for this app
  }
  return state;
}