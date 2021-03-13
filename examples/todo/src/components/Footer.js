import React from 'react'
import store from '../store'

const Footer = () => (
  <div>
    <span>Show: </span>
    <span onClick={()=>{store.filter="ALL";store.updateStore()}}>
      All
    </span>
    &nbsp;
    <span onClick={()=>{store.filter="ACTIVE";store.updateStore()}}>
      Active
    </span>
    &nbsp;
    <span onClick={()=>{store.filter="COMPLETED";store.updateStore()}}>
      Completed
    </span>
    
  </div>
)

export default Footer
