// SPDX-License-Identifier: MIT
 //1. Version de el Programa de Solidity
pragma solidity >=0.6.0 <0.8.0;
//importaciones externas
import "./Token.sol";
//inicio del contrato inteligente
contract DBank {
    //Token de tipo privado
    Token private token;

     mapping(address => bool) public isDeposited;
     mapping(address => uint) public etherBalanceOf;
     mapping(address => uint) public depositStart;

    constructor (Token _token) {
        token = _token;
    }

    //Declaracion de Funciones de Deposito 
    function deposit() payable public {
        require(isDeposited[msg.sender] == false, 'Error, El deposito esta activo');
        require(msg.value >= 1e16, 'Error, el deposito debe ser >= 0.01 ETH');

        etherBalanceOf[msg.sender] = msg.value;
        isDeposited[msg.sender] = true;
        depositStart[msg.sender] = block.timestamp;
    }
   //Declaracion de Funciones de Retiro  
    function withdraw() public  {
        require(isDeposited[msg.sender] == true, 'Error, No tiene suficientes fondos.');
        //Creacion de variables 
        uint depositTime = block.timestamp - depositStart[msg.sender];
        uint interestPerSecond = 31668017 * (etherBalanceOf[msg.sender] / 1e16);
        uint interest = depositTime * interestPerSecond;

        msg.sender.transfer(etherBalanceOf[msg.sender]);
        token.mint(msg.sender, interest);

        etherBalanceOf[msg.sender] = 0;
        depositStart[msg.sender] = 0;
        isDeposited[msg.sender] = false;
    }
    //Fin del contrato inteligente
}