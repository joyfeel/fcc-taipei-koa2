const USER_LOGIN = 'USER_LOGIN'

export function login(userInfo) {
  return {
    type: USER_LOGIN,
    userInfo
  }
}
