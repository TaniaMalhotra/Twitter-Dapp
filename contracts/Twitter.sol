// SPDX-License-Identifier: MIT
pragma solidity >=0.6.12 <0.9.0;

//make a twitter contract and add likes functionailty



contract Twitter {
  
  struct tweets{
  string content;
  uint256 timestamp;
  address author;
  uint id;
  uint likes;
}
mapping(address => tweets[]) tweet;

event TweetCreated(uint256 id, address author, string content, uint256 timestamp);
event TweetLiked(address liker, address tweetAuthor, uint256 tweetId, uint256 newLikeCount);
event TweetUnliked(address unliker, address tweetAuthor, uint256 tweetId, uint256 newLikeCount);

//store tweets
function storeTweet(string memory content) public{
  tweets memory onetweet = tweets({
    content:content,
    timestamp: block.timestamp,
    author: msg.sender,
    id: tweet[msg.sender].length,
    likes:0
  });
  tweet[msg.sender].push(onetweet);
  emit TweetCreated(onetweet.id, onetweet.author, onetweet.content, onetweet.timestamp);
}

//get a particular tweet
function getTweet(address author, uint id) public view returns(string memory){
  return tweet[author][id].content;
}

function likeTweet(address author, uint id) external {
  tweet[author][id].likes++;
  emit TweetLiked(msg.sender, author, id, tweet[author][id].likes);
}

function unlikeTweet(address author, uint id) external {
  require(tweet[author][id].likes >0, "can't unlike this tweet");
  tweet[author][id].likes--;
  emit TweetUnliked(msg.sender, author, id, tweet[author][id].likes);
}

  
}
