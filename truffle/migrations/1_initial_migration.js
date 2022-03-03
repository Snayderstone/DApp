const Migrations = artifacts.require("Migrations");
//migracion por defecto 
module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
