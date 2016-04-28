import React from 'react'
import { Link } from 'react-router'
import Register from './Register'

export default class InputRegisterForm extends React.Component {
  constructor(props) {
    super(props)

    this.handleRegister = this.handleRegister.bind(this)
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
  handleRegister(inputValue) {
      const [nickname, email, password] = inputValue
      console.log(nickname)
      console.log(email)
      console.log(password)

      fetch('/register', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nickname,
          email,
          password
        })
      })
      .then(this.checkStatus)
      .then(this.parseJSON)
      .then((data) => {
        console.log(data)
      })
      .catch(e => {
        //console.log(`Catch request fail ${e}`)
        alert(`Catch request fail ${e}`)
      })
  }
  render() {
    return (
      <Register onChange={this.handleRegister}>
        <h2>freecodecamp register form</h2>
      </Register>
    )
  }
}
