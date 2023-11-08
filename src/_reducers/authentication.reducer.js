import { userConstants } from '../_constants';

let user = JSON.parse(localStorage.getItem('spuser'));
const initialState = user ? { loggedIn: true, user } : {};
// console.log('useruseruseruseruseruseruser:::::::::::::::::::::?????', user);

export function authentication(state = initialState, action) {

  switch (action.type) {
    case userConstants.LOGIN_FIRST_REQUEST:
      return {
        ...state,
      };
    case userConstants.LOGIN_FIRST_SUCCESS:
      return {
        ...state,
        // otpSent: true,
        userDetails: action.user.userinfo,
        betChipsDataItems: action.user.betChipsData
      };
    case userConstants.LOGIN_FIRST_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}