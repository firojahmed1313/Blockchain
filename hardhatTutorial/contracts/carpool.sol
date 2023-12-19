//SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.0;

contract CarpoolingSystem {

    address driver;

    uint internal num_of_seats;
    uint internal rent;
    uint internal num_of_car;
    uint internal num_of_user;

    struct Car {
        address payable driver;
        uint id;
        uint num_of_seat;
        string phone;
        uint rent;
        string from;
        string dest;
    }

    mapping(uint => Car) internal car_by_id;

    struct User {
        address user;
        string from;
        string dest;
        string phone_no;
    }

    mapping(uint => User) internal user_by_id;

    Car[] public  carpools;

    User[] public  users;

    

    constructor() {
        driver = payable(msg.sender);
    }
    
    function driverAdd() public view returns (address){
        return driver;
    }
    modifier onlyOwner() {
        require(msg.sender == driver, "Only contract owner can perform this action");
        _;
    }
    modifier notOwner() {
        require(msg.sender != driver, "Only contract user can perform this action");
        _;
    }
    
    function addCar( uint _num_of_seat, string memory _phone, uint _rent, string memory _from, string memory _dest) public onlyOwner {
        uint carId = carpools.length + 1;
        carpools.push(Car(payable(msg.sender), carId, _num_of_seat, _phone, _rent, _from, _dest));
    }
    
    function addUser( string memory _from, string memory _dest, string memory _phone_no) public notOwner{
        users.push(User(msg.sender, _from, _dest, _phone_no));
    }
    
    function getUserCount() public view returns (uint) {
        return users.length;
    }
    
    function getCarCount() public view returns (uint) {
        return carpools.length;
    }

    function getAvailableCarpools() external view returns (Car[] memory) {
        return carpools;
    }

    function makePayment(uint _carId) public payable {
        require(_carId >= 0 && _carId <= carpools.length, "Invalid car ID");
    
        Car storage car = carpools[_carId];
        require(msg.sender != car.driver, "Cannot pay yourself");

        require(msg.value >= car.rent, "Insufficient funds to make payment");
    
        car.driver.transfer(msg.value);
    }

}