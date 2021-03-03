import React from 'react'

export default ({ isVisible }) => {
  const style = {
    display: isVisible ? 'block' : 'none'
  }

  return <div style={style}>
    FORM
  </div>
}

