import React from 'react'
const store = require('./store')
function App(){
  store.useRerenderIfChange(()=>[store.key1])
  function incrementKey1(){
    store.key1++
    store.updateStore()
  }
  return <div onClick={incrementKey1}>
    Store key1: {store.key1}
    <ChildComponent />
    </div>
}

function ChildComponent() {
  store.useRerenderIfChange(()=>[store.key2])
  function incrementKey2(){
    store.key2++
    store.updateStore()
  }
  return <div onClick={incrementKey2}>
    Store key2: {store.key2}
    </div>
}