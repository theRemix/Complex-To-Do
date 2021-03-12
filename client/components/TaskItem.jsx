import React from 'react'
import ButtonEdit from './ButtonEdit'
import ButtonRemove from './ButtonRemove'

const TaskItem = ({ id, text, editItem, removeItem }) =>
  <li>
    <span className="item-description">
      {text}
    </span>
    <ButtonEdit id={id} editItem={editItem} />
    <ButtonRemove id={id} removeItem={removeItem} />
  </li>

export default TaskItem

