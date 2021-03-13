import React from 'react'
import store from '../store'
import Todo from './Todo'
export default function  TodoList () {
  store.useRerenderIfChange(()=>[store.todos,store.filter])
  let todos=store.todos
  if(store.filter==="COMPLETED") {
    todos=store.todos.filter(x=>x.completed)
  } else if(store.filter==="ACTIVE") {
    todos=store.todos.filter(x=>!x.completed)
  }
  return (
  <ul>
    {todos.map((todo,index) =>
      <Todo
        key={todo.id}
        todoId={todo.id}        
        onClick={() => {
          todo.completed=!todo.completed
          store.updateStore()
        }
        }
      />
    )}
  </ul>
  )
}