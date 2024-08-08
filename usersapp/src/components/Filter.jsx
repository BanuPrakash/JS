import React from 'react'

export default function Filter(props) {
    let {filterEvent} = props;
  return (
   <input type='text' placeholder='search by name' onChange={evt => filterEvent(evt.target.value)}/>
  )
}
