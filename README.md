# react-one-state

A global state manager that let you read and change the the whole state from all your components.

A new solution for creating simple and powerful stores for React apps. The react-one-state let you change and read any part of the store from every component or traditional JavaScript code.

Let's take the Redux todo example. (https://github.com/reduxjs/redux/tree/master/examples/todos) Wen implemented it in react-one-state (https://github.com/Aminadav/react-one-state-todo) it's saving about 90% of the code.

## Why react-one-state?

- Very easy to refactor.
- Great for agility. Let you easily refactor.
- Mutable. You don't need to clone object and array's before changing.
- It working fast.
- You can read and change in part of your state easily from any component.
- Supporting all smart features of VSCode. Including auto-complete, find all-refreneces, and rename symbols!
- I'm not a big fun of Redux. Too many code to write, hard to refactor, and not supporting auto-complete.


## Compare to Redux

- 90% less code to write in compare to Redux.
- Very easy to learn. Contain only three methods.
- I like to write code as little as possible. I'm not like to develop reducers, action builders, connectors, and containers.
- I want to change the state directly - without calling other actions, dispatching, or making any other change.
- Sometimes I need to access specific part of the store Buy I don't want to changing anything in the code-
- I Like JSON. And the component should use the store's property like any other JSON object. And without using or creating selectors.
- I wouldn't say I like immutable objects. I prefer to push, pull, and change arrays and objects without cloning.
- I don't like that sometimes I'm getting previous store values because of cloning, and I'm not particularly eager to fix it using useRef and similar fixes. I prefer to have one state ojbect.
- In Redux all IDE smart features like "Find all references" or "rename symbol" doesn't work for keys in the store (unless your spend more time to create type definitaions). In react-one-state it's working out of the box, so my code always have the naming I wish and I don't afraid to refactor.

## How to use react-one-state?

Create a new file (`store.js`) and call the react-one-state `newStore` function with your initial store. And export the result.

```js
const store = NewStore({
  todos:[],
  filter:'ALL',
})
export default store
```

<img src="https://snipboard.io/bkl6nq.jpg" border=1>

*Suppport all smart IDE's features such as autocomplete for keys in your store, rename symbols and find all references*

react-one-state will create one store for your whole app. You can read any part of the store easily by importing the store.js file. This is a simple JSON file.

```js
import store from './store'

console.log(store.filter)
store.todos.push("My First Todo")
function Component(){
  return <div>{store.filter></div>
}
```

Each time you updating the store you have to call the `updateStore` function, it will render the componets that are depneded on the store.

```
import store from './store'
<div onClick={()=>{ store.counter++; store.updaterStore() }>
  Increase counter
</div>
```

To know which components should re-render you have to use the react-one-state hook useRerenderIfChange and tell it which part of the store this component is dependent on.

```js
import store from './store'
function MyComponent(){
  store.useRerenderIfChange(()=>[store.counter]) // Each time counter change re-render this component
  <div onClick={()=>{ store.counter++; store.updaterStore() }>
    Increase counter
  </div>
}
```

That it! You know everything about react-one-state.

- `createStore` - called once.
- `updateStore` - called every time you want to rerender your UI.
- `useRerenderIfChange` - called on every component that depended on specific part of the store.

## Demo App:
Please see the full working demo app: https://github.com/Aminadav/react-one-state/tree/master/examples/todo

See the website: https://react-one-state.js.org

Link to the first Reddit post about it: https://www.reddit.com/r/reactjs/comments/m27hqm/globux_a_global_state_manager_that_let_you_read/

## Installation

    npm i react-one-state

Demo:

```js
// First you should creating the store.
// Usually you will create one store for each app and share this variable.
// Usually you will put this in separate file.
import {newStore} from "react-one-state"

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
