import React from 'react'
import Tweet from './Tweet'
export default function Tweets({all_tweets}) { //props.all_tweets
  return (
    all_tweets.map((tweet) => {return <Tweet tweet={tweet.content}></Tweet>})
  )
}