// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

contract funding {
    struct Data {
        string name;
        string message;
        uint256 timestamp;
        address from;
    }

    Data[] AllData;
    address payable owner;

    constructor() {
        owner = payable(msg.sender);
    }

    function sendMoney(string memory name, string memory message) public payable {
        require(msg.value > 0, "Please pay greater than 0 ether");
        owner.transfer(msg.value);
        AllData.push(Data(name, message, block.timestamp, msg.sender));
    }
    function massagef() public view returns (address){
        return owner;
    }
    function getData() public view returns (Data[] memory) {
        return AllData;
    }
}