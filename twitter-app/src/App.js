import logo from './logo.svg';
import './App.css';
import Header from'./components/Header';
import InputArea from'./components/InputArea';
import Tweets from'./components/Tweets';
import React, {useState} from 'react';



function App() {

const [all_tweets, setTweets] = useState([
  
]);
  const OnDelete = (tweet) => 
{
  setTweets(all_tweets.filter(obj => {return obj!== tweet}));
}
const OnSubmiting = (tweet) => 
{
  setTweets([...all_tweets, { title: tweet.title, body: tweet.body }]);
}
  return (
   <>
   <Header title = "tweets"/>
   <InputArea whensubmit={OnSubmiting}/>
   <Tweets all_tweets = {all_tweets} delete_ = {OnDelete}/>
   
   </>
  );
}

export default App;