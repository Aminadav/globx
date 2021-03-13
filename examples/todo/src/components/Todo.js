import React from 'react'
import store from '../store'
export default function  TodoList ({todoId,onClick}) {
  store.useRerenderIfChange(()=>[store.todos[todoId]])
  var thisTodo=store.todos.find(x=>x.id===todoId)
  return (
  <li 
  style={{textDecoration: thisTodo.completed ? "line-through" : ""}}
  onClick={onClick}>{thisTodo.text}</li>
  )
}