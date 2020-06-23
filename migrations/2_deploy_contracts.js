var SupplyLedger = artifacts.require("./SupplyLedger.sol");

module.exports = function(deployer) {
  deployer.deploy(SupplyLedger);
}
