import React from 'react'

export default function Tweet({onDelete, tweet}) {
  return (
    <div>

      <p>{tweet.title}</p>
      <button onClick = {() => {onDelete(tweet)}}>Delete</button>
    </div>
  )
}
