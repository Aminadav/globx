# react-global-store

I need a name for my new React store.

Why I created it? Because I very like Redux, but:

- It lot of code. (Action builders, reducers, Selectors, Connectors...)
- It hard to refactor.
- It hard to get IDE autocomplete.

I have created a new store, that it's usefull for small team (or team of 1 developer) in Agile environment
who would like to develop faster, and still keep the app run fast.

- You get one store and can access to all of it in any component.
- You can update any part of the store directly from every component.
- No need to create action builders or selectors. The store is a simple read/write JavaScript JSON object.
- You can create all your components memoized, and setup to render them only when specific field changed in the store.
- It run fast.
- You get auto-complete to all fields in your store automatically.
- No bugs of changing array or object values without cloning. You can change them in-place.

Demo:

```js
// First you should creating the store.
// Usually you will create one store for each app and share this variable.
// Usually you will put this in separate file.
const GlobalStore = require('react-global-store2') 

const store = GlobalStore.NewStore({
  key1:0,
  key2:0,
  // You can add many keys as you wish
  // It can be functions, arrays, or Whatever you want.
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