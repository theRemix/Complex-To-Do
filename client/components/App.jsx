import React, { useState } from 'react'
import ButtonAdd from './ButtonAdd'
import Form from './Form'
import TaskList from './TaskList'
import Title from './Title'

export default () => {
  const [v, setV] = useState(false)
  const tasks = []

  return <div>
    <Title text="Complex To Do" />
    <ButtonAdd setV={setV} />
    <Form isVisible={v} />
    <TaskList tasks={tasks} />
  </div>
}
