import React from 'react'
import { Link } from 'react-router'

export default class InputLoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  checkStatus(response) {
    //response.ok === true, (status 200 ~ 299)
    if (response.ok) {
      return response
    } else {
      let error = new Error(response.statusText)
      error.response = response
      throw error
    }
  }
  parseJSON(response) {
    return response.json()
  }
  handleSubmit(e) {
    e.preventDefault()
    const [email, password] = [this.refs.email.value, this.refs.password.value]

    fetch('/admin', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })
    .then(this.checkStatus)
    .then(this.parseJSON)
    .then((data) => {
      console.log(data)
      //console.log(JSON.stringify(data))
      //console.log(JSON.parse(data))
    })
    .catch((e) => {
      //console.log(`Catch request fail ${e}`)
      alert(`Catch request fail ${e}`)
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="input-login-form">
        <label htmlFor="email-login">
          <input
            ref="email"
            type="email"
            placeholder="e-mail"
            id="email-login"
            defaultValue="joybee210@gmail.com"
          />
          <i className="icon-mail-3"></i>
        </label>

        <label htmlFor="password-login" style={{marginTop:'10px'}}>
          <input
            ref="password"
            type="password"
            placeholder="password"
            id="password-login"
          />
          <i className="icon-password-2"></i>
          <i className="icon-eye-closed-1 off"></i>
        </label>

        <label htmlFor="submit-login" style={{marginTop:'15px'}}>
          <input
            type="submit"
            name="submit"
            id="submit-login"
            value="sign in"
          />
          {/*<i className="icon-login-1"></i>*/}
        </label>
        <a href="" className="forgot-pwd" alt="forgot password?">Forgot password?</a>
        <div className="signup">
          Need an account?
          <a href="" alt="sign up your account">sign up</a>
        </div>
      </form>
    )
  }
}
