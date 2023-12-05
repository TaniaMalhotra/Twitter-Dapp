var Twitter = artifacts.require("./Twitter.sol");
var User = artifacts.require("./User.sol")
module.exports = async function (deployer) {
  await deployer.deploy(User);
  const UserInstance = await User.deployed();

  await deployer.deploy(Twitter, UserInstance.address)
};

