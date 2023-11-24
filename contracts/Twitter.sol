// SPDX-License-Identifier: MIT
pragma solidity >=0.6.12 <0.9.0;

//make a twitter contract and add likes functionailty



contract Twitter {
  
  struct tweets{
  string content;
  uint256 timestamp;
  address author;
  uint id;
}
mapping(address => tweets[]) tweet;

//store tweets
function storeTweet(string memory content) public{
  tweets memory onetweet = tweets({
    content:content,
    timestamp: block.timestamp,
    author: msg.sender,
    id: tweet[msg.sender].length
  });
  tweet[msg.sender].push(onetweet);
}

//get a particular tweet
function getTweet(address author, uint id) public view returns(string memory){
  return tweet[author][id].content;
}
  
}
