import logo from './logo.svg';
import './App.css';
import Header from'./components/Header';
import InputArea from'./components/InputArea';
import Tweets from'./components/Tweets';

let all_tweets = [
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
];

function App() {
  return (
   <>
   <Header title = "tweets"/>
   <InputArea/>
   <Tweets all_tweets = {all_tweets}/>
   
   </>
  );
}

export default App;