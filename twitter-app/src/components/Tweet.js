import React from 'react'

export default function Tweet({tweet}) {
  const likeCount = 0;
  
  return (
    <div>
      {console.log(tweet)}
      <p>{tweet}</p>
      <span>{likeCount}</span>
      <button>Like tweet
      </button>
    </div>
  )
}
