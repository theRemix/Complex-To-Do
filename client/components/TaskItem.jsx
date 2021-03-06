import React from 'react'

export default ({ text, removeItem }) =>
  <li>
    <span className="item-description">
      {text}
    </span>
    <button onClick={removeItem} type="button">&times;</button>
  </li>

