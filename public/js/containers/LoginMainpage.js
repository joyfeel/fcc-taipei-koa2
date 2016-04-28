import React, { PropTypes } from 'react'
import LoginSocialmedia from '../components/LoginSocialmedia'
import LoginForm from '../components/LoginForm'
import auth from '../utils/auth'

class LoginMainpage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: false
    }
    this.handleLogin = this.handleLogin.bind(this)
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
  handleLogin(inputValue) {
    //alert(value)
    //console.log(this.context.router)
    const [email, password] = inputValue

    fetch('/login', {
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
      //console.log(data)
      let { authenticated, token, email } = data
      //console.log(token)
      //console.log(email)
      localStorage.token = token
      localStorage.email = email
      //console.log(JSON.stringify(data))
      //console.log(JSON.parse(data))
    })
    .catch(e => {
      //console.log(`Catch request fail ${e}`)
      alert(`Catch request fail ${e}`)
    })

/*
    auth.login(email, password, (loggedIn) => {
      console.log(loggedIn)
      if (!loggedIn)
        return this.setState({ error: true })

      const { location } = this.props
      console.log(location)
      console.log(this.props)
      if (location.state && location.state.nextPathname) {
        this.context.router.replace(location.state.nextPathname)
      } else {
        this.context.router.replace('/')
      }
    })
*/
  }
  render() {
    return(
      <div className="fcc-login-mainpage">
        <h2 className="sr">freecodecamp login page</h2>
        <LoginSocialmedia />
        <LoginForm onChange={this.handleLogin} />
      </div>
    )
  }
}

LoginMainpage.contextTypes = {
  router: PropTypes.object.isRequired
}

export default LoginMainpage
