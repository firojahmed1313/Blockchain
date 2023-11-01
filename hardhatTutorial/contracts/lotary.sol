// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract lotary {
    address public  maneger;
    address payable[] public player;
    
    constructor() {
        maneger=msg.sender;
    }
    function alredyEnter() view private returns(bool){
        for (uint i=0; i<player.length; i++) 
        {
            if(player[i]==msg.sender){
                return true;
            }
            
                
            
        }
        return false;
    }
    function ender() payable public  {
        require(msg.sender != maneger ,"Maneger not enter lotery");
        require(alredyEnter() == false ,"Any player enter only one times");
        require(msg.value >= 1 ether ,"Minimum fee 1 ether");
        player.push(payable(msg.sender));
        

    }
    function random() view private returns(uint){
        return uint(sha256(abi.encodePacked(block.prevrandao, block.number,player))) % player.length;
    }

    function chackWin() public {
        require(msg.sender == maneger,"Win pic shoude be maneger");
        uint winIndex=random();
        address contractAddress=address(this);
        player[winIndex].transfer(contractAddress.balance);
        player=new address payable[](0);


    }

    function playerName() view public returns (address payable[] memory ) {
        return player;
    }


}