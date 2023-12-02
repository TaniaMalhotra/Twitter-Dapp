import React from 'react'

export default function Tweet({onDelete, tweet}) {
  return (
    <div>
      {console.log(tweet)}
      <p>{tweet}</p>
      <button onClick = {() => {onDelete(tweet)}}>Delete</button>
    </div>
  )
}
