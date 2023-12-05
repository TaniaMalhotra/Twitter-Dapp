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
  const [currentAddress, setAddress] = useState("nill");

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
      const ac = await web3.eth.getAccounts();
      setAddress(ac[1])
      setState({ web3: web3, contract: contract });
    }
    provider && template();
  }, []);

const [all_tweets, setTweets] = useState([
  
]);


async function IncLike(addres , id)
{
  const { contract } = state;
  await contract.methods.likeTweet(addres, id).send({from:currentAddress, gas:10000000000});
  window.location.reload();
}

async function OnSubmiting(tweet)
{
  const { contract } = state;
  console.log(`in onsubmit function. Tweet to be stored is ${tweet}`);
  await contract.methods.storeTweet(tweet).send({from:currentAddress, gas:10000000000});
  DisplayTweets();
}


const DisplayTweets = async() => {
  console.log(`in display tweets`)
  const { contract } = state;
  if(contract){
    const data = await contract.methods.getTweets(currentAddress).call();
    setTweets(data);
  }
}

useEffect(() => {
  DisplayTweets();
},[state]); 

  return (
   <>
   <Header title = "tweets"/>
   <InputArea whensubmit={OnSubmiting}/>
   <Tweets all_tweets = {all_tweets} IncLike = {IncLike} />
   
   </>
  );
}

export default App;