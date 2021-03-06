import React from 'react'
import TaskItem from './TaskItem'

export default ({ tasks, removeItem }) =>
  <ul>
    { tasks.map(item =>
        <TaskItem
          key={item.id}
          text={item.description}
          removeItem={removeItem(item.id)}
        />
      )
    }
  </ul>


