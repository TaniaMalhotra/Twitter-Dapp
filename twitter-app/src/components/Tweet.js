import React from 'react'

export default function Tweet(props) {
  return (
    <div>
       <p>{props.tweet.content}</p>
       <p>{props.tweet.likes}</p>
      <button onClick = {() => props.IncLike(props.tweet.author, props.tweet.id)}>Like tweet
      </button>
    </div>
  )
}

