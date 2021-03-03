import React from 'react'
import TaskItem from './TaskItem'

export default ({ tasks }) =>
  <ul>
    { tasks.map(item =>
        <TaskItem key={item._id} text={item.description} />
      )
    }
  </ul>

