// SPDX-License-Identifier: MIT
pragma solidity 0.5.1;
pragma experimental ABIEncoderV2;


interface IUser {
  struct user{
        string name;
        string biodata;
    }
  function getProfile(address Useraddress) external returns(user memory);
}
contract Twitter {
  
  struct tweets{
  uint content;
  uint256 timestamp;
  address author;
  uint id;
  uint likes;
}

mapping(address => tweets[]) tweet;

event TweetCreated(uint256 id, address author, uint content, uint256 timestamp);
event TweetLiked(address liker, address tweetAuthor, uint256 tweetId, uint256 newLikeCount);
event TweetUnliked(address unliker, address tweetAuthor, uint256 tweetId, uint256 newLikeCount);

IUser userContract;
constructor(address UserContractAddress) public
{
  userContract = IUser(UserContractAddress);
}

modifier onlyRegistered(){
  IUser.user memory newuser = userContract.getProfile(msg.sender);
  require(bytes(newuser.name).length>0, "you don't have a profile");
  _;
}
//store tweets
function storeTweet(uint content) public onlyRegistered{
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
function getTweet(address author, uint id) public view returns(uint){
  return tweet[author][id].content;
}

function getTweets(address author) public view returns(tweets[] memory){
  return tweet[author];
}



//like tweet
function likeTweet(address author, uint id) external onlyRegistered{
  tweet[author][id].likes++;
  emit TweetLiked(msg.sender, author, id, tweet[author][id].likes);
}

//unlike tweet
function unlikeTweet(address author, uint id) external onlyRegistered{
  require(tweet[author][id].likes >0, "can't unlike this tweet");
  tweet[author][id].likes--;
  emit TweetUnliked(msg.sender, author, id, tweet[author][id].likes);
}

//function to calculate total tweet likes for the user
function getTotalLikes(address user) public view returns(uint){
  uint total = 0;
  for(uint i = 0; i<tweet[user].length;i++ ){
    total += tweet[user][i].likes;
  }
  return total;
}
  
}





