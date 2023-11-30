import logo from './logo.svg';
import './App.css';
import Header from'./components/Header';
import InputArea from'./components/InputArea';
import Tweets from'./components/Tweets';
import React, {useState, useEffect} from 'react';
import Twitter from "./contracts/Twitter.json";
import Web3 from "web3";


function App() {
  const [state, setState] = useState({
    web3: null,
    contract: null,
  });
  //const [data, setData] = useState("nill");

  useEffect(() => {
    const provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");

    async function template() {
      const web3 = new Web3(provider);
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = Twitter.networks[networkId];
      const contract = new web3.eth.Contract(
        Twitter.abi,
        deployedNetwork.address
      );
      console.log(contract);
      setState({ web3: web3, contract: contract });
    }
    provider && template();
  }, []);

  //read data
  // useEffect(() => {
  //   const { contract } = state;
  //   async function readData() {
  //     const data = await contract.methods.getter().call();
  //     setData(data);
  //   }
  //   contract && readData();
  // }, [state]);

  //write data
  // async function writeData() {
  //   const { contract } = state;
  //   const data = document.querySelector("#value").value;
  //   await contract.methods
  //     .storeTweet(data)
  //     .send({ from: "0x1f4F90f9aA5779f2C1E190133C2c872944bDED1c" });
  //   window.location.reload();
  // }
  // storeTweet

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