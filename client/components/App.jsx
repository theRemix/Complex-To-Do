import React, { useState, useEffect } from 'react'
import ButtonAdd from './ButtonAdd'
import Form from './Form'
import TaskList from './TaskList'
import Title from './Title'

export default () => {
  const [v, setV] = useState(false)
  const [tasks, setTasks] = useState([])

  const fetchTodos = async () => {
    const todos = await fetch('/api/todos')
    setTasks(await todos.json())
  }

  useEffect(fetchTodos, [])

  return <div>
    <Title text="Complex To Do" />
    <ButtonAdd setV={setV} />
    <Form isVisible={v} setV={setV} fetchTodos={fetchTodos}/>
    <TaskList tasks={tasks} />
  </div>
}
