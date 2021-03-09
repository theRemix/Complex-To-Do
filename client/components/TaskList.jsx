import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({ tasks, removeItem }) =>
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

export default TaskList
