import React from 'react'
import Tweet from './Tweet'
export default function Tweets({all_tweets, delete_}) { //props.all_tweets
  return (
    all_tweets.map((tweet) => {return <Tweet onDelete ={delete_} tweet={tweet}></Tweet>})
  )
}