import React, { useState, useEffect } from 'react'
import ButtonAdd from './ButtonAdd'
import Form from './Form'
import TaskList from './TaskList'
import Title from './Title'

const App = () => {
  const [v, setV] = useState(false)
  const [tasks, setTasks] = useState([])

  const fetchTodos = async () => {
    const todos = await fetch('/api/todos')
    setTasks(await todos.json())
  }

  useEffect(fetchTodos, [])

  const removeItem = id => async () => {
    await fetch(`/api/todos/${id}`, {
      method: 'DELETE',
    })
    await fetchTodos()
  }

  return <div>
    <Title text="Complex To Do" />
    <ButtonAdd setV={setV} />
    <Form isVisible={v} setV={setV} fetchTodos={fetchTodos}/>
    <TaskList tasks={tasks} removeItem={removeItem} />
  </div>
}

export default App
