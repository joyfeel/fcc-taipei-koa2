import React from 'react'
import { Link } from 'react-router'

function Register({
  children,
  onChange
}) {
  let nicknameInput,
      emailInput,
      passwordInput
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        onChange([
          nicknameInput.value,
          emailInput.value,
          passwordInput.value
        ])
      }}
      className="input-register-form"
    >
      {children}

      <div className="register-pic-upload">
        <h3>照片上傳</h3>
        <img src="../../images/_0mado.jpg" alt="沒上傳照片就用這張圖" />
        <label htmlFor="member-pic-upload">上傳不超過1mb</label>
        <input type="file" name="memeber_picture" id="member-pic-upload" />
      </div>

      <h3>註冊暱稱</h3>
      <label htmlFor="nickname-register">
        <i className="icon-member-3"></i>
        <input
          type="text"
          ref={node => {
              nicknameInput = node
          }}
          name="register_nickname"
          id="nickname-register"
          placeholder="nickname"
        />
      </label>

      <h3>註冊信箱</h3>
      <label htmlFor="email-register">
        <i className="icon-mail-3"></i>
        <input
          type="email"
          ref={node => {
              emailInput = node
          }}
          name="register_email"
          id="email-register"
          placeholder="e-mail"
        />
      </label>

      <h3>註冊密碼</h3>
      <label htmlFor="password-register">
        <i className="icon-password-2"></i>
        <input
          type="password"
          ref={node => {
              passwordInput = node
          }}
          name="register_password"
          placeholder="password"
          id="password-register"
        />
        <i className="icon-eye-opened-1"></i>
      </label>

      <input type="submit" name="submit_register" id="submit-register" />
      <Link to="/login" alt="sign up your account">Go Login Test</Link>
    </form>
  )
}

export default Register
