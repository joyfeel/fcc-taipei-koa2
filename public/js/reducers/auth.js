const initialState = {
  token: null,
  userName: null,
  email: null,
  inAuthenticated: false
}

const auth = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_AUTH':
      return {...state, token: '123123123sdasdasdas'}
    default:
      return state
  }
}


export default auth
