//@ts-nocheck
interface a{
  updateStore:()=>void
  useRerenderIfChange:(callback)=>void
  onBeforeRender:(callback:(prevStore)=>void)=>void
}

export function newStore<T>(state:T):(a & T) {
}