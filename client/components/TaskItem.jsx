import React from 'react'

const TaskItem = ({ text, removeItem }) =>
  <li>
    <span className="item-description">
      {text}
    </span>
    <button onClick={removeItem} type="button">&times;</button>
  </li>

export default TaskItem

