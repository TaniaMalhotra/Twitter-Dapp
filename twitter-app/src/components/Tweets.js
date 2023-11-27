import React from 'react'
import Tweet from './Tweet'
export default function Tweets(props) { //props.all_tweets
  return (
    props.all_tweets.map((tweet) => {return <Tweet tweet={tweet}></Tweet>})
  )
}


