import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({ tasks, editItem, removeItem }) =>
  <ul>
    { tasks.map(item =>
        <TaskItem
          key={item.id}
          id={item.id}
          text={item.description}
          editItem={editItem}
          removeItem={removeItem}
        />
      )
    }
  </ul>

export default TaskList
