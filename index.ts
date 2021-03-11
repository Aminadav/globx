//@ts-check
import { useState, useEffect, useRef } from "react"
import isEqual = require("lodash.isequal")
import cloneDeep = require("lodash.clonedeep")

interface a{
  updateStore:()=>void
  useRerenderIfChange:(callback)=>void
  persistent:{[key:string]:any}
  isReady?:Promise<void>
}
interface PersistentProvider {
  setKey:(key:string,value:any)=>Promise<void>
  getKey:(key:string)=>Promise<any>
}
export function NewStore<T>(state:(T & {persistent:{[key:string]:any}}),persistentProvider?:PersistentProvider):(a & T) {
  //@ts-ignore
  var Store:(a & T)=state
  var prevPersistented = {... (Store?.persistent || {})}
  var callbacks = {}
  var callbacksNextAvailableKey = 0
  
  function updateStoreNow() {
    scheduled=false
    for (var i in callbacks) {
      callbacks[i]()
    }
    if(Store.persistent) {
      if(!persistentProvider) {
        throw new Error('cannot use persistent without persistent provider')
      }      
      for(let key of Object.keys(Store.persistent)) {
        var val=Store.persistent[key]
        // console.log({key,val:JSON.stringify(val),prev:prevPersistented[key]})
        
        if(JSON.stringify(val)!=prevPersistented[key]) {
          persistentProvider.setKey(key,val)
          prevPersistented[key]=JSON.stringify(val)
          // console.log({prevPersistented})
        }
      }
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
    var lastValueRef = useRef(cloneDeep(callback(Store)))
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


