import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Link, IndexLink } from 'react-router'
import Header from './Header'

class App extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div>
        <Header />
        {/* Here is wrapper */}
        <div className="wrapper filter">
          {children}
        </div>
      </div>
    )
  }
}

App.propTyped = {

  // Injected by React Router
  children: PropTypes.node
}


function mapStateToProps(state) {
  return {
    // images: state.images,
    // selectedImage: state.selectedImage
  }
}

function mapActionCreatorsToProps(dispatch) {
  return {
    
  }
  //return bindActionCreators(GalleryActions, dispatch)
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(App)
