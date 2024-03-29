//@ts-check
import { useState, useEffect, useRef, useCallback } from "react"

function cloneDeep(obj) {
  return JSON.parse(JSON.stringify(obj))
}
function isEqual(a,b) {
  if(typeof a!=typeof b) {
    return false
  }
  if(typeof a=='object' && typeof b=='object') {
    if (Object.keys(a).length!=Object.keys(b).length) return false
  }
  return JSON.stringify(a)==JSON.stringify(b)
}

interface a{
  updateStore:()=>void
  useRerenderIfChange:(callback)=>void
}
export function newStore<T>(state:T):(a & T) {
  //@ts-ignore
  var Store:(a & T)=state
  var callbacks = {}
  var callbacksNextAvailableKey = 0
  
  function updateStoreNow() {
    scheduled=false
    for (var i in callbacks) {
      callbacks[i]()
    }
  }
  var scheduled=false  
  function Schedule(){
    if(scheduled) return 
    scheduled=true
    setTimeout(updateStoreNow,0)
  }
  /**
   * @example useRerenderIfChange((store) => [store.scale, store.othervalue])
   * @param callback {(store:Store)=>void}
   */
  Store.useRerenderIfChange=function(callback) {

    var [_, setMeToRerender] = useState(0)
    var callbacksKeyRef = useRef(callbacksNextAvailableKey++)

    /** The array from the user. Cloned so new changes will not be there */
    var cloned = useCallback(()=>cloneDeep(callback(Store)))
    var lastValueRef = useRef(cloned)
    useEffect(() => {
      // When object mount, add a function to the callbacks, to change if the value changes
      // it will trigged by the "updateStore below"
      callbacks[callbacksKeyRef.current] = () => {
        var currentValue = callback(Store) // The new array of values calculated from the store
        if (!isEqual(currentValue, lastValueRef.current)) {
          lastValueRef.current = cloneDeep(currentValue) // Update the old array.
          setMeToRerender((prev) => prev + 1) // Rerender the objects
        }
      }
      return () => {
        // When object unmount we don't need this callback any more.
        delete callbacks[callbacksKeyRef.current]
      }
    }, [])
    return lastValueRef.current
  }

  Store.updateStore=function() {
    Schedule()
  }
  return Store
}


