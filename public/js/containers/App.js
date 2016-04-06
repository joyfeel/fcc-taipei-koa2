import React from 'react'
import { Link, IndexLink } from 'react-router'
import Header from './Header'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {/* Here is wrapper */}
        <div className="wrapper filter">
          {this.props.children}
        </div>
      </div>
    )
  }
}
