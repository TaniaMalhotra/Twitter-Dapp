// SPDX-License-Identifier: MIT
pragma solidity >=0.6.12 <0.9.0;

contract User{
    struct user{
        string name;
        string biodata;
    }
    mapping (address=>user) public usermap;

    function setProfile(string memory name, string memory biodata) public{
        user memory newuser = user({
            name:name,
            biodata:biodata
        });
        usermap[msg.sender] = newuser;
    }
    function getProfile(address Useraddress) public view returns(user memory){
        return usermap[Useraddress];
    }
}
