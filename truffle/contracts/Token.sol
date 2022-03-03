// SPDX-License-Identifier: MIT
//Version
pragma solidity >=0.6.0 <0.8.0;
//inportaciones externas
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
//inicio del Contrato para realizar un token
contract Token is ERC20 {
  address public minter;
//Inicio del constructor con parametros
  constructor() payable ERC20('Moneda  Decentralizada', 'DBC') {
    minter = msg.sender;
  }
//funciones 
  function passMinterRole(address dBank) public returns (bool) {
    require(msg.sender == minter, 'Error, only the minter can pass the minter role.');
    minter = dBank;
    return true;
  }

  function mint(address account, uint256 amount) public {
    require(msg.sender == minter, 'Error, only the minter can mint.');
    _mint(account, amount);
  }
}
