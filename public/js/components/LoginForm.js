import React from 'react'
import { Link } from 'react-router'

function InputLoginForm({ onChange }) {
  let emailInput, passwordInput
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        onChange([
          emailInput.value,
          passwordInput.value
        ])
      }}
      className="input-login-form"
    >
      <label htmlFor="email-login">
        <input
          ref={node => {
            emailInput = node
          }}
          type="email"
          placeholder="e-mail"
          id="email-login"
          defaultValue="joybee210@gmail.com"
        />
        <i className="icon-mail-3"></i>
      </label>

      <label htmlFor="password-login" style={{marginTop:'10px'}}>
        <input
          ref={node => {
            passwordInput = node
          }}
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
        <Link to="/register" alt="sign up your account">sign up</Link>
        {/*<a href="" alt="sign up your account">sign up</a>*/}
      </div>
    </form>
  )
}

export default InputLoginForm
