import React from 'react'
import { Link } from 'react-router'

export default class Typed extends React.Component {
  render() {
    return(
      <div className="fcc-login-mainpage">
        <Link to="/login">Login</Link>
      </div>
    )
  }
}

export default Typed
