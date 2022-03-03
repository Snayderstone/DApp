//migraciones de nuestros contratos actualiza el archivo js con la información relacionada con la red.
//Carga los contratos
const Token = artifacts.require("Token");//funcion de abstraccion de contrato
const DBank = artifacts.require("DBank");

//Modulos de exportacion de los contratos 
module.exports = function(deployer) {
	let myToken;
	deployer.deploy(Token)
	.then(() => Token.deployed())
	.then((token) => {
		myToken = token;
		return deployer.deploy(DBank, token.address);
	})
	.then(() =>  DBank.deployed())
	.then((dBank) =>  myToken.passMinterRole(dBank.address));
}