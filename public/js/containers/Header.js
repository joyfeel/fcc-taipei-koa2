import React from 'react'
import { Link, IndexLink } from 'react-router'
//import NavLink from './NavLink'
import Logo from '../components/Logo'
import HdrMemberPanel from '../components/HdrMemberPanel'

export default class Header extends React.Component {
  render() {
    return (
      <header className="bounceInDown">
        <div className="fcc-panel">
          <Logo />
          <HdrMemberPanel />
        </div>
      </header>
    )
  }
}
