import React from 'react'
import LoginSocialmedia from '../components/LoginSocialmedia'
import LoginForm from '../components/LoginForm'

export default class LoginMainpage extends React.Component {
  render() {
    return(
      <div className="fcc-login-mainpage">
        <h2 className="sr">freecodecamp login page</h2>
        <LoginSocialmedia />
        <LoginForm />
      </div>
    )
  }
}

export default LoginMainpage
