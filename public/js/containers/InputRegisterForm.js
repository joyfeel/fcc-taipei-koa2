import React from 'react'
import RegisterPicUpload from '../components/RegisterPicUpload'

export default class InputRegisterForm extends React.Component {
  render() {
    return (
      <form action="" className="input-register-form">
        <h2>freecodecamp register form</h2>
        <RegisterPicUpload />

        <h3>註冊暱稱</h3>
        <label htmlFor="nickname-register">
          <i className="icon-member-3"></i>
          <input type="text" name="register_nickname" id="nickname-register" placeholder="nickname" />
        </label>

        <h3>註冊信箱</h3>
        <label htmlFor="email-register">
          <i className="icon-mail-3"></i>
          <input type="email" name="register_email" id="email-register" placeholder="e-mail" />
        </label>

        <h3>註冊密碼</h3>
        <label htmlFor="password-register">
          <i className="icon-password-2"></i>
          <input type="password" name="register_password" placeholder="password" id="password-register" />
          <i className="icon-eye-opened-1"></i>
        </label>

        <input type="submit" name="submit_register" id="submit-register" />

      </form>
    )
  }
}

export default InputRegisterForm
