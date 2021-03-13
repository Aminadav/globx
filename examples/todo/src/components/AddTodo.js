import React from 'react'
import store from '../store'
export default function AddTodo  () {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        store.todos.push({
          text:input.value,
          id:new Date().valueOf()
        })
        store.updateStore()
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}