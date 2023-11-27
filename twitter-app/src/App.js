import logo from './logo.svg';
import './App.css';
import Header from'./components/Header';
import InputArea from'./components/InputArea';
import Tweets from'./components/Tweets';
import React, {useState} from 'react';



function App() {

const [all_tweets, setTweets] = useState([
  {
    title:"title1",
    body:"body1"
  },
  {
    title:"title2",
    body:"body2"
  },
  {
    title:"title3",
    body:"body3"
  }
]);
  const OnDelete = (tweet) => 
{
  setTweets(all_tweets.filter(obj => {return obj!== tweet}));
}
  return (
   <>
   <Header title = "tweets"/>
   <InputArea/>
   <Tweets all_tweets = {all_tweets} delete_ = {OnDelete}/>
   
   </>
  );
}

export default App;