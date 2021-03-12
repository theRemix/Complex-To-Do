export const list = async () => {
  try {
    const todos = await fetch('/api/todos')
    return todos.json()
  } catch (err) {
    console.error(err)
    return []
  }
}

export const create = async (description) => {
  try {
    await fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ description })
    })
  } catch (err) {
    console.error(err)
  }
}

export const read = async () => {
  try {
    const todo = await fetch(`/api/todos/${id}`)
    return todo.json()
  } catch (err) {
    console.error(err)
    return {}
  }
}

export const update = async (id, description) => {
  try {
    await fetch(`/api/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ description })
    })
  } catch (err) {
    console.error(err)
  }
}

export const destroy = id => async () => {
  try {
    await fetch(`/api/todos/${id}`, {
      method: 'DELETE',
    })
  } catch (err) {
    console.error(err)
  }
}

