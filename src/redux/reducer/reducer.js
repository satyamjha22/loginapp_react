import initState from './init_state';
import { USER_NAME, PASSWORD, LOGIN } from '../actions/index.js';

export default function(state=initState, action = {}) {
  // console.log(state[`${state.data[0]}`].description);
  // console.log(state[state.data[0]].description);
  let newState = state;
  console.log(newState);
  switch(action.type) {
	  case USER_NAME : {
		  newState = { ...state };
      console.log(action.payload.value,'payload');
		  newState.login.username1 = action.payload.value;
		  break;
		}
	  case PASSWORD : {
		  newState = { ...state };
      console.log(action.payload.value,'payload');
		  newState.login.password1 = action.payload.value;
		  break;
		}
	  case LOGIN : {
		  newState = { ...state };
		  newState.login.dataValidation = action.payload.validation;
		  break;
		}
		default:
		break;
  }
	return newState;
}
