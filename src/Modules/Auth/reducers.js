import { SIGN_IN_SUCCESS, LOGOUT_SUCCESS } from './actions'

const initialState = {
  token: null,
}

export default (state = initialState, action) => {
  console.log('reducer')
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        token: action.token,
      }
      case LOGOUT_SUCCESS:
      return {}
    default:
      return state
  }
}
