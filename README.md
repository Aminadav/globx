# GlobX

Please see the full working demo app: https://github.com/Aminadav/globx/tree/master/examples/todo

See the website: https://globx.js.org

Link to the first Reddit post about it: https://www.reddit.com/r/reactjs/comments/m27hqm/globux_a_global_state_manager_that_let_you_read/

## Installation

    npm i globx

Demo:

```js
// First you should creating the store.
// Usually you will create one store for each app and share this variable.
// Usually you will put this in separate file.
import {newStore} from "globx"

const store = newStore({
  key1:0,
  key2:0,
})

function App(){
  // This component will automatically re-render when store.key1 will change.
  store.useRerenderIfChange(()=>[store.key1])
  function incrementKey1(){
    store.key1++
    store.updateStore() // This will check which component should re-render since the last update.
  }
  return <div onClick={incrementKey1}>
    Store key1: {store.key1}
    <ChildComponent />
    </div>
}

function ChildComponent() {
  // This component will automatically re-render when store.key2 or store.key1 will change.
  store.useRerenderIfChange(()=>[store.key2,store.key1])
  function incrementKey2(){
    store.key2++
    store.updateStore()
  }
  return <div onClick={incrementKey2}>
    Store key1: {store.key1}
    Store key2: {store.key2}
    </div>
}
```
