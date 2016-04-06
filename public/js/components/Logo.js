import React from 'react'
import { Link } from 'react-router'

function Logo() {
  return (
    <div className="logo">
      <h1>
        {/*<a href="#home" className="fadeInUp"></a>*/}
        <Link
          to="/"
          className="fadeInUp"
        />
        <em className="sr">This is freecodecamp, Hello Taipei</em>
        <span className="fadeInUp off">Hello Taipei</span>
      </h1>
    </div>
  )
}

export default Logo
